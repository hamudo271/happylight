import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, Star } from 'lucide-react'
import './BookingCategory.css'

const categoriesData = {
  comedian: {
    title: '개그맨 섭외',
    subtitle: '행사의 분위기를 살리는 최고의 선택',
    desc: '인기 개그맨들의 재치 있는 진행으로 행사의 분위기를 한껏 끌어올려 드립니다. 기업행사, 체육대회, 송년회 등 다양한 행사에서 큰 호응을 얻고 있습니다.',
    items: [
      { name: '김영철', position: 'KBS 개그콘서트', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '박성광', position: 'MBC 코미디', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', rating: 4.8 },
      { name: '유민상', position: 'KBS 개그콘서트', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '장동민', position: '개그맨/MC', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop', rating: 4.7 },
      { name: '이수근', position: '개그맨/MC', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '박나래', position: 'MBC 코미디', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', rating: 4.8 },
    ]
  },
  mc: {
    title: 'MC/레크강사',
    subtitle: '완벽한 진행, 잊지 못할 행사',
    desc: '전문 MC와 레크레이션 강사가 행사를 완벽하게 진행합니다. 기업행사, 체육대회, 학교행사 등 모든 행사에서 참가자들의 만족도를 높여드립니다.',
    items: [
      { name: '이현주', position: '전문MC 15년', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop', rating: 5.0 },
      { name: '김재민', position: '레크레이션 전문', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '박소영', position: '기업행사 MC', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop', rating: 4.8 },
      { name: '최진호', position: '체육대회 전문', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '정미래', position: '웨딩MC', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop', rating: 4.7 },
      { name: '한동훈', position: '골든벨 전문', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', rating: 4.8 },
    ]
  },
  singer: {
    title: '가수 섭외',
    subtitle: '다양한 장르, 최고의 아티스트',
    desc: '트로트, 발라드, K-POP 등 다양한 장르의 가수를 섭외해 드립니다. 행사의 성격과 참가자 특성에 맞는 최적의 아티스트를 추천해 드립니다.',
    items: [
      { name: '송가인', position: '트로트 가수', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', rating: 5.0 },
      { name: '임영웅', position: '트로트 가수', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', rating: 5.0 },
      { name: '박진영', position: '발라드 가수', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '허각', position: '발라드 가수', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.8 },
      { name: '홍진영', position: '트로트 가수', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '장민호', position: '트로트 가수', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop', rating: 4.8 },
    ]
  },
  performance: {
    title: '공연팀 섭외',
    subtitle: '화려한 무대, 잊지 못할 공연',
    desc: '댄스, 마술, 비보이, 밴드 등 다양한 공연팀을 섭외해 드립니다. 행사의 하이라이트를 장식할 최고의 공연을 약속합니다.',
    items: [
      { name: '저스트절크', position: '댄스팀', image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '매직캣', position: '마술팀', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&h=300&fit=crop', rating: 4.8 },
      { name: '진조크루', position: '비보이팀', image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=300&h=300&fit=crop', rating: 5.0 },
      { name: '플레이밴드', position: '라이브밴드', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', rating: 4.7 },
      { name: '서울사물놀이', position: '국악팀', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '아크로바틱스', position: '아크로바틱', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=300&h=300&fit=crop', rating: 4.8 },
    ]
  },
  lecturer: {
    title: '특강강사',
    subtitle: '영감을 주는 특별한 강연',
    desc: '동기부여, 리더십, 소통, 트렌드 등 다양한 분야의 전문 강사를 연결해 드립니다. 기업 워크샵, 세미나 등에 최적화된 강연을 제공합니다.',
    items: [
      { name: '김미경', position: '동기부여 강사', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop', rating: 5.0 },
      { name: '최태성', position: '역사 강사', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '설민석', position: '역사 강사', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '김창옥', position: '소통 전문가', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop', rating: 4.8 },
      { name: '이지영', position: '리더십 강사', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop', rating: 4.7 },
      { name: '정세랑', position: '트렌드 강사', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop', rating: 4.8 },
    ]
  },
  equipment: {
    title: '행사용품 대여',
    subtitle: '행사에 필요한 모든 것',
    desc: '에어바운스, 게임도구, 음향장비, 무대장치 등 행사에 필요한 모든 장비와 용품을 대여해 드립니다. 설치부터 철거까지 원스톱으로 진행합니다.',
    items: [
      { name: '대형 에어바운스', position: '실외용', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '미니 에어바운스', position: '실내용', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop', rating: 4.8 },
      { name: '음향장비 세트', position: '스피커/마이크', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', rating: 5.0 },
      { name: '조명장비', position: '무대조명', image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=300&h=300&fit=crop', rating: 4.7 },
      { name: '게임도구 세트', position: '레크레이션용', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop', rating: 4.9 },
      { name: '포토존 세트', position: '배경/소품', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop', rating: 4.8 },
    ]
  }
}

function BookingCategory() {
  const { categoryId } = useParams()
  const category = categoriesData[categoryId]

  if (!category) {
    return (
      <div className="not-found">
        <h1>카테고리를 찾을 수 없습니다</h1>
        <Link to="/booking" className="btn btn-primary">
          섭외/대여 목록으로
        </Link>
      </div>
    )
  }

  return (
    <div className="booking-category-page">
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
            <span className="page-badge">BOOKING</span>
            <h1 className="page-title">
              {category.title.split(' ')[0]}
              <span className="gradient-text"> {category.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="page-desc">{category.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div className="container">
          <motion.p
            className="category-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {category.desc}
          </motion.p>

          {/* Items Grid */}
          <div className="items-grid">
            {category.items.map((item, index) => (
              <motion.div
                key={index}
                className="item-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <span className="item-position">{item.position}</span>
                  <div className="item-rating">
                    <Star size={14} fill="#ffd700" color="#ffd700" />
                    <span>{item.rating.toFixed(1)}</span>
                  </div>
                </div>
                <button className="item-inquiry-btn">
                  문의하기
                </button>
              </motion.div>
            ))}
          </div>

          {/* More Info */}
          <motion.div
            className="more-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              위에 표시되지 않은 섭외 항목도 문의 가능합니다.<br />
              원하시는 인물/장비가 있으시면 편하게 문의해 주세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section booking-category-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>섭외 문의하기</h2>
            <p>전문 컨설턴트가 최적의 섭외를 도와드립니다</p>
            <div className="cta-buttons">
              <a href="tel:010-1234-5678" className="btn btn-primary">
                <Phone size={18} />
                010-1234-5678
              </a>
              <Link to="/contact" className="btn btn-secondary">
                온라인 문의
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BookingCategory

