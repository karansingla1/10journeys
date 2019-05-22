import React, {Component} from 'react';
import { CardImg, CardSubtitle, TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

const items1 = [
  {
    src: '/imgs/shortjourney/pottery2.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/dham1.jpg',
    altText: '',caption: '',header: ''
  },
];

const items2 = [
  {
    src: '/imgs/shortjourney/walk1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/woodpaint1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/cultural1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/cultural2.jpg',
    altText: '',caption: '',header: ''
  },

  {
    src: '/imgs/shortjourney/cultural3.jpg',
    altText: '',caption: '',header: ''
  },
];

const items3 = [
  {
    src: '/imgs/shortjourney/yoga1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/food1.jpg',
    altText: '',caption: '',header: ''
  },

  {
    src: '/imgs/shortjourney/waterfall1.jpg',
    altText: '',caption: '',header: ''
  },

  {
    src: '/imgs/shortjourney/waterfall2.jpg',
    altText: '',caption: '',header: ''
  },
];

const items4 = [
  {
    src: '/imgs/shortjourney/village1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/village2.jpg',
    altText: '',caption: '',header: ''
  },

  {
    src: '/imgs/shortjourney/village3.jpg',
    altText: '',caption: '',header: ''
  },

  {
    src: '/imgs/shortjourney/village4.jpg',
    altText: '',caption: '',header: ''
  },
];

const items5 = [
  {
    src: '/imgs/shortjourney/day5-1.jpg',
    altText: '',caption: '',header: ''
  },
  {
    src: '/imgs/shortjourney/day5-2.jpg',
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
                                        <i>Unlock your creative potential, meet new people</i><br/><br/>
                                        After your arival and getting to know the group, you will we spending the day at the age-old Andtretta village with India's oldest pottery studio. 
                                        You will spend time desiging your own pots, and realize your creative powers.<br/>
                                        Here, you stay at a beautiful homestay in the lap of nature, and enjoy traditional Himachali meals. <br/><br/>
                                    </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items1} />
                                        <CardBody>                                    
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Pottery in Andretta village</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Kangri Dham</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Group interactions</div>
                                        </CardBody>
                                      </Card>
                                    </div>
                                </div>
                             

                               <div className="row day-row">

                                    <div className="col-12 col-md-8">
                                        <b> Day 2 </b><br/>
                                <i>Learn new skills, explore the local culture </i><br/><br/>
                                You will spend the morning walking through the aromatic tea estates of palampur, and
                                learn about the tea manufacturing process. 
                                <br/><br/>
                                Then, you will visit and be inspired by the artists at the Norbulingka institute, and take a
                                fun-filled intensive workshop in a Tibetan art form of your choice, and create something beautful.

                                <br/><br/> Have a relaxed evening in McLeodganj while freely exploring the local markets, The Dalai Lama Temple, the Tibet Museum, numerous cafes and other places of local interest.

                                Spend the night in the peaceful Dharamkot region, situated closer to the Dhauladhar ranges.<br/><br/>
                                </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items2} />
                                        <CardBody>                                    
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Tea estates walk</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Tibetan Arts</div>
                                            <div className="col-12"><i className = "mr-2 fa fa-check"/>Cultural visits</div>
                                        </CardBody>
                                      </Card>
                                    </div>
                                </div> 


                                <div className="row day-row">

                                    <div className="col-12 col-md-8">
                                        <b> Day 3 </b> <br/>
                                <i>Feel fit and close to nature, experiment with new dishes </i><br/><br/>
                                We begin the morning with a yoga session with an experienced teacher. If you wish, you can also 
                                attend a one-hour Buddhist meditation session at the beautiful Tushita Meditation Center. 
                                <br/><br/>
                                Today, we engage in learning the art of cooking delicious momos and Tibetan soups. 
                                You can experiment with different fillings, shapes and any other ideas in your imagination.
                                <br/><br/>
                                In the late afternoon, we go for a short hike to a beautiful waterfall,
                                 watching and listening to the beautiful sounds of the birds along the way. On the way back, 
                                 watch the sun disappear along with the delicious at the Sunset cafe. We walk back to 
                                 Dharamkot and spend the night there.

                                 <br/><br/>
                                 </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items3} />
                                        <CardBody>                                    
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Yoga and Meditation</div>
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Tibetan Cooking</div>
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Waterfall trek</div>
                                    </CardBody>
                                      </Card>
                                    </div>
                                </div> 


                                <div className="row day-row">

                                    <div className="col-12 col-md-8">
                                        <b> Day 4 </b> <br/>
                                <i>A village experience </i><br/><br/>

                                We drive to the sleepy village of Kareri, and go back in time to experience the
                                real village life. We connect with the locals to know and learn about their life,
                                see new perspectives. Let yourself be amazed by the huge variety of fresh vegetables
                                and fruits, as you walk freely collecting fresh produce for your evening meal. 

                                <br/><br/>
                                Help the hosts in preparing dinner on the traditional Chulha and enjoy the meal
                                around a bonfire as we share experiences and stories among the group as well as the 
                                hosts.
                                <br/><br/>
                                

                                 </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items4} />
                                        <CardBody>                                    
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Village life</div>
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Games and group activities</div>
                                        <div className="col-12"><i className = "mr-2 fa fa-check"/>Traditional Dinner</div>
                                    </CardBody>
                                      </Card>
                                    </div>
                                </div> 
                                
                                
                                <div className="row day-row">

                                    <div className="col-12 col-md-8">
                                        <b> Day 5 </b> <br/>
                                        <i>Personal time and goodbyes</i><br/><br/>
                                        You are free to explore around the village or go for a walk/hike in the beautiful mountains
                                        and spend time exploring the traditional architecture, watching birds or 
                                        painting the landscape. A local guide can accompany you if you wish. Your return transport to Dharamshala will be arranged
                                        at the time which is convenient to you. 
                                    </div>

                                    <div className="col-12 col-md-4">
                                      <Card>    
                                        <UncontrolledCarousel items={items5} />
                                        
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