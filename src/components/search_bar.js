import React, { Component } from 'react';

// Create a class based component
// Class based components are used when 
// a component needs to be aware of state

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input 
				value ={this.state.term}
				  />
			</div>
		); 
	}
}

export default SearchBar;