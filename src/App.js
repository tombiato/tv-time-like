import Header from './components/layout/Header';
import Shows from './components/shows/Shows';
import Home from './components/pages/Home';

// Contexts
import MovieState from './context/movie/MovieState';

const App = () => {
	return (
		<MovieState>
			<Header />
			<Home />
			<Shows />
		</MovieState>
	);
};

export default App;
