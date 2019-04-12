import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class TripDetails extends Component {
	constructor(props) {
		super(props);
	};


	render(){

		const trip = this.props.trip;

		return(
			<>
			<div> Trip Id = {trip.id} </div>
			<p className="articleExcerpt" dangerouslySetInnerHTML={{__html: trip.description}} />
			</>
		)

	}

}

export default TripDetails;