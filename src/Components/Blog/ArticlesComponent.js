import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Jumbotron, Container } from 'reactstrap';
import { FacebookIcon,TwitterIcon,WhatsappIcon,} from 'react-share';
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton,
  } from 'react-share';


function ArticlePreview(props) {

	return (
			<div>
			<Card>
					        <CardImg top width="100%" src={props.post.featured_image} alt="Card image cap" className="img-fluid img-responsive blog-image" />
					        <CardBody>
					          <CardTitle><b>{props.post.title}</b></CardTitle>
					          <CardText className="articleExcerpt" dangerouslySetInnerHTML={{__html: props.post.excerpt}} />
					          
						         <div className='row'>
							          	<Link className="ml-2" to = {"/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-') }>
							          	<span className='btn btn-warning mr-3'>Read more!</span>
							          	</Link>
							          

							          <div className = 'col-auto'> 
							          <FacebookShareButton className="row" url = {"10journeys.com/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-')}>
							          <FacebookIcon size={42} round={true} />
						              </FacebookShareButton>
						              </div>

						              <div className = 'col-auto'> 
							          <TwitterShareButton className="row" url = {"10journeys.com/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-')}>
							          <TwitterIcon size={42} round={true} />
						              </TwitterShareButton>
						              </div>

						              <div className = 'col-auto'> 
							          <WhatsappShareButton className="row" url = {"10journeys.com/blog/" + props.post.ID + '/' + props.post.title.split(' ').join('-')}>
							          <WhatsappIcon size={42} round={true} />
						              </WhatsappShareButton>
						              </div>

						        </div>      	
					        </CardBody>
				      </Card></div>
	)
}

function Articles(props) {

	var exploration_posts = props.posts.filter(post => 'explorations' in (post.categories));
	exploration_posts = exploration_posts.slice(0,4);
	const explorations = exploration_posts.map(post => {
				return(
					<ArticlePreview key = {post.ID} post = {post} />				)
			}
		)

	var creativetourism_posts = props.posts.filter(post => 'creativetourism' in (post.categories));
	creativetourism_posts = creativetourism_posts.slice(0,4);
	const concept = creativetourism_posts.map(post => {
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
			<div className='blogs-container justify-content-center'>
			<h1 className="category-name"> Explorations </h1>
			<div className='card-columns'>
				{explorations}
			</div>
			<div className="see-all-posts"><Link to = "/blog/category/explorations" >See all posts >>> </Link></div> 
			<h1 className="category-name"> Creative tourism </h1>
			<div className='card-columns'>
				{concept}
			</div>
			<div className="see-all-posts"><Link to = "/blog/category/creativetourism" >See all posts >>> </Link></div>
			</div>
		</>	
		)

}

export default Articles;