/**
 * =============================================================================
 * Header.jsx - 상단 네비게이션 헤더 컴포넌트
 * =============================================================================
 * 
 * 웹사이트 상단에 고정되는 헤더입니다.
 * 
 * 📌 주요 기능:
 * 1. 로고 표시 및 홈페이지 링크
 * 2. 데스크탑 네비게이션 메뉴 (드롭다운 서브메뉴 포함)
 * 3. 모바일 햄버거 메뉴 (반응형)
 * 4. 다크/라이트 테마 전환 버튼
 * 5. 스크롤 시 배경색 변경 효과
 * 6. 전화 연결 버튼
 * 
 * 📌 사용된 라이브러리:
 * - react-router-dom: 페이지 이동 (Link)
 * - framer-motion: 애니메이션 효과
 * - lucide-react: 아이콘
 * 
 * =============================================================================
 */

// React 훅 - 상태 관리 및 생명주기
import { useState, useEffect } from "react";

// 라우팅 - 페이지 이동 및 현재 경로 확인
import { Link, useLocation } from "react-router-dom";

// 애니메이션 라이브러리
import { motion, AnimatePresence } from "framer-motion";

// 아이콘 컴포넌트들 (lucide-react)
import {
  Menu,        // 햄버거 메뉴 아이콘
  X,           // 닫기 아이콘
  ChevronDown, // 아래 화살표
  Phone,       // 전화 아이콘
  Sparkles,    // 반짝이 아이콘 (로고용)
  ArrowRight,  // 오른쪽 화살표
  Sun,         // 해 아이콘 (라이트모드)
  Moon,        // 달 아이콘 (다크모드)
} from "lucide-react";

// 테마 관리 훅 (다크/라이트 모드)
import { useTheme } from "../context/ThemeContext";

// 헤더 전용 스타일
import "./Header.css";

/**
 * 네비게이션 메뉴 데이터
 * 
 * 각 메뉴 항목의 구조:
 * - name: 메뉴 이름 (화면에 표시됨)
 * - path: 클릭 시 이동할 URL
 * - submenu: 하위 메뉴 배열 (없으면 null)
 */
const navigation = [
  {
    name: "회사소개",
    path: "/about",
    submenu: [
      { name: "인사말", path: "/about/greeting" },
      { name: "조직도", path: "/about/organization" },
      { name: "주요실적", path: "/about/history" },
      { name: "공지사항", path: "/about/notice" },
    ],
  },
  {
    name: "사업분야",
    path: "/services",
    submenu: [
      { name: "공식의전행사", path: "/services/ceremony" },
      { name: "기업행사", path: "/services/corporate" },
      { name: "팀빌딩 프로그램", path: "/services/teambuilding" },
      { name: "체육대회", path: "/services/sports" },
      { name: "학교행사", path: "/services/school" },
      { name: "전시/컨벤션", path: "/services/exhibition" },
      { name: "골든벨 행사", path: "/services/goldenbell" },
      { name: "레크레이션", path: "/services/recreation" },
    ],
  },
  {
    name: "포트폴리오",
    path: "/portfolio",
    submenu: [
      { name: "행사영상", path: "/portfolio/videos" },
      { name: "행사스케치", path: "/portfolio/photos" },
    ],
  },
  {
    name: "섭외 및 대여",
    path: "/booking",
    submenu: [
      { name: "개그맨 섭외", path: "/booking/comedian" },
      { name: "MC/레크강사", path: "/booking/mc" },
      { name: "가수 섭외", path: "/booking/singer" },
      { name: "공연팀 섭외", path: "/booking/performance" },
      { name: "특강강사", path: "/booking/lecturer" },
      { name: "행사용품 대여", path: "/booking/equipment" },
    ],
  },
  {
    name: "고객센터",
    path: "/contact",
    submenu: null,  // 하위 메뉴 없음
  },
];

/**
 * Header 컴포넌트
 * 
 * 웹사이트 상단에 고정되어 네비게이션 기능을 제공합니다.
 */
function Header() {
  // ============================================
  // 상태(State) 관리
  // ============================================
  
  // 테마 정보 및 전환 함수 (ThemeContext에서 가져옴)
  const { theme, toggleTheme } = useTheme();
  
  // 스크롤 여부 - 50px 이상 스크롤하면 true
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 모바일 메뉴 열림/닫힘 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 데스크탑: 현재 열려있는 서브메뉴 이름
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  // 모바일: 현재 열려있는 서브메뉴 이름
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  
  // 현재 페이지 경로 정보 (react-router-dom)
  const location = useLocation();

  // ============================================
  // useEffect 훅들 - 컴포넌트 생명주기 관리
  // ============================================

  /**
   * 스크롤 감지
   * 50px 이상 스크롤하면 헤더 배경색 변경
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * 페이지 이동 시 메뉴 초기화
   * 다른 페이지로 이동하면 열려있던 메뉴들을 닫음
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    setMobileActiveSubmenu(null);
  }, [location]);

  /**
   * 모바일 메뉴 열림 시 스크롤 방지
   * 메뉴가 열려있을 때 배경 스크롤을 막음
   */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";  // 스크롤 막기
    } else {
      document.body.style.overflow = "";        // 스크롤 복원
    }
    
    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ============================================
  // 이벤트 핸들러 함수들
  // ============================================

  /**
   * 모바일 서브메뉴 토글
   * 같은 메뉴 클릭 시 닫고, 다른 메뉴 클릭 시 열기
   */
  const toggleMobileSubmenu = (name) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === name ? null : name);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src="/images/happylight.png" 
            alt="해피라이트" 
            className="logo-image"
          />
        </Link>

        <nav className="desktop-nav">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="nav-item"
              onMouseEnter={() => setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname.startsWith(item.path) ? "active" : ""
                }`}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown size={14} className="nav-chevron" />
                )}
              </Link>

              {item.submenu && (
                <AnimatePresence>
                  {activeSubmenu === item.name && (
                    <motion.div
                      className="submenu"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="submenu-inner">
                        {item.submenu.map((subItem, index) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link to={subItem.path} className="submenu-link">
                              <span>{subItem.name}</span>
                              <ArrowRight size={14} className="submenu-arrow" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="contact-btn">
            <Phone size={16} />
            <span className="contact-text">상담하기</span>
          </Link>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="테마 변경"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <Link to="/" className="logo">
                  <img 
                    src="/images/happylight.png" 
                    alt="해피라이트" 
                    className="logo-image"
                  />
                </Link>
                <button
                  className="mobile-close-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <div
                className="mobile-menu-actions"
                style={{ padding: "0 1.5rem", marginBottom: "1rem" }}
              >
                <button
                  className="theme-toggle mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label="테마 변경"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem",
                    width: "100%",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "12px",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{theme === "dark" ? "라이트 모드" : "다크 모드"}</span>
                </button>
              </div>

              <nav className="mobile-nav">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="mobile-nav-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.submenu ? (
                      <>
                        <button
                          className={`mobile-nav-link ${
                            mobileActiveSubmenu === item.name ? "active" : ""
                          }`}
                          onClick={() => toggleMobileSubmenu(item.name)}
                        >
                          {item.name}
                          <ChevronDown
                            size={18}
                            className={`mobile-chevron ${
                              mobileActiveSubmenu === item.name ? "rotated" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileActiveSubmenu === item.name && (
                            <motion.div
                              className="mobile-submenu"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="mobile-submenu-link"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link to={item.path} className="mobile-nav-link">
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mobile-menu-footer">
                <a href="tel:010-3433-1282" className="mobile-phone-btn">
                  <Phone size={20} />
                  <span>010-3433-1282</span>
                </a>
                <Link to="/contact" className="mobile-contact-btn">
                  무료 상담 신청
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// 다른 파일에서 사용할 수 있도록 내보내기
export default Header;
