import { useState } from 'react'

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="custom-pagination">
      {pages.map((page) => (
        currentPage === page ? (
          <span key={page}>{page}</span>
        ) : (
          <a 
            key={page} 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              onPageChange(page)
            }}
          >
            {page}
          </a>
        )
      ))}
    </div>
  )
}

export default Pagination
