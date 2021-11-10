import './App.css';
import BioCard from './components/BioCard';
import AlbumCard from './components/AlbumCard';

function App() {
	return (
	<main className="app">
		<div className="container mx-auto px-4 lg:px-0 space-y-8">
			<BioCard></BioCard>
			<div className="album-card-grid">
				<AlbumCard></AlbumCard>
			</div>
		</div>
	</main>
	);
}

export default App;
