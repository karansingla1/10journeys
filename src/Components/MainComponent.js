import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import DestinationPage from './DestinationPageComponent.js';
import Homepage from './HomepageComponent.js';
import {connect} from 'react-redux';
import Footer2 from './Footer2.js';
import Blog from './Blog/BlogComponent.js';
import TripDetails from './TripDetailsComponent.js';
import MyNavbar2 from './MyNavbar2.js';
import About3 from './About3.js';
import shortJourney from './Journeys/shortjourney/shortJourney.js';
import journeys from './journeys.js';
import summerjams_mcleodganj from './Journeys/summerjams_mcleodganj/experience.js';





const mapStatetoProps = state => {
	return {
		cities: state.cities,
		trips: state.trips,
			}
}


class Main extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://js.instamojo.com/v1/button.js";
        script.async = true;

        document.body.appendChild(script);
    }
	

	render() {

		const DestinationWithName = ({match}) => {			
			const city = this.props.cities.filter((city) => 
				city.name === match.params.name)[0];
			if (city) {
				return (
				<>
				<DestinationPage destination = {city} />
				</>
			)
		}
			else{ return ( <><Homepage/></>) }
					
		}
		const TripWithID = ({match}) => {

			const trip = this.props.trips.filter((trip) => 
				trip.id === parseInt(match.params.tripID))[0]

			if (trip){
				return (
					<>
					<TripDetails trip = {trip} />
					</>
				)	
			}	
			else{ return ( <><DestinationWithName match={match}/>
				</>) }				
		}

		return(
			<> 
			<MyNavbar2/>
			<Switch>
				<Route path = '/home' component={Homepage}/>
				<Route exact path = '/destinations/:name' component={DestinationWithName}  />	
				<Route path = '/blog' component = {Blog} />
				<Route path = '/aboutus' component={About3}/>
				<Route exact path = '/destinations/:name/:tripID' component={TripWithID} />	
				<Route exact path = '/creativejourney' component={shortJourney} />	
				<Route exact path = '/journeys' component={journeys} />	
				<Route path = '/journeys' component={journeys} />	
				<Route exact path = '/creativeadventures-mcleodganj' component={summerjams_mcleodganj} />				
				<Redirect to='/home' />	
			</Switch>
			<Footer2/>
			</>
		)

	}
}

export default withRouter(connect(mapStatetoProps)(Main));