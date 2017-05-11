import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDOZVmlJpsTZy9ioUo3yXILgvbPH7cO3d4';

const App = () => {
  return (
    <div>
      <SearchBar />
  </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
