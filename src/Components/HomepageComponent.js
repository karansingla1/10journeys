import React, {Component} from 'react';




class Homepage extends Component {

	constructor(props){
		super(props);

		}

	render() {
		return (
				<div className='bg'>
					<div className = 'container'>
						<div className='row justify-content-center'>
							<div className='col-auto mt-5'>
								<h1 className='mt-5'>10Journeys</h1>
							</div>
						</div>
						<div className='row  justify-content-center'>
							<div className='col-12  text-center'>
								<h5>Connect. Immerse. Learn</h5>
							</div>
						</div>
						<div className='row  justify-content-center'>
							<div className='col-12 comingSoon text-center'>
								<h5>Life is about learning, immersive experiences and meaningful
								relationships</h5>
							</div>
						</div>
						<div className='row  justify-content-center'>
							<div className='col-12  text-center'>
								<h4>Travel brings it all together.</h4>
							</div>
						</div>
					</div>
				</div>
			)
	}

}

export default Homepage;