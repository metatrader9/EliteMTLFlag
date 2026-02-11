import { Link } from 'react-router-dom'

function NewsCard({ post }) {
  return (
    <div className="post-entry">
      <Link to={`/blog/${post.id}`}>
        <img src={post.image} alt={post.title} className="img-fluid" />
      </Link>
      <div className="caption">
        <div className="caption-inner">
          <h3 className="mb-3">{post.title}</h3>
          <div className="author d-flex align-items-center">
            {post.author.avatar && (
              <div className="img mb-2 mr-3">
                <img src={post.author.avatar} alt={post.author.name} />
              </div>
            )}
            <div className="text">
              <h4>{post.author.name}</h4>
              <span>{post.date} • {post.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
