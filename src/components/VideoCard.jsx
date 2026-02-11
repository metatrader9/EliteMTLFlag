function VideoCard({ video, player = null }) {
  return (
    <div className="video-media">
      <img src={video.thumbnail || player?.image} alt={video.title || player?.name} className="img-fluid" />
      <a 
        href={video.url || player?.videoUrl} 
        className="d-flex play-button align-items-center" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span className="icon mr-3">
          <span className="icon-play"></span>
        </span>
        <div className="caption">
          {player && (
            <span className="meta">#{player.number} / {player.position}</span>
          )}
          <h3 className="m-0">{video.title || player?.name}</h3>
        </div>
      </a>
    </div>
  )
}

export default VideoCard
