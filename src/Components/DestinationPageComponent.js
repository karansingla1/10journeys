import React,{Component} from 'react';
import {Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {UncontrolledCarousel} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink,Col } from 'reactstrap';
import TripsShow from './TripsShowComponent.js'
import MyNavbar1 from './MyNavbar1.js';


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
			<div className="page-top">
				<div  className="destination-top">
				<UncontrolledCarousel items= {slides}/>
				</div>
				<div className='container'> 
					<div className = 'row mb-2 justify-content-center'> 
						<div className='col-auto mt-3 destination-name'><h2>{(city.name).toUpperCase()}</h2></div>
					</div>

					<div className="row">
						<div dangerouslySetInnerHTML={{__html: city.description}} className="col-12 description"/>
					</div>

					<div className=" row mb-4 wrap justify-content-center">
							<div className="col-12 col-md-6 date-select ">
								<div className='date-label-top col-12 text-center'>Book an experience!<br/></div>
								<label htmlFor="datevalue" className='date-label col-12 col-md-4 col-lg-3'>Select date: </label>
			          			<input className='date-input col-12 col-md-8 col-lg-5' id = "today" type="date" name="datevalue"
			          			value={this.state.datevalue} onChange={this.handleChange} min={(new Date).toISOString().substring(0,10)}/>
			          		</div>
			          		
			          </div>
					{tripsForCity.length===0 ? 
						(	
						<div className="no-trips mb-5"> There are no experiences available 
						currently after your selected date. Try another date. </div>
						):(
							<>
							<div className="no-trips mb-3"> Below are the experiences
							available after your selected date. </div>
							<TripsShow tripsForCity = {tripsForCity} city ={city}/>
							</>
						)
					}	
				</div>
			</div>
	     </>
	     
		)
	}
}

export default withRouter(connect(mapStateToProps)(DestinationPage));

