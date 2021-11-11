import './AlbumCard.css';

function AlbumCard(props) {
	let featuredIconCssClass = props.data.featured ? 'visible' : 'invisible';
	return(
		<article className="album-card">
			<div className="card-upper">
				<img className="card-image" src={`${process.env.PUBLIC_URL}/${props.data.img}`} alt="Landscape"/>
				<h2 className="card-title">
					{props.data.title}
				</h2>
			</div>
			<div className="card-lower">
				<p className="card-description">
					{props.data.description}
				</p>
				<div className="card-metadata">
					<div className={featuredIconCssClass}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
						</svg>
					</div>
					<p className="date">{props.data.date}</p>
				</div>
			</div>
		</article>
	)
}

export default AlbumCard;