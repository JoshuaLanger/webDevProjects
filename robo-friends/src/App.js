import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

// STATE >>> props
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchField: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}
	render() {
		const filter = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div class='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filter} />
			</div>
		);
	}
}

export default App;