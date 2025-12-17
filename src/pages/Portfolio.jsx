import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Camera, ArrowRight } from 'lucide-react'
import './Portfolio.css'

const categories = [
  {
    icon: Play,
    title: '행사영상',
    desc: '성공적으로 진행된 주요 행사들의 하이라이트 영상을 확인하세요',
    path: '/portfolio/videos',
    count: '50+',
    color: '#ff6b35',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'
  },
  {
    icon: Camera,
    title: '행사스케치',
    desc: '다양한 행사 현장의 생생한 모습을 사진으로 만나보세요',
    path: '/portfolio/photos',
    count: '500+',
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  },
]

const recentWorks = [
  {
    title: '삼성전자 2024 체육대회',
    category: '기업행사',
    date: '2024.10',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  },
  {
    title: '현대자동차 팀빌딩 프로그램',
    category: '팀빌딩',
    date: '2024.09',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop'
  },
  {
    title: 'LG전자 창립 75주년 행사',
    category: '공식의전',
    date: '2024.08',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop'
  },
  {
    title: '서울초등학교 가을운동회',
    category: '학교행사',
    date: '2024.10',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
  },
  {
    title: 'SK텔레콤 송년회',
    category: '기업행사',
    date: '2024.11',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'
  },
  {
    title: '네이버 도전! 골든벨',
    category: '골든벨',
    date: '2024.07',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop'
  },
]

function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-badge">PORTFOLIO</span>
            <h1 className="page-title">
              포트<span className="gradient-text">폴리오</span>
            </h1>
            <p className="page-desc">
              해피라이트가 만들어온 성공적인 행사들을 확인하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section">
        <div className="container">
          <div className="portfolio-categories">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={cat.path} className="category-card">
                  <div className="category-image">
                    <img src={cat.image} alt={cat.title} />
                    <div className="category-overlay">
                      <div 
                        className="category-icon"
                        style={{ '--cat-color': cat.color }}
                      >
                        <cat.icon size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="category-content">
                    <div className="category-header">
                      <h3>{cat.title}</h3>
                      <span className="category-count">{cat.count} 작품</span>
                    </div>
                    <p>{cat.desc}</p>
                    <span className="category-link">
                      바로가기 <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="section recent-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">RECENT WORKS</span>
            <h2 className="section-title">
              최근 <span className="gradient-text">진행 행사</span>
            </h2>
          </motion.div>

          <div className="recent-works-grid">
            {recentWorks.map((work, index) => (
              <motion.div
                key={index}
                className="work-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="work-image">
                  <img src={work.image} alt={work.title} />
                  <div className="work-overlay">
                    <span className="work-category">{work.category}</span>
                    <h4 className="work-title">{work.title}</h4>
                    <span className="work-date">{work.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

