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

function CategoryName(props) {
		if (props.category === "creativetourism"){
			return (<>Creative Tourism</>);	
		}

		if (props.category === "explorations"){
			return (<>Explorations</>);	
		}
		
	}

function Category(props) {

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
			<div className='blogs-container justify-content-center'>
			<h1 className="text-center mb-4"> <CategoryName category = {props.category} /> </h1>
			<div className='card-columns'>
				{preview}
			</div>
			</div>
		</>	
		)

}

export default Category;