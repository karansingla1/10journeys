import React, {Component} from 'react';
import MyNavbar from './MyNavbar.js';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import DestinationPage from './DestinationPageComponent.js';
import Homepage from './HomepageComponent.js';
import {connect} from 'react-redux';
import Footer from './FooterComponent.js';
import Blog from './Blog/BlogComponent.js';
import About from './AboutComponent.js'
import TripDetails from './TripDetailsComponent.js';
import MyNavbar1 from './MyNavbar1.js';
import About2 from './About2.js'



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
			else{ return ( <></>) }
					
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
			else{ return ( <>yuy </>) }				
		}

		return(
			<> 

			<MyNavbar1 destinations={this.props.cities}/>
			<Switch>
				<Route path = '/home' component={Homepage}/>
				<Route exact path = '/destinations/:name' 
						component={DestinationWithName}  />	
				<Route path = '/blog' component = {Blog} />
				<Route path = '/aboutus' component={About2}/>
				<Route exact path = '/destinations/:name/:tripID'
						component={TripWithID} />
							
				<Redirect to='/home' />	
			</Switch>
			<Footer />
			</>
		)

	}
}

export default withRouter(connect(mapStatetoProps)(Main));