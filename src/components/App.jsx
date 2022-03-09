import ExampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // keep track of video list
      VideoList: [],
      isLoading: true,
      // Keep track of active video, change based on click event
      ActiveVideo: null
    };

    this.onSearch('react tutorials');
  }

  onVideoClick(video) {
    // console.log(video);
    this.setState({
      ActiveVideo: video
    });
  }

  onSearch (query) {
    searchYouTube(query, (videos) =>
      this.setState({
        ActiveVideo: videos[0],
        isLoading: false,
        VideoList: videos,

      })
    );
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search youtubeSearch={this.onSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.ActiveVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.VideoList} function={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
