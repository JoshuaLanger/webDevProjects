import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {robots} from '../robots';
import '../containers/App.css';

// TODO: Add searchbox to add robot

// STATE >>> props
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [] ,
			searchField: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}
	render() {
		const {robots, searchField} = this.state;
		const filter = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ?
			<h1>Loading...</h1> :
			(
				<div class='tc'>
					<h1 class='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filter} />
					</Scroll>
				</div>
			);
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				response.json();
			})
			.then(users => {
				this.setState({robots: robots});
			})
	}
}

export default App;