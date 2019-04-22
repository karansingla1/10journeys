import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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
				<Navbar className = "mynavbar fixed-top" dark expand="md">
		          <NavbarBrand href="/"><img src="/logo5.png" className="img-fluid img-responsive brand-image"/>
		          <span className="nav-brand-name">10Journeys</span>
		          </NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              <NavItem>
		              	<NavLink className ='nav-link' to="/destinations/mcleodganj/" onClick={this.toggle}>Mcleodganj</NavLink>
		              </NavItem>
		              
		              <NavItem>
		                <NavLink className ='nav-link' to="/blog/" onClick={this.toggle}>Blog</NavLink>
		              </NavItem>
		              
		              <NavItem>
		                <NavLink className = 'nav-link' to="/aboutus/" onClick={this.toggle}>About us</NavLink>
		              </NavItem>
		            </Nav>
		          </Collapse>
		        </Navbar>
			</div>
		);
	};
}
export default withRouter(connect(mapStatetoProps)(MyNavbar1));