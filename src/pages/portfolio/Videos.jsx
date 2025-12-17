import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X, Calendar, Eye } from 'lucide-react'
import '../Portfolio.css'
import './Videos.css'

const videos = [
  {
    id: 1,
    title: '삼성전자 2024 체육대회 하이라이트',
    category: '기업행사',
    date: '2024.10',
    views: 2345,
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: '현대자동차 팀빌딩 프로그램',
    category: '팀빌딩',
    date: '2024.09',
    views: 1892,
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'LG전자 창립 75주년 기념행사',
    category: '공식의전',
    date: '2024.08',
    views: 3456,
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: '네이버 도전! 골든벨',
    category: '골든벨',
    date: '2024.07',
    views: 4123,
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: '카카오 가족 운동회',
    category: '기업행사',
    date: '2024.06',
    views: 2789,
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: '서울초등학교 가을운동회',
    category: '학교행사',
    date: '2024.10',
    views: 1567,
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
]

const categories = ['전체', '기업행사', '팀빌딩', '공식의전', '골든벨', '학교행사']

function Videos() {
  const [activeCategory, setActiveCategory] = useState('전체')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filteredVideos = activeCategory === '전체' 
    ? videos 
    : videos.filter(v => v.category === activeCategory)

  return (
    <div className="videos-page">
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
            <span className="page-badge">VIDEOS</span>
            <h1 className="page-title">
              행사<span className="gradient-text">영상</span>
            </h1>
            <p className="page-desc">
              성공적으로 진행된 주요 행사들의 하이라이트 영상
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
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

          {/* Videos */}
          <div className="videos-grid">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="video-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play">
                    <Play size={32} fill="white" />
                  </div>
                  <span className="video-category">{video.category}</span>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <div className="video-meta">
                    <span><Calendar size={14} /> {video.date}</span>
                    <span><Eye size={14} /> {video.views.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="video-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="video-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} />
            </button>
            <div className="video-embed">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-info">
              <h3>{selectedVideo.title}</h3>
              <span>{selectedVideo.category} · {selectedVideo.date}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Videos

