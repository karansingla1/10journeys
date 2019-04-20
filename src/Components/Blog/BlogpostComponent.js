import React from 'react';
import ShareButton from 'react-social-share-buttons'

function Blogpost(props) {
	if (props.post){	 
		return (
			<>
				{props.post.featured_image ? (
              <img className= "img-fluid img-responsive" alt="article header"
                src={props.post.featured_image}/>
            	) : (
              	""
            	)}

				<div class = "container">
	            	<h1 className="text-center">{props.post.title}</h1>
					<p className ="post-content" dangerouslySetInnerHTML={{__html: props.post.content}} />
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