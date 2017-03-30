import React from 'react'
import Item from './item'

const List = (props) => {
	var videos = props.videos;
	videos.sort(function(obj1, obj2){
		if(obj1.snippet.title>obj2.snippet.title) return 1;
		if(obj1.snippet.title<obj2.snippet.title) return -1;
		else return 0;
	});
	console.log(videos);
  return (
    <ul className="media-list">
      {videos.map((video) => {
        return <Item onVideoSelect={props.onVideoSelect} video={video} key={video.etag} />
      })}
    </ul>
  )
}


export default List
