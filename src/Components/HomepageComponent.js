import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {Link} from 'react-router-dom';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Homepage extends Component {

	constructor(props){
		super(props);
		this.openForm = this.openForm.bind(this);

		}

	openForm() {
    this.typeformEmbed.typeform.open();
  }	

	render() {
		return (
			<>
			<Fullpage />
			</>	
			)
	}

}

const Fullpage = () => (
  <ReactFullpage
   autoScrolling={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper id="fullpage">
          <div className="section fb-auto-height section1">
	          	<video data-keepplaying pre-load="none" autoPlay muted loop id="myVideo"
	          		className='d-none d-md-block'>
				  <source src="/imgs/homepage/section1.mp4" type="video/mp4" />
				</video>

				<div className="content-top">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12  text-center mb-3 tagline1">
							Connect. Immerse. Learn
							</div>
						</div>

						<div className="row justify-content-center ">
							<div className="col-12 col-sm-12 col-md-6 col-lg-5 text-center mb-2 tagline2 ">
							Life is about meaningful relationships, immersive experiences and learning.
							</div>
						</div>

						<div className="row justify-content-center ">
							<div className="col-12 text-center tagline3">
							Travel brings it all together!
							</div>
						</div>
					</div>
				</div>			 
          </div>



          


          <div className="section section2">
          	<div className="container">
	          	<div className="row justify-content-center">
		          	<div className='col-3 col-md-2 col-lg-1 mt-5'>
		            	<img src='/logo6.png' className="message-image img-responsive img-fluid"/>
		            </div>
		             
		             <div className="col-12 align-self-end">
			          	<div id="we_design">
			          		Book immersive local experiences and journeys which ignite your
			          		curiosity and creativity. 
			            </div>
			          	<div id="reimagining">
			          		We are Reimagining Travel.<br/> A new way to learn the world.
			            </div>   
		            </div>
	            </div>
	            </div>
	            <div class="poster-container">
            <img className = "journey-image1 col-12" src="/imgs/homepage/journey-poster.jpg"/>
			  <div className="bottom-left1 d-none d-md-block">
			  	<Link to ='/creativejourney/'>
			  	<button className="btn btn-primary booking-button"> CHECK ITINERARY </button>
			  	</Link>
			  </div>

			  <div className="bottom-left d-md-none">
			  	<Link to ='/creativejourney/'>
			  	
			  	<button className="btn btn-primary booking-button"> CHECK ITINERARY </button>
			  	</Link>
			  </div>

			</div>
	            
	            <div className="row justify-content-center ">
					<div className="col-8 col-sm-6 col-md-4 col-lg-3 homepage-button-container">
					</div>
				</div>	

	            <div className="">
	            <div className="row" id="experience-images">
	            	<div className="col-12 col-sm-6 col-lg-3 container1">
				  		<img src="/imgs/homepage/pillars/img2.jpg" alt="Avatar" className="
				  		img-responsive img-fluid image1" />
					  <div>
					    <div className="middle-text">Explore a new way of life</div>
					  </div>
				    </div>

				  <div className="col-12 col-sm-6 col-lg-3 container1">
				  		<img src="/imgs/homepage/pillars/img1.jpg" alt="Avatar" className="
				  		img-responsive img-fluid image1" />
					  <div>
					    <div className="middle-text">Make new friends</div>
					  </div>
				  </div>

				  <div className="col-12 col-sm-6 col-lg-3 container1">
				  		<img src="/imgs/homepage/pillars/img3.jpg" alt="Avatar" className="
				  		img-responsive img-fluid image1" />
					  <div>
					    <div className="middle-text">Learn new skills</div>
					  </div>
				  </div>

				  <div className="col-12 col-sm-6 col-lg-3 container1">
				  		<img src="/imgs/homepage/pillars/img4.jpg" alt="Avatar" className="
				  		img-responsive img-fluid image1" />
					  <div>
					    <div className="middle-text">Create something</div>
					  </div>
				  </div>
				</div>

				<div className="row justify-content-center ">
					<div className="col-8 col-sm-6 col-md-4 col-lg-3 homepage-button-container">
						<Link to ='/blog/'>
							<div className='homepage-button btn  '>Read stories</div>
						</Link> 
					</div>

					<div className="col-8 col-sm-6 col-md-4 col-lg-3 homepage-button-container">
						<div className="row">
							<Link className="col-12" to ='/creativejourney/'>
								<div className='homepage-button btn '>Book an experience</div>
							</Link>
						</div>	
						<div className="row">
							<div className="col-12" id="currently">
							</div>
						</div> 
					</div>

					
				</div>

            </div>

          </div>




          <div className="section section3">
          	<div className="container">
          		<div className="row justify-content-center gallery-container">
          			<div className="col-12 align-self-center" id="glimpses" >
          				Some glimpses from our past experiences.
          			</div>
          		</div>

          		<div className="row gallery-container">
          			<div className="col-12 col-md-4 gallery">
          				<div className='row'>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img1.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img2.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img3.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img4.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img5.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img6.jpg"/></div>
          					</div>	
          			</div>

          			<div className="col-12 col-md-4 gallery">
          				<div className='row'>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img7.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img8.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img9.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img10.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img11.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img12.jpg"/></div>
          					</div>	
          			</div>

          			<div className="col-12 col-md-4 gallery">
          				<div className='row'>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img13.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img14.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img15.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img16.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img17.jpg"/></div>
          					<div className="col-12"><img className="galleryimage" src="/imgs/homepage/photogallery/img18.jpg"/></div>
          				</div>	
          			</div>
          		</div>	
          	</div>	
          </div>	
        </ReactFullpage.Wrapper>
      );
    }}
  />
);



export default Homepage;