import React, {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import { CardImg, CardSubtitle, TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';
import FAQs from './FAQs.js';
import DayWise from './DayWise.js'
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const items = [
  {
    src: '/imgs/summerjams_mcleodganj/ca.png',
    altText: '',caption: '',header: ''
  },
];

const tripglimpses = [
  {src: '/imgs/summerjams_mcleodganj/glimpses/1.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/2.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/3.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/4.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/5.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/6.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/7.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/8.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/9.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/10.jpg',altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/glimpses/11.jpg',altText: '',caption: '',header: ''},
  
];

const tripreviews = [
  {src: '/imgs/summerjams_mcleodganj/reviews/1.jpg', altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/reviews/2.jpg', altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/reviews/3.jpg', altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/reviews/4.jpg', altText: '',caption: '',header: ''},
  {src: '/imgs/summerjams_mcleodganj/reviews/5.jpg', altText: '',caption: '',header: ''},  
];

class shortJourney extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.openForm = this.openForm.bind(this);
		 this.toggle2 = this.toggle2.bind(this);



    	this.state = {
      	activeTab: '1',
      	modal: false,
    };
	};


	toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggle2() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
				<title>Summer Jams in McLeodGanj - Join a trip in Himachal</title>
				<meta property="og:image" content="/imgs/summerjams_mcleodganj/ca.png" />
			</Helmet>
			<div className="page-top"> </div>
			<div className="col-12 poster-container">

			<div class="poster-container">

			
			<UncontrolledCarousel items={items} />
			 <div className = "form-container"> 
            <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://10journeys.typeform.com/to/Gpbtm1"
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />

			  <div className="bottom-left1 d-none d-md-block">
			  	<a href="#bookingOptions"><button className="col-12 btn btn-primary booking-button"> BOOK NOW </button></a>
			  	<div className="last-date-text"> Bookings open! </div>
			  </div>

			  <div className="bottom-left d-md-none">
			  	<a href="#bookingOptions"><button className=" btn btn-primary booking-button"> BOOK NOW </button></a>
			  	<div className="last-date-text-mobile"> Bookings open! </div>
			  </div>
			  </div>

			</div>

            </div>

            

			<div className = "container">
			<div className="row">
			
			<div className="col-12 col-md-12">

				<div className="row trip-info1 summary">
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-calendar-o"/> 23rd - 25th August; 30th Aug - 1st Sept (2nights, 3 days) </div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-map-marker"/>Reach <a href="https://goo.gl/maps/EfRwywxLa2q6KwLK9"> McLeodganj </a> by 9am  </div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-list"/>Meals (Breakfast and Lunch), stays, creative activities, transport (McLeodganj - McLeodganj)</div>
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-group"/>Small group of 8-10 people for a meaningful experience. (Ages 18-35)</div>					
					<div className="col-12 mb-2"><i className = "mr-2 fa fa-inr"/>5999/person </div>
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
						<div className = 'col-12 activity-description'>
						A 3 day experience in a hamlet above McLeodGanj named Dharamkot full of fun activities and getting lost in the nature.
						
							You will have all the fun in the world making pots in a studio, running a cafe with a local, singing your hearts out, watching beautiful sunsets, doing yoga and chilling at a waterfall.
						 	You will be with a group of around 10 young people, exploring and making memories together.
						 
						</div>	
				</div>

				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'> What will you do?</div>
						<div className ="container activities-container">


							<div className="row">
								<div className ="col-12 activity-title">Make and fire your own pots.</div>
								<div className="col-12 activity-description">Turn a lump of clay into shapes and sizes of your imagination at a beautiful studio in Dharamkot. Chill, have fun and admire the mighty Dhauladhar range with a small community of artists. </div>
								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className="col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/pottery1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Dharamkot studio with the amazing view of the Dhauladhar range.  
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/pottery2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Come up with different designs in a fun filled environment.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/pottery3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Be inspired in a space with good vibes.
												</div>
											</div>
										</div>

									</div>
								</div>		
							</div>

							
							<div className="row">
								<div className ="col-12 activity-title">A beautiful waterfall, sunset and Yoga</div>
								<div className="col-12 activity-description"> You are bound to feel much more fresh, energetic and one with the nature as you watch the sun disappear, jump into the cool waters of a waterfall, and do yoga with a view of the beautiful mountains.  To add to the fun, all this is along with an amazing bunch of new friends you make along the journey.
								</div>
								<div className="col-12 activity-sub-description"> </div>

								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/glimpses/6.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Enroute the walk to the waterfall.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/nature2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Watch the sun slowly disappear.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/nature3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Yoga session with an amazing view.
												</div>
											</div>
										</div>

									</div>
								</div>		
							</div>


							<div className="row">
								<div className ="col-12 activity-title">Immerse into the local culture</div>
								<div className="col-12 activity-description">
									McLeodganj has a a lot of Tibetan influence. Immerse yourself into it by understanding the culture through stories, visiting the Dalai Lama temple, a museum and engaging in folk show with the locals. During your free exploration on last day, we suggest you also try Tibetan cooking by making your own momos and soups at Lhmo's kitchen.  </div>
								<div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/local1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Visit the Dalai Lama Temple.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/local2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Learn Tibetan cooking.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/local3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Immerse into the folk traditions of Tibet.
												</div>
											</div>
										</div>
										
									</div>
								</div>		
							</div>


							<div className="row">
								<div className ="col-12 activity-title">Run a cafe with a local</div>
								<div className="col-12 activity-description">
									Have you ever wondered or wanted to start your own cafe in the mountains? Well, you can get a taste of what it is, by spending time in local cafe and helping in the day to day operations, 
									cooking your favourite dish or styling the cafe.
								</div>
								

								<div className ="col-12">
									<div className="row">
										
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/cafe1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Help the owner of a local cafe.
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/cafe2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Can you cook a dish?
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/cafe3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
													Maybe, help to style the cafe.
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
					We spend the first 2 days in a peaceful yet lively hamlet Dharamkot situated above McLeodganj. Dharamkot is a place for nature lovers, creatives and has lately been known for it's chill culture and amazing cafes. Keeping Dharamkot as the base, you engage the different activites described above, enjoy with the group and in the local cafes,   The 3rd day is more of a free exploration of the amazing local culture in McLeodGanj.  
					<br/><br/>Check out the day-wise Itinerary 

					<span
			              className={classnames({ active: this.state.activeTab === '2' })}
			              onClick={() => { this.toggle('2'); }}
			            ><a href="#"> here.</a></span></div>

			        <div className ="col-12">
									<div className="row">
										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/location1.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/location2.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

										<div className="col-12 col-sm-6 col-md-4">
											<div className="row">
												<img className=" col-12 activity-image img-fluid img-resonsive" src="/imgs/summerjams_mcleodganj/location3.jpg"/>
											</div>

											<div className="row">
												<div className = "col-12 activity-image-description">
												</div>
											</div>
										</div>

									</div>
								</div>    
					 
				</div>


				<div className="row trip-info">
					<div className = 'col-12 trip-info-titles'>Inclusions</div>
					<div className = 'col-12 activity-description'> Once you reach McLeodGanj, meals (breakfast and lunch on all days), stays, 
					activities and transport costs are included. You will need to reach McLeodGanj
					on your own. The journey will also end at McLeodGanj. We will be happy to help you with arrangements
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

			<div className="row trip-info justify-content-center">
			<div className="col-12 col-md-6">
			<div className = 'col-12 trip-info-titles text-center title-trip-photos'>Glimpses from previous groups</div>
			<UncontrolledCarousel items={tripglimpses}/>
			</div>

			<div className="col-12 col-md-6 mt-5 mt-md-0">
			<div className = 'col-12 trip-info-titles text-center title-trip-photos'>What people felt about the experience?</div>
			<UncontrolledCarousel items={tripreviews}/>
			<div className = "col-12">
			</div>
			</div>
			</div>

			<div className="empty-div2" id="bookingOptions"/>

			<div className="row trip-info justify-content-center" id="bookingOptions">
			<div className = 'col-auto trip-info-titles'>Book Now</div>
			<div className="col-12 text-center">Group size may vary from 2-10</div>

			<div className="col-12 mt-3" >
		      <div className="row justify-content-center">
				<div className="col-6 col-md-3 col-lg-3 align-self-center trip-dates">
		      	 	<div className ="row">
		      	 		<div className="col-12">23rd - 25th August</div>
		   				<div className="col-12 col-md-3"><Badge pill color="success" className="">Bookings open</Badge></div>
		      		</div>
		      	</div>			      	
		      	<div className = "col-7 col-sm-auto col-md-3 col-lg-2"><a href="https://www.instamojo.com/10journeys/summer-jams-mcleodganj-23rd-august/" rel="im-checkout" data-behaviour="remote" data-style="flat" data-text="Book Now"></a>
				</div>
		      </div>

		      <br/>

		      <div className="row justify-content-center">
		      	<div className="col-6 col-md-4 col-lg-3 align-self-center trip-dates">
		      	 <div className ="row">
		      	 	<div className="col-12">30th Aug - 1st Sept</div>
		   			<div className="col-12"><Badge pill color="success" className="">Bookings open</Badge></div>
		      	</div>
		      	</div>
		      	<div className = "col-7 col-md-3 col-lg-2"><a href="https://www.instamojo.com/10journeys/summer-jams-mcleodganj-30th-august/" rel="im-checkout" data-behaviour="remote" data-style="flat" data-text="Book Now"></a>
				</div>
		      </div>

		    </div>

			<div className="container">
			<div className="col-12 mb-3 mt-3">
		   	Still not sure?<br/> Feel free to call/Whatsapp (+91 9971526127 or +91 9463766651) for any queries.
		   	</div>
		   	</div>

			</div>
			</div>

			<div className="row empty-div"/>

			<div className= "book-button-container">
			<a href="#bookingOptions"><button className="btn btn-primary booking-button2"> BOOK <br/>NOW </button></a>
			</div>
			

			          
			</>
		)

	}

}

export default shortJourney;