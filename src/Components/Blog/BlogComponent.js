import React, {Component} from 'react';
import Articles from './ArticlesComponent.js'
import axios from 'axios';
import {Route, Switch, Redirect} from 'react-router-dom';
import Blogpost from './BlogpostComponent';
import { Jumbotron, Container } from 'reactstrap';


class Blog extends Component {

	constructor(props){
		super(props);

		this.state = {
			posts: [],
		}
	}

	/*componentDidMount() {
    axios.get("http://public-api.wordpress.com/rest/v1/sites/10journeys.wordpress.com/posts")
      .then(res => {
        this.setState({posts: res.data.posts});
      })
      .catch(error => console.log(error));
  }*/
  componentDidMount() {
    fetch("http://public-api.wordpress.com/rest/v1/sites/10journeys.wordpress.com/posts")
    .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json.posts
        })
      })
  }



  	render() {
      let postwithID;
      if (this.state.posts.length>0){
          postwithID = ({match}) => {
            return(
              <>
              <Blogpost ID = {parseInt(match.params.postID)} 
              post = {this.state.posts.filter((post) => parseInt(match.params.postID) === post.ID )[0]} />
              </>
          ) 
        };   
      }

      else {
        postwithID= null;
      }
      

  		return(
  			<>
        
        <Switch>
  				<Route exact path = '/blog' component = { () =><Articles posts = {this.state.posts}/>} />
          <Route exact path = '/blog/:postID' component = {postwithID} />
          </Switch>
  			</>	
  		)};
  	

}
export default Blog;