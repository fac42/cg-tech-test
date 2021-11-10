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
				const json = await response.json();
				setProfileData(json);
				setAlbumData(json.album)

			}
			catch (error) {
				console.log(error);
			}
		}
		fetchData()
	},[])

	console.log(albumData);
	return (
	<main className="app">
		<div className="container mx-auto px-4 lg:px-0 space-y-8">
			<BioCard data={profileData}></BioCard>
			<div className="album-card-grid">
				{albumData.map((item) => {
					return <AlbumCard data={item} key={item.id}></AlbumCard>
				})}
			</div>
		</div>
	</main>
	);
}

export default App;
