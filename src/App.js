import React, { useState, useEffect} from 'react';
import './App.css';
import BioCard from './components/BioCard';
import AlbumCard from './components/AlbumCard';

function App() {
	const [data, setData] = useState();
	useEffect(() => {
		const url = "http://localhost:8000/";
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(data);
				setData(json);

			}
			catch (error) {
				console.log(error);
			}
		}
		fetchData()
	},[data])

	return (
	<main className="app">
		<div className="container mx-auto px-4 lg:px-0 space-y-8">
			<BioCard data={data}></BioCard>
			<div className="album-card-grid">
				{data.album.map((item) => {
					return <AlbumCard data={item}></AlbumCard>
				})}
			</div>
		</div>
	</main>
	);
}

export default App;
