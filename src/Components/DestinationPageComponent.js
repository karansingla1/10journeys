import React,{Component} from 'react';
import {Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {UncontrolledCarousel} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink,Col } from 'reactstrap';
import TripsShow from './TripsShowComponent.js'

const mapStateToProps = state => {
  return {
    trips: state.trips,
  }
}

function comp(a, b) {
    return new Date(a.tripDate).getTime() - new Date(b.tripDate).getTime();
}

function dateSelected() { 
		console.log('Hello');
  		var x = document.getElementById("mySelect").value;
  		document.getElementById("demo").innerHTML = "You selected: " + x;
	}

class DestinationPage extends Component{
	constructor(props) {
		super(props);

		    this.state = {
		    	datevalue: (new Date).toISOString().substring(0,10),
		    };	

		    this.handleChange = this.handleChange.bind(this);
			    
	}


	handleChange(event) {
    this.setState({datevalue: event.target.value});
    console.log(this.state.datevalue);
  }

	render() {


		const city = this.props.destination;
		const slides = city.slides;
		var tripsForCity = this.props.trips.filter((trip)=>trip.destinationID === city.id).sort(comp);
		const totalTrips = tripsForCity.length;
		const today_date = new Date();
		tripsForCity = tripsForCity.filter((trip) => trip.tripDate >= today_date || (
			trip.tripDate.getDate()===today_date.getDate()));

			tripsForCity = tripsForCity.filter((trip) =>
			(trip.tripDate.toISOString().substring(0,10) >= this.state.datevalue) ||
			(trip.tripDate.toISOString().substring(0,10) === 
			this.state.datevalue.substring(0,8)+ (parseInt(this.state.datevalue.substring(8,10))-1).toString() ) )
		

		tripsForCity = tripsForCity.filter((trip)=> trip.active===true);

		return(
			<>
			<div>
				<UncontrolledCarousel items= {slides}/>
				<div className='container'> 
					<div className = 'row mb-5 justify-content-center'> 
						<div className='col-auto mt-3'><h2>{(city.name).toUpperCase()}</h2></div>
					</div>
					<div className="row mb-5 ml-3 justify-content-center">
						<label for="datevalue" className='cominglabel col-auto offset-sm-1'>I am coming on</label>
	          			<input className='ml-3 ml-sm-0 col-auto' id = "today" type="date" name="datevalue"
	          			value={this.state.datevalue} onChange={this.handleChange} min={(new Date).toISOString().substring(0,10)}/>
	          		</div>	
					<TripsShow tripsForCity = {tripsForCity} city ={city}/>
					
				</div>
			</div>
	     </>
	     
		)
	}
}

export default withRouter(connect(mapStateToProps)(DestinationPage));

