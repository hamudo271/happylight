import { motion } from 'framer-motion'
import { Quote, Heart, Target, Users } from 'lucide-react'
import '../About.css'
import './Greeting.css'

const values = [
  {
    icon: Heart,
    title: '진심을 담은 서비스',
    desc: '고객의 성공이 곧 우리의 성공입니다. 모든 행사에 진심을 담아 준비합니다.'
  },
  {
    icon: Target,
    title: '완벽을 향한 열정',
    desc: '사소한 디테일까지 놓치지 않는 꼼꼼함으로 완벽한 행사를 만들어갑니다.'
  },
  {
    icon: Users,
    title: '함께하는 성장',
    desc: '고객, 파트너, 직원 모두가 함께 성장하는 지속 가능한 가치를 추구합니다.'
  },
]

function Greeting() {
  return (
    <div className="greeting-page">
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
            <span className="page-badge">GREETING</span>
            <h1 className="page-title">
              인사<span className="gradient-text">말</span>
            </h1>
            <p className="page-desc">
              해피라이트 엔터테인먼트의 철학과 비전을 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section">
        <div className="container">
          <motion.div
            className="greeting-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="greeting-image">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" 
                alt="대표이사"
              />
              <div className="greeting-image-label">
                <span className="name">김영성</span>
                <span className="position">대표</span>
              </div>
            </div>
            
            <div className="greeting-message">
              <Quote className="quote-icon" size={48} />
              
              <h2 className="greeting-title">
                특별한 순간을<br />
                <span className="gradient-text">함께 만들어갑니다</span>
              </h2>
              
              <div className="greeting-text">
                <p>
                  안녕하세요, 해피라이트 엔터테인먼트 대표 김영성입니다.
                </p>
                <p>
                  저희 해피라이트 엔터테인먼트는 다양한 현장에서 축적된 경험과 전문성을 바탕으로,
                  MC, 강사 진행, 기획·연출까지 아우르는 종합 행사대행 기획사입니다.
                </p>
                <p>
                  가족의 소중한 순간부터 기업·학교·지역축제, 도시재생 문화사업,
                  대규모 캠프와 전시회까지 - 어떤 자리든 따뜻하고 즐겁게 채워드립니다.
                </p>
                <p>
                  B2C(개인), B2B(기업), B2G(공공기관) 전 영역에서 맞춤형 서비스를 제공하며,
                  참석자 모두가 만족할 수 있는 행사 기획을 실현합니다.
                </p>
                <p>
                  "현장에 강한 기획력, 따뜻한 감동이 있는 연출"<br />
                  해피라이트 엔터테인먼트가 함께합니다.
                </p>
              </div>
              
              <div className="greeting-signature">
                <span>해피라이트 엔터테인먼트 대표</span>
                <span className="signature-name">김 영 성</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">OUR VALUES</span>
            <h2 className="section-title">
              우리의 <span className="gradient-text">핵심 가치</span>
            </h2>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Greeting

