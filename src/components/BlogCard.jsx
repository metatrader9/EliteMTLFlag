import { Link } from 'react-router-dom'

function BlogCard({ post, layout = 'vertical' }) {
  if (layout === 'horizontal') {
    return (
      <div className="custom-media d-flex">
        <div className="img mr-4">
          <img src={post.image} alt={post.title} className="img-fluid" />
        </div>
        <div className="text">
          <span className="meta">{post.date}</span>
          <h3 className="mb-4">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
          <p><Link to={`/blog/${post.id}`}>Read more</Link></p>
        </div>
      </div>
    )
  }

  return (
    <div className="custom-media d-block">
      <div className="img mb-4">
        <Link to={`/blog/${post.id}`}>
          <img src={post.image} alt={post.title} className="img-fluid" />
        </Link>
      </div>
      <div className="text">
        <span className="meta">{post.date}</span>
        <h3 className="mb-4">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <p><Link to={`/blog/${post.id}`}>Read more</Link></p>
      </div>
    </div>
  )
}

export default BlogCard
