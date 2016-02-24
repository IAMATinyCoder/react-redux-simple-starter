import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAV6iehI7YK69O7gTC8UkmDVaw4DPhvh3o';

// Create new component. Should produce HTML

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));