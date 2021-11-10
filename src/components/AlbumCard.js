import './AlbumCard.css';
import landscapeImageOne from '../img/landscape1.jpeg';

function AlbumCard(props) {
	let featuredIconClass = props.isFeatured ? 'visible' : 'invisible';
	return(
		<article className="album-card">
			<div className="card-upper">
				<img className="card-image" src={landscapeImageOne} alt="Landscape"/>
				<h2 className="card-title">
					Card Title
				</h2>
			</div>
			<div className="card-lower">
				<p className="card-description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui omnis ipsa unde aut eos!
				</p>
				<div className="card-metadata">
					<div className={featuredIconClass}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
						</svg>
					</div>
					<p className="date">2021-11-11</p>
				</div>
			</div>
		</article>
	)
}

export default AlbumCard;