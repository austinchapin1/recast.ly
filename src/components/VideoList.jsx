import VideoListEntry from './VideoListEntry.js';

// { videos, state, function }
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} state={props.state} function={props.function}/>
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



