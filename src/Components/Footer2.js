import React from 'react';
import {Link} from 'react-router-dom';


function Footer2(props){

	return(
		<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-11 offset-1 col-sm-3">
                    <h5>Links</h5>

                    <ul className="row list-unstyled">
                        <li className='col-6'><Link to="/home">Home</Link></li>
                        <li className='col-6'><Link to="/aboutus">About</Link></li>
                        <li className='col-6'><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="col-11 offset-xs-1 col-sm-3">
                    <h5>Our Address</h5>
                    <address>
		              #1645, Sector 34-D, Chandigarh<br/>
		              <i className="fa fa-phone fa-lg"></i>: +91 9971526127<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:connect@10Journeys.com">
                         connect@10journeys.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-5 align-self-center">
                    <div className="text-center">
                        <a className="social-buttons btn btn-social-icon btn-facebook" href="https://www.facebook.com/tenjourneys/"><i className="fa fa-facebook"></i></a>
                        <a className="social-buttons btn btn-social-icon btn-instagram" href="https://www.instagram.com/10_journeys/"><i className="fa fa-instagram"></i></a>
                        <a className="social-buttons btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/10journeys"><i className="fa fa-linkedin"></i></a>
                        <a className="social-buttons btn btn-social-icon btn-twitter" href="https://twitter.com/10_journeys"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2019 10Journeys</p>
                </div>
            </div>
        </div>
    </div>

	)

}

export default Footer2;