import React, {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import { CardFooter, CardLink, CardImg, CardSubtitle, TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';
import { Badge,Jumbotron, Container } from 'reactstrap';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



const mapStatetoProps = state => {
	return {
		trips: state.trips,
			}
}


class journeys2 extends Component {
	constructor(props) {
		super(props);

		const search = props.location.search; // could be '?foo=bar'
		const params = new URLSearchParams(search);
		var place1 = params.get('place'); // bar
		place1 = place1.split(" ");
		console.log(typeof place1);
		this.state = {
     	 place: place1,
  		};
	};



	componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://js.instamojo.com/v1/button.js";
        script.async = true;

        document.body.appendChild(script);
        console.log(this.props);
    }

   placesChanged = (newplaces) => {
    this.setState({		
      place: newplaces,
    });

  }
 
	render(){

		var tripstodisplay = this.props.trips.
			filter((trip)=>this.state.place.some(x => trip.places.some(y => y === x)));	
		console.log(tripstodisplay);

		const displayTrips = tripstodisplay.map((trip) => {
			return(
				<>
					<div className="col-12 col-md-5 col-lg-4">
				      <Card className="journey-card">
				      <CardLink href={trip.link}>
				        <CardImg top width="100%" src={trip.featured_image} alt="Card image cap" />
				        <CardBody className="journey-card-text">
				          <CardText>{trip.description}</CardText>
				          <CardLink href={trip.link}><Button className="btn btn-primary check-itinerary-button">Check itinerary</Button></CardLink>
				          <Badge href={trip.link + "/#bookingOptions"} pill color="success" className="ml-2 mt-1">Book <br/>Now.</Badge>
				          <Badge pill color="info" className="ml-2 mt-1"> <i className = "fa fa-inr"/> {trip.price} <br/>per person</Badge>
				          <CardFooter className=" mt-3">{trip.booking_status}</CardFooter>	
				        </CardBody>
				      </CardLink>
				      </Card>
				    </div>
				</>
				)



		})
		return(
			<>

			<Helmet>
				<title>Journeys</title>
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

	        <div className="container">

			Locations
			<CheckboxGroup className="mb-3"
		        checkboxDepth={2} // This is needed to optimize the checkbox group
		        name="fruits"
		        value={this.state.place}
		        onChange={this.placesChanged}>
		        <label><Checkbox value="tirthan"/> Tirthan</label>
		        <label><Checkbox value="mcleodganj"/> McLeodganj </label>
		      </CheckboxGroup>
		      <div className="row">{displayTrips}</div>
		     </div> 
			</>
		)

	}

}

export default withRouter(connect(mapStatetoProps)(journeys2));