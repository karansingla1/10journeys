import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'; 
  import {NavLink} from 'react-router-dom';


  const mapStatetoProps = state => {
	return {
		destinations: state.cities,
		trips: state.trips,
			}
}

class MyNavbar1 extends Component{
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
   		this.state = {
      isOpen: false
    };

	}

	toggle() {
    	this.setState({
     	 isOpen: !this.state.isOpen
    	});
  	}


	render(){

		const destinationItems = this.props.destinations.map((destination) => {
			if (destination.active===true) {
				return (
					
						<NavLink key = {destination.id}className='nav-link' to={'/' + destination.link}>
						<DropdownItem key={destination.id}>{destination.name}</DropdownItem>
						</NavLink>

				)
			}
		});

		return (
			<div>
				<Navbar className = " mynavbar fixed-top" color="light" light  expand="md">
		          <NavbarBrand href="/"><img src="/logo7.png" className="img-fluid img-responsive brand-image"/>
		          	<span className="brand-name"></span>
		          </NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              <NavItem>
		              	<NavLink className ='nav-link' to="/destinations/mcleodganj/">Mcleodganj</NavLink>
		              </NavItem>
		              
		              <NavItem>
		                <NavLink className ='nav-link' to="/blog/">Blog</NavLink>
		              </NavItem>
		              
		              <NavItem>
		                <NavLink className = 'nav-link' to="/aboutus/">About us</NavLink>
		              </NavItem>
		            </Nav>
		          </Collapse>
		        </Navbar>
			</div>
		);
	};
}
export default withRouter(connect(mapStatetoProps)(MyNavbar1));