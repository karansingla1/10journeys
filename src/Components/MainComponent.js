import React, {Component} from 'react';
import MyNavbar from './MyNavbar.js';
import {destinations} from '../sharedData/destinationsdata';
import {Route, Switch, Redirect} from 'react-router-dom';
import DestinationPage from './DestinationPageComponent.js';
import Homepage from './HomepageComponent.js';


class Main extends Component {

	constructor(props){
		super(props);

		this.state = {
			cities: destinations,
		}
	}


	render() {

		return(
			<div> 
			<MyNavbar destinations={this.state.cities}/>
			<Switch>
				<Route path = '/home' component={Homepage}/>
				<Route exact path = '/destinations/:id' 
					component= {() => <DestinationPage destination = {this.state.cities} /> } />
				<Redirect to='/home' />	
			</Switch>
			</div>
		)

	}
}

export default Main;