import React from 'react';
import { FacebookIcon,TwitterIcon,WhatsappIcon,} from 'react-share';
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton,
  } from 'react-share';
import { Helmet } from "react-helmet";


function Blogpost(props) {
	if (props.post){	 
		return (
			<>

			<Helmet>
	            <title>{props.post.title}</title>
	            <meta name="description" content={props.post.excerpt} />
	            <meta property="og:image" content={props.post.featured_image}/>
    			<meta property="og:image:secure_url" content={props.post.featured_image}/>
    			<meta property="og:title" content={props.post.title}/>
	            <meta property="og:image:alt" content={props.post.title}/>


          	</Helmet>

			<div className="container">
			<div className="row">
			<div className="col-12 col-md-8">
				<h1 className="post-title ">{props.post.title}</h1>
				<div className="row post-share mb-4">
				<div className="col-auto align-self-center post-share-text">
					Share this article.
				</div>

				<FacebookShareButton className="col-auto" 
				url = {"10journeys.com/#/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-')}>
		          <FacebookIcon size={42} round={true} />
	              </FacebookShareButton>

	              <TwitterShareButton className="col-auto" url = {"10journeys.com/#/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-')}>
		          <TwitterIcon size={42} round={true} />
	              </TwitterShareButton>

	              <WhatsappShareButton className="col-auto" url = {"10journeys.com/#/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-')}>
		          <WhatsappIcon size={42} round={true} />
	              </WhatsappShareButton>
	            </div>  


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