import React from 'react';

function Blogpost(props) {
	if (props.post){	 
		return (
			<>
			<div className="container">
			<div className="row">
			<div className="col-12 col-md-8">
				<h1 className="post-title ">{props.post.title}</h1>
				{props.post.featured_image ? (
              <img className= "img-fluid img-responsive post-main-image" alt="article header"
                src={props.post.featured_image}/>
            	) : (
              	""
            	)}
	         	<div dangerouslySetInnerHTML={{__html: '<div class="post-content">' + props.post.content + '</div>'}} />
			</div>
			</div>
			</div>	
			</>
		)
	}

	else {
		return(
			<div></div>
		)
	}


}


export default Blogpost;