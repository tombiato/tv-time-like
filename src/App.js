import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

// Contexts
import MovieState from './context/movie/MovieState';

const App = () => {
	return (
		<Router>
			<Header />
			<MovieState>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/favorites' component={Favorites} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</MovieState>
		</Router>
	);
};

export default App;
