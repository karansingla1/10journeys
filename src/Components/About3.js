import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink,Col } from 'reactstrap';
import Footer from './FooterComponent.js';
import {Helmet} from "react-helmet";


class About3 extends Component {
	render() {
		return (
			<>
			<Helmet>
	            <title>About us</title>	         
          	</Helmet>
			<div className="page-top">
		      <Jumbotron fluid>
		        <Container className = "container" fluid>
		          <h1 className="display-3">Our Story</h1>
		          <p className="lead"></p>
		        </Container>
		      </Jumbotron>
		    </div>

			<div className = "container">
				<div className="row">
					<span className = 'col-1'><i className="fa fa-quote-left fa-lg fa-pull-left fa-border" aria-hidden="true"></i></span>				
					<h4 className='col-11'>“Blessed are the curious for they shall have adventures.”</h4>
				</div>

				<div className="row about-us-section">

				<div className = "col-11 offset-1 about-us-content">

				<p><span className = "about-us-heading ">10Journeys</span> provides small 
				 group immersive travel experiences and journeys.
				 The idea is for you to be able to explore your interests, gain newer 
				 perspectives and learn the things which you are curious about, while 
				 building meaningful relationships with those who travel with you, as well 
				 as the people and the places that you visit. </p>
				
				<p>The fact is that <b>we are all born 
				explorers!</b> We are curious to learn, we are curious to understand the world around us, we are curious to understand the people and we are immersed in the little things we do.
				We play and explore, and as a result, we learn and we create. Everything is new.</p>
				<p><b>But sometimes, somewhere, in the midst 
				of our life journey, we stop being so.</b> We cease to see the beauty and the newness 
				in the world. We start living and seeing life in one way 
				and begin to believe that that's the way things are.</p><p> Deep down, we know that <b>our 
				true nature as well as our deepest desires</b> are to explore, know more and understand 
				about the world and the people, have meaningful conversations and relationships with
				people, and being close to the nature. These are the things which bring us lasting joy 
				and happiness.</p><p><i><b>Travel gives us the opportunity to be explorers, learners and 
				creators once again.</b></i></p>

				</div>
				</div>

				<div className="row about-us-section">
					<div className=" col-11 offset-1 about-us-heading">
						Creative Tourism
					</div>
					<hr/>
					<div className = "col-11 offset-1 about-us-content">
						<p>We want to bring about the concept of creative travel and tourism,
						 where we move away from consumeristic tourism to a much more experiential,
						  authentic and locally embedded form of tourism.</p>

						<p>As a visitor, it offers you a way to indulge deeply in a 
						creative pursuit or a story, connect with the locals, meet new 
						people and make meaningful connections. It provides you an 
						opportunity to learn and create something new, explore a new 
						place, spend time with yourself and experience newer perspectives.</p>

						<p>We wish to provide you immersive journeys across various 
						themes which will ignite your curiosity and creativity.</p>

					</div>
				</div>	
				<div className="row about-us-section">
					<div className=" col-11 offset-1 about-us-heading">
						Leave a positive impact
					</div>
					<hr/>
					<div className = "col-11 offset-1 about-us-content">
						<p>Today, there is a growing need to make responsible travel 
						choices so that the places which we visit are left better off, 
						environmentally, culturally and economically as well as at an 
						individual level.</p>

						<p>Through simple choices, like choosing local homestays, sharing 
						and learning skills, appreciating and celebrating a different way 
						of life with the hosts, we can leave behind a positive impact through
						 our travel. Such experiences also leave visitors with valuable memories,
						  skill and stories. </p>

						<p>We see how creative tourism can make travel a force for
						 good in the world.</p>
					</div>
				</div>

				<div className="row about-us-section">
					<div className=" col-11 offset-1 about-us-heading">
						Who are we?
					</div>
					<hr/>
					<div className = "col-11 offset-1 about-us-content">
						<div className='row'>

							<div className="col-12 col-md-6 mb-4">
						      <div className="card border-0 shadow">
						      	<h5 className="card-title text-center mb-0">Karan, Co-Founder</h5>
						      	<br/>
						        <img src="/imgs/about/karan.jpg" className="card-img-top team-images" alt="..."/>
						        <div className="card-body">
						          	<div className="card-text text-black-50">
							          	<p className="text-center"><b> </b></p>
							          	<p className="text-center">He is an explorer at heart. He loves reading, star gazing, trekking and immersing in new learning experiences.</p>
							          	<p className="text-center"> During his time at IIT Delhi, he designed and led treks to offbeat locations. 
							          	He later worked in the education sector, designing creative math and learning experiences for 
							          	children as an educator. </p> 	
									</div>
						        </div>
						      </div>
						    </div>

						    <div className="col-12 col-md-6 mb-4">
						      <div className="card border-0 shadow">
						      	<h5 className="card-title text-center mb-0">Romit, Co-Founder</h5>
						      	<br/>
						        <img src="/imgs/about/romit.jpg" className="card-img-top team-images" alt="..."/>
						        <div className="card-body">
						          	<div className="card-text text-black-50">
							          	<p className="text-center"><b> </b></p>
							          	<p className="text-center">His mind and soul are always looking for meaningful conversations.
							          	Engaging with the locals is his favorite thing to do while travelling.</p>
							          	<p className="text-center"> The time he spent exploring diverse towns and cities as an urban consultant 
							          	guided his interest in finding new perspectives of living and learning about the vast cultural diversity the world has to offer.</p>
									</div>
						        </div>
						      </div>
						    </div>

					    </div>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default About3;