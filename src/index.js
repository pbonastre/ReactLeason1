import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//https://console.developers.google.com
const API_KEY = 'AIzaSyAh-pcJ6GbEmTmg5WGnXQpzjsMiplmmEGs';
//Create a new component. This component should produce some HTML

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
}

// Take this component's generated html and put it in the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
