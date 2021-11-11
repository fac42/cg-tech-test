import React, { useState, useEffect} from 'react';
import './App.css';
import BioCard from './components/BioCard';
import AlbumCard from './components/AlbumCard';

function App() {
	const [profileData, setProfileData] = useState({});
	const [albumData, setAlbumData] = useState([]);

	useEffect(() => {
		const url = "http://localhost:8000/";
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const {album: albumData, ...profileData} = await response.json();
				setProfileData(profileData);
				setAlbumData(albumData);
				// console.log(albumData);
			}
			catch (error) {
				console.log(error);
			}
		}
		fetchData()
	},[])
	return (
	<main className="app">
		<div className="container mx-auto px-4 lg:px-0 space-y-8">
			<BioCard data={profileData}></BioCard>
			<div className="album-card-grid">
				{albumData ? albumData.map((item) => {
					return <AlbumCard data={item} key={item.id}></AlbumCard>
				}) : <p>Loading..</p>}
			</div>
		</div>
	</main>
	);
}

export default App;
