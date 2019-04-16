import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {UncontrolledCarousel} from 'reactstrap';



class TripDetails extends Component {
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

		const trip = this.props.trip;

		return(
			<>
			<div className="page-top"> <UncontrolledCarousel items= {trip.slides}/> </div>
			<div className = "container">
				<div className="row trip-info">
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-map-marker"/>Starts at {trip.start_location}</div>
					<div className="col-auto mb-2"><i className = "mr-2 fa fa-clock-o"/>{trip.duration}, {trip.start_time} onward</div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-list"/>{trip.inclusions}</div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-inr"/>{trip.cost}/person</div>

				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>The experience</div>
					<div className = 'col-12' dangerouslySetInnerHTML={{__html: trip.experience}}></div>
				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>What we'll do</div>
					<div className = 'col-12' dangerouslySetInnerHTML={{__html: trip.what_we_do}}></div>
				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>Where we'll go</div>
					<div className = 'col-12' dangerouslySetInnerHTML={{__html: trip.where_we_go}}></div>
				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>Who will you meet</div>
					<div className = 'col-12' dangerouslySetInnerHTML={{__html: trip.who_we_meet}}></div>
				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>Notes</div>
					<div className = 'col-12' dangerouslySetInnerHTML={{__html: trip.notes}}></div>
				</div>

				<div className="row empty-div"/>

			</div>

			<div className="fixed-bottom  book-button-container">
				<a href={trip.payment_code} rel="im-checkout"
					          data-behaviour="remote" data-style="flat" 
					          data-text="Book Now"></a>
				</div>
			          
			</>
		)

	}

}

export default TripDetails;