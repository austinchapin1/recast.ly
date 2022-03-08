import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em> test</h5></div>
    <h1>{console.log(props)}</h1>
    {props.videos.map(video =>
      <VideoListEntry movie={video}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


// {props.groceries.map(grocery =>
//   <GroceryListItem grocery={grocery} />
// )}

// <VideoList videos={[exampleData]}/>



