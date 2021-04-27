import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Register from './pages/Register';
import Login from './pages/Login';

// Contexts
import MovieState from './context/movie/MovieState';
import { AuthProvider } from './context/auth/AuthContext';

const App = () => {
	return (
		<AuthProvider>
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
		</AuthProvider>
	);
};

export default App;
