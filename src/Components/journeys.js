import React, {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import { CardFooter, CardLink, CardImg, CardSubtitle, TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Badge,Jumbotron, Container } from 'reactstrap';


class journeys extends Component {
	constructor(props) {
		super(props);
		};

	componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://js.instamojo.com/v1/button.js";
        script.async = true;

        document.body.appendChild(script);
    }
 
	render(){

		return(
			<>

			<Helmet>
				<title></title>
			</Helmet>
			<div className="page-top"> </div>

			<Jumbotron fluid>
	          <Container className ="container" fluid>
	            <h1 className="display-3">Upcoming Journeys</h1>
	            <p className="lead">
	              Be Curious. Be Creative. Make new friends.  
	            </p>
	          </Container>
	        </Jumbotron>
			
			<div className = "container">
				<div className="row">
					<div className = "col-12 month-name mt-4">
						June
					</div>
					<div className="col-12 col-md-4 journey-card">
				      <Card>
				        <CardImg top width="100%" src="/imgs/homepage/journey-poster.jpg" alt="Card image cap" />
				        <CardBody>
				          <CardText>A journey of creativity, learning new skills, connecting and building meaningful relationships, and being close to the nature.</CardText>
				          <CardLink href="/creativejourney"><Button className="btn btn-primary check-itinerary-button">Check itinerary</Button></CardLink>
				          <Badge pill color="danger" className="ml-2">Bookings <br/>closed.</Badge>
				          <CardFooter className=" mt-3">Contact us to book for your group.</CardFooter>	
				        </CardBody>
				      </Card>
				    </div>

				    <div className="col-12 col-md-4">
				      <Card>
				        <CardImg top width="100%" src="/imgs/summerjams_mcleodganj/summer_jams.jpg" alt="Card image cap" />
				        <CardBody>
				          <CardText>A 3-day experience in a village hamlet above McLeodGanj named Dharamkot. You will have all the fun in the world making pots in a studio, running a cafe with a local, singing your hearts out, doing yoga and bathing at a waterfall. </CardText>
				          <CardLink href="/summerjams-mcleodganj"><Button className="btn btn-primary check-itinerary-button">Check itinerary</Button></CardLink>
				          <Badge href="/summerjams-mcleodganj/#bookingOptions" pill color="success" className="ml-2">Book <br/>Now.</Badge>
				          <Badge pill color="info" className="ml-2"> <i className = "fa fa-inr"/> 5999 <br/>per person</Badge>
				          <CardFooter className=" mt-3">Bookings open.</CardFooter>	
				        </CardBody>
				      </Card>
				    </div>


				</div>
			</div>
			          
			</>
		)

	}

}

export default journeys;