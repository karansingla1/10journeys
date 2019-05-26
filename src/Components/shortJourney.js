import React, {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import { CardImg, CardSubtitle, TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';
import FAQs from './FAQs.js';
import DayWise from './DayWise.js'
import { ReactTypeformEmbed } from 'react-typeform-embed';



class shortJourney extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		    this.openForm = this.openForm.bind(this);


    	this.state = {
      	activeTab: '1',
    };
	};


	toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }


	componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://js.instamojo.com/v1/button.js";
        script.async = true;

        document.body.appendChild(script);
    }

 
	render(){

		return(
			<>

			<Helmet>
				<title></title>
			</Helmet>
			<div className="page-top"> </div>
			<div className="col-12 poster-container">

			<div class="poster-container">

			

            <img className = "journey-image1 col-12" src="/imgs/homepage/journey-poster.jpg"/>
			 <div className = "form-container"> 
            <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://romitsingla.typeform.com/to/kBNXI3"
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />

			  <div className="bottom-left1 d-none d-md-block">
			  	<button className="btn btn-primary booking-button" onClick={this.openForm}> I AM INTERESTED </button>
			  </div>

			  <div className="bottom-left d-md-none">
			  	<button className=" btn btn-primary booking-button" onClick={this.openForm}> I AM INTERESTED </button>
			  </div>
			  </div>

			</div>

            </div>

            

			<div className = "container">
			<div className="row">
			
			<div className="col-12 col-md-12">

				<div className="row trip-info1 summary">
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-calendar-o"/> 12th June - 16th June; (4nights, 5 days) </div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-map-marker"/>Reach <a href="https://goo.gl/maps/FX1PVTYBzhuV12C1A"> Dharamshala </a> by 9am  </div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-list"/>All meals, stays, activities, transport (Dharamshala - Dharamshala)</div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-group"/>Small group of 10-12 people for a meaningful experience.</div>					
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-inr"/>18000</div>

				</div>


				<div>
			        <Nav tabs>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '1' })}
			              onClick={() => { this.toggle('1'); }}
			            >
			              <div className="tab-heading">The experience</div>
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '2' })}
			              onClick={() => { this.toggle('2'); }}
			            >
			              <div className="tab-heading">The Itinerary</div>
			            </NavLink>
			          </NavItem>
			        </Nav>
			        <TabContent activeTab={this.state.activeTab}>
			          <TabPane tabId="1">
			            <Row>
			              <Col sm="12">
			                <div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>The experience</div>
						<div className = 'col-12 activity-description'>This is a journey of creativity, learning new skills, connecting and building meaningful relationships, and being close to the nature.
						<br/>
						We engage in creative activities, meet new people, explore the local culture and go for some nature walks.
						<br/>
						You will have enough free time to explore around or just peacefully relax at a local cafe or at a picturesque spot in the mountains.
						</div>
				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'> What will you do?</div>
						<div className ="container activities-container">


							<div className="row">
								<div className ="col-12 activity-title">Get hands-on with the Potter's Wheel</div>
								<div className="col-12 activity-description">Turn a lump of clay into shapes and sizes of your imagination at India's oldest pottery studio, in a beautiful setting in the mountains.</div>
								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-lg-4">
											<div className="row">
												<img className="col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/pottery1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Get help from experienced potters as you experiment.  
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/pottery2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Andretta has been the meeting point of artists, potters and creatives.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/pottery3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Come up with different designs in a fun filled environment.
												</div>
											</div>
										</div>
									</div>
								</div>		
							</div>



							<div className="row">
								<div className ="col-12 activity-title">Local Cooking Experiences</div>
								<div className="col-12 activity-description">Engage in the art of Tibetan cooking as well as the traditional Indian cooking.</div>
								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/food1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Design your own momos and soups, the way you like it.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/food2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Try out different shapes and fillings.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/food3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Feel the raw taste of the food cooked on a Chulha.	
												</div>
											</div>
										</div>

										
									</div>
								</div>		
							</div>





							<div className="row">
								<div className ="col-12 activity-title">Immerse yourself in a Tibetan Art Form of your choice.</div>
								<div className="col-12 activity-description">With an experienced master, choose to engage in any of the detailed workshop at the beautiful Norbulingka institute. </div>
								<div className="col-12 activity-sub-description"> </div>

								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/woodwork1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												Feel the tools in your hands.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/woodwork2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													The beauty of carving a piece of wood.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/thangka1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													The intricacies of Thangka Painting.													
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/thangka2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												Colors may be your inspiration.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/woodpaint1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												Take home your completed piece of art.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/woodpaint2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													The joy of wood painting.
												</div>
											</div>
										</div>

									</div>
								</div>		
							</div>


							<div className="row">
								<div className ="col-12 activity-title">Nature Walks that make you fitter and healthier</div>
								<div className="col-12 activity-description"> Get close to nature as we take numerous walks and short hikes in the mountains, through a forest and spend time watching beautiful birds.
										<br/> You can also engage in morning Yoga and meditation sessions.
								</div>
								<div className="col-12 activity-sub-description"> </div>

								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/walk1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/village4.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/walk3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/yoga1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>	
									

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/walk5.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/village1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

									</div>
								</div>		
							</div>


							<div className="row">
								<div className ="col-12 activity-title">Learn about the local culture.</div>
								<div className="col-12 activity-description">
									Spend some time exploring the local markets, the Dalai Lama temple, the Tibet Museum and other local points of interest.
									 You can also spend a couple of hours to experience the folk traditions with music, dance and stories at the Tibet World.
								</div>
								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/cultural1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/cultural2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/shortjourney/cultural3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>
										
									</div>
								</div>		
							</div>



						</div>
				</div>	

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>Where will you go?</div>
					<div className = 'col-12 activity-description'>
					The entire journey takes place in the lap of the beautiful Dhauladhar ranges. Through the 5 days, 
					you will be in Andretta (around Palampur), McLeodganj, Dharamkot and Kareri. <br/><br/> Your mornings
					will be spent in taking nature walks, and having fresh and healthy breakfast. During the day, 
					you will engage in different creative activites, visiting local cutural places. The evenings will
					be usually spent around a bonfire, or a cozy cafe, interacting with the group or the locals, and looking back at the
					day's experience.


					<br/><br/>Check out the day-wise Itinerary 

					<span
			              className={classnames({ active: this.state.activeTab === '2' })}
			              onClick={() => { this.toggle('2'); }}
			            ><a href="#"> here.</a></span></div>
					 
				</div>


				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>Inclusions</div>
					<div className = 'col-12 activity-description'> Once you reach Dharamshala, all meals, stays, 
					activities and transport costs are included. You will need to reach Dharamshala
					on own. The journey will end at Dharamshala too. We will be happy to help you with arrangements
					and suggest you the best way to reach here from your current location.
					 </div>

				</div>


				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>FAQs</div>
					<FAQs/>

				</div>
			

			              </Col>
			            </Row>
			          </TabPane>
			          <TabPane tabId="2">
			          	<Row>
			              <Col sm="12">
			              <DayWise/>
			            </Col>
			            </Row>
			          </TabPane>
		          </TabContent>
          </div>


				

			</div>
			</div>
			</div>

			<div className="row trip-info justify-content-center">
			<button className="col-auto btn   booking-button1" onClick={this.openForm}> I AM INTERESTED </button>
			</div>

			<div className="row empty-div"/>

			<div className= "book-button-container d-none d-md-block">
				<button className = "im-checkout-btn im-checkout" onClick={this.openForm}>I AM <br/>INTERESTED</button>
			</div>

			
			          
			</>
		)

	}

}

export default shortJourney;