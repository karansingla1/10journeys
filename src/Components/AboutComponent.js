import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';


class About extends Component {


	render() {
		return (
			<>
			<div>
		      <Jumbotron fluid>
		        <Container className = "container" fluid>
		          <h1 className="display-3">Our Story</h1>
		          <p className="lead"></p>
		        </Container>
		      </Jumbotron>
		    </div>

			<div className="mt-5 mb-4 container">
				<div className="row">
					<div className="row">
						<p><i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
						<h3>“Blessed are the curious for they shall have adventures.”</h3></p>
					</div>
				</div>
				<div className="row">
				<div className = "col-12 col-sm-7">
					<div className="row vision-content-box">
						<div className="col-4">
							<img className="img-responsive img-fluid" 
							src="https://cdn1.iconfinder.com/data/icons/ordinary-people/512/adventurer-512.png"/>
						</div>
						<div className='col-12 col-sm-8'>
							<p><b>We believe that we are all born explorers.</b> We are curious to learn, 
							we are curious to understand the world around us, we are curious to 
							understand the people and we are immersed in the little things we do. 
							We play and explore, and as a result, we learn, we create. Everything 
							is new.</p>
							<p>Yet, sometimes we cease to see the beauty and the newness in the world.</p>

							<p>Travel is a great way to experience how things can be done in so
							many different ways, how life can be lived in so many different ways.
							It gives us a chance to be explorers, creators, and learners once again.</p> 
						 </div>
					</div>
					<div className="row vision-content-box">
						<div className="col-12 col-sm-4">
							<img className="img-responsive img-fluid" 
							src="http://m3mheights-65avenue.com/wp-content/uploads/2018/02/Our-Vision-Icon-1.png"/>
						</div>
						<div className='col-12 col-sm-8'>
						<p><b>10Journeys was started with a vision to </b> make travel and tourism a 
						means to have great immersive experiences, build meaningful relationships 
						and making the world a better place. We are introducing the idea of 
						creative travel and tourism, where we move away from consumerist
						 tourism to a very different way of travelling. We aim to provide 
						 you a way to deeply engage in the local stories and culture, 
						 while exploring different themes.</p>
						 </div>	

						<div className='col-12 col-sm-8'>
						<p>We believe that travel can make the world a better place. </p>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-5">		

						<div className="row">
                                <div className=" col-2 ">
                                    <span className="fa fa-chevron-circle-right fa-3x"></span>
                                </div>
                                <div className="col-10">
                                    <h4>Immersive experiences</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                        </div>

                        <div className="row">
                                <div className="col-2">
                                    <span className="fa fa-chevron-circle-right fa-3x"></span>
                                </div>
                                <div className="col-10">
                                    <h4>People</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                        </div>
                </div>        
				</div>
			</div>
			</>
		)
	}
}

export default About;