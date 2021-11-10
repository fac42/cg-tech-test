import './BioCard.css';
import profilePic from '../img/profile.jpeg';

function BioCard(props) {
	return (
		<div className="bio-card">
			<div className="bio-content">
				<div className="bio-image-wrapper">
					<img src={profilePic} alt="Profile"/>
				</div>
				<div className="bio-main">
					<h1 className="profile-name">{props.data.name}</h1>
					<div className="bio-text-wrapper">
						<div className="bio-text">
							<h2 className="subtitle">Bio</h2>
							<p className="description">{props.data.bio}</p>
						</div>
						<div className="bio-contact">
							<div>
								<h2 className="contact-info-title">Phone</h2>
								<p className="contact-info-data">{props.data.phone}</p>
							</div>
							<div>
								<h2 className="contact-info-title">Email</h2>
								<p className="contact-info-data">{props.data.email}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BioCard;