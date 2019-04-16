import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink,Col,Jumbotron, Container } from 'reactstrap';
import { FacebookIcon,TwitterIcon,TelegramIcon,WhatsappIcon,GooglePlusIcon,LinkedinIcon,
  PinterestIcon, RedditIcon,TumblrIcon,EmailIcon,} from 'react-share';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  EmailShareButton,
} from 'react-share';


function ArticlePreview(props) {

	return (
		<div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-4"> 
			<div className="article">

			<Card>
					        <CardImg top width="100%" src={props.post.featured_image} alt="Card image cap" />
					        <CardBody>
					          <CardTitle>{props.post.title}</CardTitle>
					          <CardText className="articleExcerpt" dangerouslySetInnerHTML={{__html: props.post.excerpt}} />
					          
						         <div className='row'>
							          	<Link className="ml-2" to = {"/blog/" + props.post.ID}>
							          	<span className='btn btn-warning mr-3'>Read more!</span>
							          	</Link>
							          

							          <div className = 'col-auto'> 
							          <FacebookShareButton className="row" url = {"10journeys.com/blog" + props.post.ID}>
							          <FacebookIcon size={42} round={true} />
						              </FacebookShareButton>
						              </div>

						              <div className = 'col-auto'> 
							          <TwitterShareButton className="row" url = {"10journeys.com/blog" + props.post.ID}>
							          <TwitterIcon size={42} round={true} />
						              </TwitterShareButton>
						              </div>

						              <div className = 'col-auto'> 
							          <WhatsappShareButton className="row" url = {"10journeys.com/blog" + props.post.ID}>
							          <WhatsappIcon size={42} round={true} />
						              </WhatsappShareButton>
						              </div>

						        </div>      	
					        </CardBody>
				      </Card>
          	</div>
		</div>
	)
}

function Articles(props) {

	const preview = props.posts.map(post => {
				return(
					<ArticlePreview key = {post.ID} post = {post} />				)
			}
		)
	return (
		<>
			<Jumbotron fluid>
	          <Container className ="container" fluid>
	            <h1 className="display-3">Our Blog</h1>
	            <p className="lead">
	              This is our world of beautiful stories that we discover. 
	            </p>
	          </Container>
	        </Jumbotron>
			<div className='container'>
			<div className='row mt-5 mb-5 justify-content-center'>
				{preview}
			</div>
			</div>
		</>	
		)

}

export default Articles;