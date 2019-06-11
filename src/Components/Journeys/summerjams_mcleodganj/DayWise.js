import React, {Component} from 'react';
import { CardImg, CardSubtitle, TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

const items1 = [
  {
    src: '/imgs/summerjams_mcleodganj/location1.jpg',
    altText: '',caption: '',header: ''
  },

  {
    src: '/imgs/summerjams_mcleodganj/location2.jpg',
    altText: '',caption: '',header: ''
  },


  {
    src: '/imgs/summerjams_mcleodganj/pottery1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/pottery2.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/cafe4.jpg',
    altText: '',caption: '',header: ''
  },
];

const items2 = [
  {
    src: '/imgs/summerjams_mcleodganj/nature3.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/cafe1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/cafe2.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/nature2.jpg',
    altText: '',caption: '',header: ''
  },
];

const items3 = [
  {
    src: '/imgs/summerjams_mcleodganj/location3.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/local1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/local2.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/summerjams_mcleodganj/day3.jpg',
    altText: '',caption: '',header: ''
  },
];


class DayWise extends Component {
	constructor(props) {
		super(props);

	};


    render() {
        return(
            <>
                <div className="row trip-info">
                            <div className = 'trip-info-titles'>Day-wise Itinerary</div>

                            <div className = 'activity-description'>
                                <div className="row day-row">
                                    <div className="col-12 col-md-8">
                                        <b> Day 1 </b> <br/>
                                        <i>Give yourself a creative break, meet new people, pottery</i><br/><br/>
                                          <p>Arrive at McLeodganj, meet your fellow travelers and friends for the next 3 days, as you 
                                          enjoy refreshing local drinks and breakfast. We move to the beautiful village of Dharamkot and check in at the guesthouse with an amazing view. Spend some time to relax or
                                          walk around to get a feel of the place. </p>
                                          <p> The afternoon and evening is spent in a pottery studio with views of the Dhauladhar range, turning clay into shapes and sizes of your imagination. You can chill at the studio, interact with the people there. We also have music and snacks 
                                          to add to the creative experience. </p>
                                          <p>
                                            Later in the evening, you can engage in cooking with your host at the guesthouse, if you wish so. As we have dinner, you engage in interactions among the group, the locals and watch a small documentary. 
                                             
                                          </p>
                                        </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items1} />
                                        <CardBody>                                    
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Beautiful Dharamkot</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Pottery</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Group interactions</div>
                                        </CardBody>
                                      </Card>
                                    </div>
                                </div>
                             

                               <div className="row day-row">

                                    <div className="col-12 col-md-8">
                                        <b> Day 2 </b><br/>
                                <i>Run a local cafe, a Thundering Waterfall, Beautiful Sunset, Yoga</i><br/><br/>
                                  Join a morning Yoga session along with the rising sun. Go for a walk around and have a healthy breakfast
                                  of your choice. <br/><br/>
                                  This day is also about getting the feel of running a local cafe, and giving wings to your thoughts 
                                  of starting a cafe in the mountains. Dharamkot has numerous kinds of cafes, and you can pick a role of your 
                                  choice at any of these for a couple of hours. Cook your dish, style the cafe or wait tables, whatever fits your cup.
                                  <br/><br/>
                                 <p> In the late afternoon, we start our walk to the Gallu waterfall, on a trail with a lot of birds. Feel the rush of the 
                                 fast flowing cool water and relax at the waterfall. On the way back, watch the sun disappear as you sip hot tea at the Sunset Cafe. 
                               </p>
                               <p>The nights are safe and peaceful, and you can walk around, watch the stars, chill at a local cafe and spend your time the way you like best.
                               </p>
                                </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items2} />
                                        <CardBody>                                    
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Yoga</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Running a local cafe</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Waterfall trek</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Sunset Cafe</div>                                        </CardBody>
                                      </Card>
                                    </div>
                                </div> 


                                <div className="row day-row">

                                    <div className="col-12 col-md-8">
                                        <b> Day 3 </b> <br/>
                                <i>Local Culture, Free exploration, Goodbyes </i><br/><br/>
                                  On the final day, after having breakfast, you are free to spend time either in Dharamkot or McLeodganj 
                                  exploring the local culture. Officially, the trip ends here, but you are bound to leave 
                                  with memories with the new friends you made, and hopefully the experience leaves you motivated and connected enought to plan another journey together.
                                  <br/><br/>The transport to McLeodganj will be arranged at a time convenient to you. You can immerse yourself into the local culture through
                                  stories, visiting the Dalai Lama temple, the Tibet Museum, local markets and engaging in folk show with the locals.
                                  You can also learn Tibetan cooking by making your own momos and soups. You can also visit the many interesting initiatives by the locals.

                                 <br/><br/>
                                 </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items3} />
                                        <CardBody>                                    
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Tibetan Culture</div>
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Local Markets</div>
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>New travel plans :)</div>

                                    </CardBody>
                                      </Card>
                                    </div>
                                </div> 
                            </div>
                         </div>
            </>

            )
    }

}

export default DayWise;