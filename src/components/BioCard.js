import './BioCard.css';
import profilePic from '../img/profile.jpeg';

function BioCard() {
	return (
		<div className="bio-card">
			<div className="bio-content">
				<div className="bio-image-wrapper">
					<img src={profilePic} alt="Profile" />
				</div>
				<div className="bio-main">
					<h1 className="profile-name">Nick Reynolds</h1>
					<div className="bio-text-wrapper">
						<div className="bio-text">
							<h2 className="subtitle">Bio</h2>
							<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						<div className="bio-contact">
							<div>
								<h2 className="subtitle">Phone</h2>
								<p class="contact-info"></p>
							</div>
							<div>
								<h2 className="subtitle">Email</h2>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BioCard;