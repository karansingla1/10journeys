import React, {Component} from 'react';
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
				<Navbar color="light" light expand="md">
		          <NavbarBrand className = 'brand-name' href="/"><img src="/logo2.jpg" className="img-fluid img-responsive brand-image"/></NavbarBrand>
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

export default MyNavbar1;