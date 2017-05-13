import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_details';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDOZVmlJpsTZy9ioUo3yXILgvbPH7cO3d4';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
        this.setState({ videos }); //resolves to {'videos' : videos}, works when key and value are equal
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
