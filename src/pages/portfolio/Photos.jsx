import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import '../Portfolio.css'
import './Photos.css'

const photos = [
  {
    id: 1,
    title: '삼성전자 체육대회',
    category: '기업행사',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: '현대자동차 팀빌딩',
    category: '팀빌딩',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'LG전자 창립기념일',
    category: '공식의전',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: '네이버 골든벨',
    category: '골든벨',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: '카카오 가족운동회',
    category: '기업행사',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: '서울초등학교 운동회',
    category: '학교행사',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
  },
  {
    id: 7,
    title: 'SK텔레콤 송년회',
    category: '기업행사',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop'
  },
  {
    id: 8,
    title: 'CJ그룹 워크샵',
    category: '팀빌딩',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop'
  },
  {
    id: 9,
    title: '롯데마트 체육대회',
    category: '기업행사',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop'
  },
  {
    id: 10,
    title: '분당초 가을운동회',
    category: '학교행사',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop'
  },
  {
    id: 11,
    title: '현대건설 창립행사',
    category: '공식의전',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop'
  },
  {
    id: 12,
    title: '배달의민족 레크레이션',
    category: '팀빌딩',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop'
  },
]

const categories = ['전체', '기업행사', '팀빌딩', '공식의전', '골든벨', '학교행사']

function Photos() {
  const [activeCategory, setActiveCategory] = useState('전체')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filteredPhotos = activeCategory === '전체' 
    ? photos 
    : photos.filter(p => p.category === activeCategory)

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="photos-page">
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
            <span className="page-badge">PHOTOS</span>
            <h1 className="page-title">
              행사<span className="gradient-text">스케치</span>
            </h1>
            <p className="page-desc">
              다양한 행사 현장의 생생한 모습을 사진으로 만나보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos */}
          <div className="photos-grid">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="photo-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedIndex(index)}
              >
                <img src={photo.image} alt={photo.title} />
                <div className="photo-overlay">
                  <ZoomIn size={24} />
                  <span className="photo-category">{photo.category}</span>
                  <h4 className="photo-title">{photo.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>
            
            <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
              <ChevronLeft size={32} />
            </button>
            
            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredPhotos[selectedIndex].image} 
                alt={filteredPhotos[selectedIndex].title}
              />
              <div className="lightbox-info">
                <span className="lightbox-category">{filteredPhotos[selectedIndex].category}</span>
                <h3>{filteredPhotos[selectedIndex].title}</h3>
              </div>
            </motion.div>
            
            <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
              <ChevronRight size={32} />
            </button>
            
            <div className="lightbox-counter">
              {selectedIndex + 1} / {filteredPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Photos

