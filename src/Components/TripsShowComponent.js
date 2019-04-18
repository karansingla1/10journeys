import React,{Component} from 'react';
import {Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink,Col } from 'reactstrap';

function comp(a, b) {
    return new Date(a.tripDate).getTime() - new Date(b.tripDate).getTime();
}

function getDate(date) {
	var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
	return (month[date.getMonth()] + ' ' +date.getDate())
}

class TripsShow extends Component{
	constructor(props) {
		super(props);
	}

	componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://js.instamojo.com/v1/button.js";
        script.async = true;

        document.body.appendChild(script);
    }


	render() {

	const tripsForCity = this.props.tripsForCity;
	const city = this.props.city;


	var i = 0;
	var current_date = ' ';



	function tripbyDate(current_date) {

		const dateTrips = tripsForCity.filter((trip) => trip.tripDate.toString()===current_date.toString());
		const showDateTrips = dateTrips.map((trip1) => {
			return(
				
					<div key= {trip1.id} className='col-12 col-sm-8 col-md-8 col-lg-6 col-xl-5 mb-3'>
						<Card>
					        <CardImg top width="100%" src={trip1.featured_image} alt="Card image cap" />
					        <CardBody>
					          <CardTitle>{trip1.title}</CardTitle>
					          <CardSubtitle>{trip1.tripCaption}</CardSubtitle>
					          <CardText>{trip1.short_description}</CardText>
					          
					         <div className='row'>
					         <div className='col-auto '>
					          	<Link to = {'/destinations/'+city.name +'/' + trip1.id}>
					          	<div className='btn btn-warning'>Check Details</div>
					          	</Link>
					          </div>					          
					          </div>				          	
					        </CardBody>
				      </Card>
					</div>
					
				)	
		})
		return showDateTrips;			
			
	} 

	const tripsShow = tripsForCity.map((trip) => {



		if (current_date.toString() === trip.tripDate.toString()) {
			i=i+1;
			return (<div key="trip.id"></div>)
		}
		else {
			i=i+1;
			current_date = trip.tripDate;
			return(
					

					<div key = "trip.id" className='row mb-5'>
						<div className='col-12 col-sm-2 mb-3 tripDates'> {getDate(current_date)} </div>
						<div className='col-12 col-sm-10'>
							<div className ='row'>{tripbyDate(current_date)}</div>
						</div>
					</div>	
					
				)
		}				
	})	
	return(
		<>
			<div className='container'> 
				<div> {tripsShow}</div>
			</div>
     </>
     
	)
}
}
export default TripsShow;