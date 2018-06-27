import React, {Component} from 'react';
import CardList from '../components/CardList';
import FilterSearch from '../components/FilterSearch';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

// STATE >>> props
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [] ,
			searchField: '',
			searchFilter: 'includes'
		}
	}
	onSearchChange = (event) => {
		const target = event.target;
		target.tagName === 'INPUT' ? 
			this.setState({searchField: target.value}) :
			this.setState({searchFilter: target.value});
		console.log(this.state);
	}
	render() {
		const {robots, searchField} = this.state;
		const filter = robots.filter(robot => {
			// TODO: switch statement
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ?
			<h1>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<FilterSearch searchChange={this.onSearchChange}/>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filter} />
					</Scroll>
				</div>
			);
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({'robots': users})})
	}
}

export default App;