import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Collapse, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class FAQs extends Component {
	constructor(props) {
		super(props);
		this.toggle1 = this.toggle1.bind(this);
    	this.toggle2 = this.toggle2.bind(this);
    	this.toggle3 = this.toggle3.bind(this);
    	this.toggle4 = this.toggle4.bind(this);
    	this.toggle5 = this.toggle5.bind(this);
    	this.state = { 
    		collapse1: false,
    		collapse2: false,
    		collapse3: false,
    		collapse4: false,
    		collapse5: false,

    		 };

	};

  toggle1() {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  }

  	toggle2() {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  }

  	toggle3() {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  }

  	toggle4() {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  }

  	toggle5() {
    this.setState(state => ({ collapse5: !state.collapse5 }));
  }

render() {
	return (
		<>

     <div className="col-12">
        <div className = "question" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>
        	Where do I reach, and what if I reach early?
        </div>
        <Collapse isOpen={this.state.collapse1}>
          <div className = "answer">
            The journey begins at Dharamshala at 9am, where you can reach by road or by air (Ghaggal Airport).
            Many buses are available from Delhi, Chandigarh and other cities.
            Don't worry if you reach a few hours early. Once you reach Dharamshala, we will have a comfortable place for you to rest and
            freshen up. You will be timely informed about the same.
          </div> 
        </Collapse>
      </div>

      <div className="col-12">
        <div className = "question" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>
        	What should I bring along?
        </div>
        <Collapse isOpen={this.state.collapse2}>
          <div className = "answer">
            We strongly recommend you to travel light and carry only a single backpack along with a small bag to carry
            your essentials for walks and short hikes.
            Wear comfortable shoes and carry light woollens and a jacket.
            </div>
        </Collapse>
      </div>

      <div className="col-12">
        <div className = "question" onClick={this.toggle3} style={{ marginBottom: '1rem' }}>Can I travel 
        with my group of friends? </div>
        <Collapse isOpen={this.state.collapse3}>
          <div className = "answer">
         This is a small group journey with maximum 12 people. A small group helps in a more 
         interactive experience and meaningful friendships with new people.
         If you are travelling along with your friends, we would suggest your group size 
         to be not bigger than 3 people, so that you can have more interactions with new people.
            </div>
        </Collapse>
      </div>

      

      <div className="col-12">
        <div className = "question" onClick={this.toggle5} style={{ marginBottom: '1rem' }}>
        	What is the cancellation and refund policy?
        </div>
        <Collapse isOpen={this.state.collapse5}>
          <div className = "answer">
            If you cancel more than 14 days before the start date, 80% of the total cost will be 
            refunded. If cancellation is between 7-14 days before the start date, 50% of the trip cost will be 
            refunded. No refund would be possible if the cancellation is within 7 days of the start date.
            </div>
            
        </Collapse>
      </div>
		</>

		)
}




}




export default FAQs;