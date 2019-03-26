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

class MyNavbar extends Component{
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
					
						<NavLink class='nav-link' to={'/' + destination.link}>
						<DropdownItem key={destination.id}>{destination.name}</DropdownItem>
						</NavLink>

				)
			}
		});

		return (
			<div>
				<Navbar color="light" light expand="md">
		          <NavbarBrand href="/">Born Explorers</NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              <NavItem>
		                <NavLink className ='nav-link' to="/components/">Journeys</NavLink>
		              </NavItem>
		              <UncontrolledDropdown nav inNavbar>
		                <DropdownToggle nav caret>
		                  Destinations
		                </DropdownToggle>
		                <DropdownMenu right>
		                  {destinationItems}
		                </DropdownMenu>
		              </UncontrolledDropdown>
		              <NavItem>
		                <NavLink className = 'nav-link' to="/components/">About us</NavLink>
		              </NavItem>
		            </Nav>
		          </Collapse>
		        </Navbar>
			</div>
		);
	};
}

export default MyNavbar;