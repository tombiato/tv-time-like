import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Shows from './components/shows/Shows';
import Home from './components/pages/Home';

// Contexts
import MovieState from './context/movie/MovieState';

const App = () => {
	return (
		<Router>
			<Header />
			<MovieState>
				<Route exact path='/' component={Home} />
			</MovieState>
		</Router>
	);
};

export default App;
