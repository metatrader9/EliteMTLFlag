import { useState } from 'react'
import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import { blogPosts } from '../data/siteData'

function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Hero 
        title="Rankings"
        subtitle="Season 1 begins May 18th 2026"
        backgroundImage="/images/hero-bg.png"
        centered
      />

      <div className="container site-section">
        <div className="row">
          <div className="col-lg-6 title-section">
            <h2 className="heading">Latest Rankings</h2>
          </div>
        </div>
        <div className="row">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-lg-4 mb-4">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <Pagination 
              totalItems={blogPosts.length}
              itemsPerPage={postsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
