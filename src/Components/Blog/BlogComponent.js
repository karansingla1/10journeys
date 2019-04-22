import React, {Component} from 'react';
import Articles from './ArticlesComponent.js'
import axios from 'axios';
import {Route, Switch, Redirect} from 'react-router-dom';
import Blogpost from './BlogpostComponent';
import { Jumbotron, Container } from 'reactstrap';
import fetch from 'cross-fetch';


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
    fetch("https://public-api.wordpress.com/rest/v1/sites/10journeys.wordpress.com/posts")
    .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json.posts
        })
      }).
      catch(error=>console.log(error.message));
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
        postwithID= () =>{
          return(<></>)
        }
      }
      

  		return(
  			<>
        <div className="page-top">
        <Switch>
  				<Route exact path = '/blog' component = { () =><Articles posts = {this.state.posts}/>} />
          <Route path = '/blog/:postID/:postTitle' component = {postwithID} />
          </Switch>
          </div>
  			</>	
  		)};
  	

}
export default Blog;