

class VideoListEntry extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (

      <div className="video-list-entry media">
        <h1>{console.log('test')}</h1>
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.movie.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.movie.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.movie.snippet.description}</div>
        </div>
      </div>

    );
  }

}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       done: false,
//       bold: false
//     };
//   }

//   render() {

//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none',
//     };
//     if (this.state.bold) {
//       var weight = '900';
//     } else {
//       var weight = 'normal';
//     }


//     return(
//       <li style={style}>{this.props.grocery}</li>
//     );
//   }
// }