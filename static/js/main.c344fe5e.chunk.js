(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){e.exports=t(196)},111:function(e,a,t){},112:function(e,a,t){},196:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(17),s=t.n(r),c=(t(108),t(109),t(110),t(111),t(5)),i=t(6),o=t(8),m=t(7),d=t(9),g=(t(112),t(16)),u=t(3),p=t(4),E=(l.Component,t(14));var h=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://js.instamojo.com/v1/button.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){var e=this.props.tripsForCity,a=this.props.city,t=" ";var l=e.map(function(l){return t.toString()===l.tripDate.toString()?(1,n.a.createElement("div",{key:"trip.id"})):(1,t=l.tripDate,n.a.createElement("div",{key:"trip.id",className:"row mb-5"},n.a.createElement("div",{className:"col-12 col-sm-2 mb-3 tripDates"}," ",function(e){var a=new Array;return a[0]="January",a[1]="February",a[2]="March",a[3]="April",a[4]="May",a[5]="June",a[6]="July",a[7]="August",a[8]="September",a[9]="October",a[10]="November",a[11]="December",a[e.getMonth()]+" "+e.getDate()}(t)," "),n.a.createElement("div",{className:"col-12 col-sm-10"},n.a.createElement("div",{className:"row"},function(t){return e.filter(function(e){return e.tripDate.toString()===t.toString()}).map(function(e){return n.a.createElement("div",{key:e.id,className:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mb-3"},n.a.createElement(u.a,null,n.a.createElement(u.c,{top:!0,width:"100%",src:e.featured_image,alt:"Card image cap"}),n.a.createElement(u.b,null,n.a.createElement(u.f,null,e.title),n.a.createElement(u.d,null,e.tripCaption),n.a.createElement(u.e,null,e.short_description),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-auto "},n.a.createElement(p.b,{to:"/destinations/"+a.name+"/"+e.id},n.a.createElement("div",{className:"btn btn-warning"},"Check Details")))))))})}(t)))))});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null," ",l)))}}]),a}(l.Component),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(g.a)(t)),t.state={isOpen:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){this.props.destinations.map(function(e){if(!0===e.active)return n.a.createElement(p.c,{key:e.id,className:"nav-link",to:"/"+e.link},n.a.createElement(u.i,{key:e.id},e.name))});return n.a.createElement("div",null,n.a.createElement(u.o,{className:" mynavbar fixed-top",color:"light",light:!0,expand:"md"},n.a.createElement(u.p,{href:"/"},n.a.createElement("img",{src:"/logo7.png",className:"img-fluid img-responsive brand-image"}),n.a.createElement("span",{className:"brand-name"})),n.a.createElement(u.q,{onClick:this.toggle}),n.a.createElement(u.g,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(u.m,{className:"ml-auto",navbar:!0},n.a.createElement(u.n,null,n.a.createElement(p.c,{className:"nav-link",to:"/destinations/mcleodganj/",onClick:this.toggle},"Mcleodganj")),n.a.createElement(u.n,null,n.a.createElement(p.c,{className:"nav-link",to:"/blog/",onClick:this.toggle},"Blog")),n.a.createElement(u.n,null,n.a.createElement(p.c,{className:"nav-link",to:"/aboutus/",onClick:this.toggle},"About us"))))))}}]),a}(l.Component),f=Object(p.g)(Object(E.b)(function(e){return{destinations:e.cities,trips:e.trips}})(v));function b(e,a){return new Date(e.tripDate).getTime()-new Date(a.tripDate).getTime()}var y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={datevalue:(new Date).toISOString().substring(0,10)},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({datevalue:e.target.value})}},{key:"render",value:function(){var e=this,a=this.props.destination,t=a.slides,l=this.props.trips.filter(function(e){return e.destinationID===a.id}).sort(b),r=(l.length,new Date);return l=(l=(l=l.filter(function(e){return e.tripDate>=r||e.tripDate.getDate()===r.getDate()})).filter(function(a){return a.tripDate.toISOString().substring(0,10)>=e.state.datevalue||a.tripDate.toISOString().substring(0,10)===e.state.datevalue.substring(0,8)+(parseInt(e.state.datevalue.substring(8,10))-1).toString()})).filter(function(e){return!0===e.active}),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"page-top"},n.a.createElement(u.r,{items:t}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-5 justify-content-center"},n.a.createElement("div",{className:"col-auto mt-3"},n.a.createElement("h2",null,a.name.toUpperCase()))),n.a.createElement("div",{className:"row mb-5 ml-3 justify-content-center"},n.a.createElement("label",{htmlFor:"datevalue",className:"cominglabel col-auto offset-sm-1"},"I am coming on"),n.a.createElement("input",{className:"ml-3 ml-sm-0 col-auto",id:"today",type:"date",name:"datevalue",value:this.state.datevalue,onChange:this.handleChange,min:(new Date).toISOString().substring(0,10)})),n.a.createElement(h,{tripsForCity:l,city:a}))))}}]),a}(l.Component),w=Object(p.g)(Object(E.b)(function(e){return{trips:e.trips}})(y));var N=function(e){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-11 offset-1 col-sm-3"},n.a.createElement("h5",null,"Links"),n.a.createElement("ul",{className:"row list-unstyled"},n.a.createElement("li",{className:"col-6"},n.a.createElement(p.b,{to:"/home"},"Home")),n.a.createElement("li",{className:"col-6"},n.a.createElement(p.b,{to:"/aboutus"},"About")),n.a.createElement("li",{className:"col-6"},n.a.createElement(p.b,{to:"/blog"},"Blog")),n.a.createElement("li",{className:"col-6"},n.a.createElement(p.b,{to:"/contactus"},"Contact")),n.a.createElement("li",{className:"col-6"},n.a.createElement(p.b,{to:"/terms"},"T & C")),n.a.createElement("li",{className:"col-6"},n.a.createElement(p.b,{to:"/privacypolicy"},"Privacy")))),n.a.createElement("div",{className:"col-11 offset-xs-1 col-sm-3"},n.a.createElement("h5",null,"Our Address"),n.a.createElement("address",null,"The world is our playground.",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +91 9971526127",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",n.a.createElement("a",{href:"mailto:10journeys.travel@gmail.com"},"10journeys.travel@gmail.com"))),n.a.createElement("div",{className:"col-12 col-sm-5 align-self-center"},n.a.createElement("div",{className:"text-center"},n.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},n.a.createElement("i",{className:"fa fa-facebook"})),n.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},n.a.createElement("i",{className:"fa fa-linkedin"})),n.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{className:"btn btn-social-icon btn-secondary",href:"http://youtube.com/"},n.a.createElement("i",{className:"fa fa-youtube"})),n.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},n.a.createElement("i",{className:"fa fa-envelope-o"}))))),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("p",null,"\xa9 Copyright 2019 10Journeys")))))},C=t(68),D=t.n(C),j=(t(73),function(){return n.a.createElement(D.a,{autoScrolling:!1,render:function(e){e.state,e.fullpageApi;return n.a.createElement(D.a.Wrapper,{id:"fullpage"},n.a.createElement("div",{className:"section section1"},n.a.createElement("video",{"data-keepplaying":!0,"pre-load":"none",autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},n.a.createElement("source",{src:"/imgs/homepage/section1.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"content-top"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-12 text-center mt-5 mb-5 tagline1"},"Connect. Immerse. Learn")),n.a.createElement("div",{className:"row justify-content-center mb-5 tagline2"},n.a.createElement("div",{className:"col-12 text-center "},"Life is about meaningful relationships, immersive experiences and learning.")),n.a.createElement("div",{className:"row justify-content-center tagline3"},n.a.createElement("div",{className:"col-12 text-center "},"Travel brings it all together!"))))),n.a.createElement("div",{className:"section section2"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-4"},n.a.createElement("img",{src:"/logo6.png",className:"message-image img-responsive img-fluid"})),n.a.createElement("div",{className:"col-12 col-md align-self-end"},n.a.createElement("div",{id:"we_design"},"We design immersive local experiences and journeys which ignite your curiosity and creativity."),n.a.createElement("div",{id:"reimagining"},"We are Reimagining Travel."))),n.a.createElement("div",{className:"row justify-content-center",id:"ex_new"}),n.a.createElement("div",{className:"row",id:"experience-images"},n.a.createElement("div",{className:"col-12 col-sm-6 container1"},n.a.createElement("img",{src:"/imgs/homepage/pillars/img2.jpg",alt:"Avatar",className:" img-responsive img-fluid image1"}),n.a.createElement("div",{className:"middle"},n.a.createElement("div",{className:"middle-text"},"Explore a new way of life"))),n.a.createElement("div",{className:"col-12 col-sm-6 container1"},n.a.createElement("img",{src:"/imgs/homepage/pillars/img1.jpg",alt:"Avatar",className:" img-responsive img-fluid image1"}),n.a.createElement("div",{className:"middle"},n.a.createElement("div",{className:"middle-text"},"Make new friends"))),n.a.createElement("div",{className:"col-12 col-sm-6 container1"},n.a.createElement("img",{src:"/imgs/homepage/pillars/img3.jpg",alt:"Avatar",className:" img-responsive img-fluid image1"}),n.a.createElement("div",{className:"middle"},n.a.createElement("div",{className:"middle-text"},"Learn new skills"))),n.a.createElement("div",{className:"col-12 col-sm-6 container1"},n.a.createElement("img",{src:"/imgs/homepage/pillars/img4.jpg",alt:"Avatar",className:" img-responsive img-fluid image1"}),n.a.createElement("div",{className:"middle"},n.a.createElement("div",{className:"middle-text"},"Create something")))),n.a.createElement("div",{className:"row justify-content-center "},n.a.createElement("div",{className:"col-12 col-sm-6 col-md-5 homepage-button-container"},n.a.createElement(p.b,{to:"/blog/"},n.a.createElement("div",{className:"homepage-button btn btn-success "},"Read stories"))),n.a.createElement("div",{className:"col-12 col-sm-6 col-md-5 homepage-button-container"},n.a.createElement("div",{className:"row"},n.a.createElement(p.b,{className:"col-12",to:"/destinations/mcleodganj/"},n.a.createElement("div",{className:"homepage-button btn btn-success"},"Book an experience"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12",id:"currently"},"We are coming to Mcleodganj!")))))),n.a.createElement("div",{className:"section section3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center gallery-container"},n.a.createElement("div",{className:"col-12 align-self-center",id:"glimpses"},"Some glimpses from our trips.")),n.a.createElement("div",{className:"row gallery-container"},n.a.createElement("div",{className:"col-12 col-md-4 gallery"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img1.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img2.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img3.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img4.JPG"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img5.JPG"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img6.jpg"})))),n.a.createElement("div",{className:"col-12 col-md-4 gallery"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img7.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img8.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img9.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img10.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img11.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img12.jpg"})))),n.a.createElement("div",{className:"col-12 col-md-4 gallery"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img13.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img14.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img15.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img16.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img17.jpg"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{className:"galleryimage",src:"/imgs/homepage/photogallery/img18.jpg"}))))))))}})}),x=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,null))}}]),a}(l.Component),F=t(198),k=t(200),O=t(202),_=t(197),A=t(199),S=t(201);function I(e){return n.a.createElement("div",{className:"col-10 col-sm-8 col-md-6 col-lg-4 mb-4"},n.a.createElement("div",{className:"article"},n.a.createElement(u.a,null,n.a.createElement(u.c,{top:!0,width:"100%",src:e.post.featured_image,alt:"Card image cap"}),n.a.createElement(u.b,null,n.a.createElement(u.f,null,e.post.title),n.a.createElement(u.e,{className:"articleExcerpt",dangerouslySetInnerHTML:{__html:e.post.excerpt}}),n.a.createElement("div",{className:"row"},n.a.createElement(p.b,{className:"ml-2",to:"/blog/"+e.post.ID},n.a.createElement("span",{className:"btn btn-warning mr-3"},"Read more!")),n.a.createElement("div",{className:"col-auto"},n.a.createElement(_.a,{className:"row",url:"10journeys.com/blog"+e.post.ID},n.a.createElement(F.a,{size:42,round:!0}))),n.a.createElement("div",{className:"col-auto"},n.a.createElement(A.a,{className:"row",url:"10journeys.com/blog"+e.post.ID},n.a.createElement(k.a,{size:42,round:!0}))),n.a.createElement("div",{className:"col-auto"},n.a.createElement(S.a,{className:"row",url:"10journeys.com/blog"+e.post.ID},n.a.createElement(O.a,{size:42,round:!0}))))))))}var T=function(e){var a=e.posts.map(function(e){return n.a.createElement(I,{key:e.ID,post:e})});return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.l,{fluid:!0},n.a.createElement(u.h,{className:"container",fluid:!0},n.a.createElement("h1",{className:"display-3"},"Our Blog"),n.a.createElement("p",{className:"lead"},"This is our world of beautiful stories that we discover."))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-5 mb-5 justify-content-center"},a)))};t(169),t(188);var B=function(e){return e.post.ID===e.ID?n.a.createElement(n.a.Fragment,null,e.post.featured_image?n.a.createElement("img",{className:"img-fluid img-responsive",alt:"article header",src:e.post.featured_image}):"",n.a.createElement("div",{class:"container"},n.a.createElement("h1",{className:"text-center"},e.post.title),n.a.createElement("p",{className:"post-content",dangerouslySetInnerHTML:{__html:e.post.content}}))):n.a.createElement("div",null)},M=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={posts:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://public-api.wordpress.com/rest/v1/sites/10journeys.wordpress.com/posts").then(function(e){return e.json()}).then(function(a){e.setState({posts:a.posts})})}},{key:"render",value:function(){var e,a=this;return e=this.state.posts.length>0?function(e){var t=e.match;return n.a.createElement(n.a.Fragment,null,n.a.createElement(B,{ID:parseInt(t.params.postID),post:a.state.posts.filter(function(e){return parseInt(t.params.postID)===e.ID})[0]}))}:null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"page-top"},n.a.createElement(p.f,null,n.a.createElement(p.e,{exact:!0,path:"/blog",component:function(){return n.a.createElement(T,{posts:a.state.posts})}}),n.a.createElement(p.e,{exact:!0,path:"/blog/:postID",component:e}))))}}]),a}(l.Component),W=(l.Component,function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://js.instamojo.com/v1/button.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){var e=this.props.trip;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"page-top"}," ",n.a.createElement(u.r,{items:e.slides})," "),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row trip-info"},n.a.createElement("div",{className:"col-12 mb-2"},n.a.createElement("i",{className:"mr-2 fa fa-map-marker"}),"Starts at ",e.start_location),n.a.createElement("div",{className:"col-auto mb-2"},n.a.createElement("i",{className:"mr-2 fa fa-clock-o"}),e.duration,", ",e.start_time," onward"),n.a.createElement("div",{className:"col-12 mb-2"},n.a.createElement("i",{className:"mr-2 fa fa-list"}),e.inclusions),n.a.createElement("div",{className:"col-12 mb-2"},n.a.createElement("i",{className:"mr-2 fa fa-inr"}),e.cost,"/person")),n.a.createElement("div",{className:"row trip-info"},n.a.createElement("div",{className:"col-12 trip-info-titles"},"The experience"),n.a.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:e.experience}})),n.a.createElement("div",{className:"row trip-info"},n.a.createElement("div",{className:"col-12 trip-info-titles"},"What we'll do"),n.a.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:e.what_we_do}})),n.a.createElement("div",{className:"row trip-info"},n.a.createElement("div",{className:"col-12 trip-info-titles"},"Where we'll go"),n.a.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:e.where_we_go}})),n.a.createElement("div",{className:"row trip-info"},n.a.createElement("div",{className:"col-12 trip-info-titles"},"Who will you meet"),n.a.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:e.who_we_meet}})),n.a.createElement("div",{className:"row trip-info"},n.a.createElement("div",{className:"col-12 trip-info-titles"},"Notes"),n.a.createElement("div",{className:"col-12",dangerouslySetInnerHTML:{__html:e.notes}})),n.a.createElement("div",{className:"row empty-div"})),n.a.createElement("div",{className:"fixed-bottom  book-button-container"},n.a.createElement("a",{href:e.payment_code,rel:"im-checkout","data-behaviour":"remote","data-style":"flat","data-text":"Book Now"})))}}]),a}(l.Component)),H=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"page-top"},n.a.createElement(u.l,{fluid:!0},n.a.createElement(u.h,{className:"container",fluid:!0},n.a.createElement("h1",{className:"display-3"},"Our Story"),n.a.createElement("p",{className:"lead"})))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("span",{className:"col-1"},n.a.createElement("i",{className:"fa fa-quote-left fa-lg fa-pull-left fa-border","aria-hidden":"true"})),n.a.createElement("h4",{className:"col-11"},"\u201cBlessed are the curious for they shall have adventures.\u201d")),n.a.createElement("div",{className:"row about-us-section"},n.a.createElement("div",{className:" col-11 offset-1 about-us-heading"},"We are all born explorers!"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-11 offset-1 about-us-content"},n.a.createElement("p",null,n.a.createElement("i",null,"We believe that we are all born explorers.")," We are curious to learn, we are curious to understand the world around us, we are curious to understand the people and we are immersed in the little things we do. We play and explore, and as a result, we learn and we create. Everything is new."),n.a.createElement("p",null,"Yet, sometimes we cease to see the beauty and the newness in the world."),n.a.createElement("p",null,"Travel is a great way to experience how things can be done in so many different ways, how life can be lived in so many different ways. It gives us a chance to be explorers, creators, and learners once again."))),n.a.createElement("div",{className:"row about-us-section"},n.a.createElement("div",{className:" col-11 offset-1 about-us-heading"},"Why did we start 10Journeys?"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-11 offset-1 about-us-content"},n.a.createElement("p",null,"We know travel is not just about visiting the places. We know it's is not about sightseeing. We know it's not about an escape or a getaway. We know it's much more."),n.a.createElement("p",null,"Maybe, it's about rekindling the sense of wonder and curiosity which each one of us has. Maybe, it's about appreciating the beauty and the starkly different perspectives the world has to offer."),n.a.createElement("p",null,"Maybe, it meeting interesting people and meaningful friendships. Maybe, it's about immersing completely in a new culture. Maybe, it's about learning or creating something you never imagined before. Maybe, it's about overcoming your fears."),n.a.createElement("p",null,"Maybe, it's about going back as a changed person. Maybe, it's about making the world a better place."),n.a.createElement("p",null,"These Maybe's are what drive us and our offerings."))),n.a.createElement("div",{className:"row about-us-section"},n.a.createElement("div",{className:" col-11 offset-1 about-us-heading"},"What do we wish to do?"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-11 offset-1 about-us-content"},n.a.createElement("p",null,"We want to bring about the concept of creative travel and tourism, where we move away from consumeristic tourism to a much more experiential, authentic and locally embedded form of tourism."),n.a.createElement("p",null,"As a visitor, it offers you a way to indulge deeply in a creative pursuit or a story, connect with the locals, meet new people and make meaningful connections. It provides you an opportunity to learn and create something new, explore a new place, spend time with yourself and experience newer perspectives."),n.a.createElement("p",null,"We wish to provide you immersive journeys across various themes which will ignite your curiosity and creativity."),n.a.createElement("p",null,"We also love nature. We love the sanctity of snow capped mountains, and we love the seas. We love the thrill of the fast flowing rivers. Through our personal experiences, as well through what research indicates, we have come to understand that spending time and being close to nature brings a long lasting joy, fulfilment and well-being. We wish to provide you experiences which will nourish your soul, make you fitter, help you overcome your fears and at the same time, doing it all responsibly."))),n.a.createElement("div",{className:"row about-us-section"},n.a.createElement("div",{className:" col-11 offset-1 about-us-heading"},"Leave a positive impact"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-11 offset-1 about-us-content"},n.a.createElement("p",null,"Today, there is a growing need to make responsible travel choices so that the places which we visit are left better off, environmentally, culturally and economically as well as at an individual level."),n.a.createElement("p",null,"Through simple choices, like choosing local homestays, sharing and learning skills, appreciating and celebrating a different way of life with the hosts, we can leave a behind a positive impact through our travel. Such experiences also leave visitors with valuable memories, skill and stories. "),n.a.createElement("p",null,"We see how creative tourism can make travel a force for good in the world."))),n.a.createElement("div",{className:"row about-us-section"},n.a.createElement("div",{className:" col-11 offset-1 about-us-heading"},"What do we offer currently?"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-11 offset-1 about-us-content"},n.a.createElement("p",null,"Right now, you can be join any of the experiences we have in Mcleodganj. If you are far away from the locations we are currently at, you better pack your bag (keep it light! because travel advice is in our blood) and immerse yourself in a new world. We would be super delighted to have you here."),n.a.createElement("p",null,"If stories satisfy your soul, keep reading our blog section. These are some of the stories that we discover on our explorations."),n.a.createElement("p",null,"If things go well, you will see a lot more coming up here. We are extremely hopeful, and we are working hard too. "))),n.a.createElement("div",{className:"row about-us-section"},n.a.createElement("div",{className:" col-11 offset-1 about-us-heading"},"Who are we?"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-11 offset-1 about-us-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-0 shadow"},n.a.createElement("h5",{className:"card-title text-center mb-0"},"Karan, Co-Founder"),n.a.createElement("br",null),n.a.createElement("img",{src:"https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http://2.bp.blogspot.com/-bie9zV2YM4I/UhcOOw39vzI/AAAAAAAAAGI/LRkRkqgU194/s1600/13708_4075968819357_1849976629_n.jpg&container=blogger&gadget=a&rewriteMime=image/*",className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-text text-black-50"},n.a.createElement("p",null,"Every time he reads a story of exploration, every single time! He has an irresistible urge to explore the unknown, for no ulterior motive."),n.a.createElement("p",null,"During his time at IIT Delhi, he designed and led treks to offbeat locations. He later designed creative math and tech learning experiences for Children as an educator."),n.a.createElement("p",null," And then, it was time for 10Journeys. "))))),n.a.createElement("div",{className:"col-12 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-0 shadow"},n.a.createElement("h5",{className:"card-title text-center mb-0"},"Romit, Co-Founder"),n.a.createElement("br",null),n.a.createElement("img",{src:"http://static1.squarespace.com/static/5899708ee3df288fed2979ab/t/5c5d91ecb208fcb27d09a61b/1549636078416/studlogo_box.jpg?format=1500w",className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-text text-black-50"})))))))))}}]),a}(l.Component),L=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://js.instamojo.com/v1/button.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement(p.f,null,n.a.createElement(p.e,{path:"/home",component:x}),n.a.createElement(p.e,{exact:!0,path:"/destinations/:name",component:function(a){var t=a.match,l=e.props.cities.filter(function(e){return e.name===t.params.name})[0];return l?n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{destination:l})):n.a.createElement(n.a.Fragment,null)}}),n.a.createElement(p.e,{path:"/blog",component:M}),n.a.createElement(p.e,{path:"/aboutus",component:H}),n.a.createElement(p.e,{exact:!0,path:"/destinations/:name/:tripID",component:function(a){var t=a.match,l=e.props.trips.filter(function(e){return e.id===parseInt(t.params.tripID)})[0];return l?n.a.createElement(n.a.Fragment,null,n.a.createElement(W,{trip:l})):n.a.createElement(n.a.Fragment,null)}}),n.a.createElement(p.d,{to:"/home"})),n.a.createElement(N,null))}}]),a}(l.Component),R=Object(p.g)(Object(E.b)(function(e){return{cities:e.cities,trips:e.trips}})(L)),z=t(36),J=[{id:0,title:"Best Music in town1",tripCaption:"You will love this!",themeName:"Music",destinationID:0,destinationName:"mcleodganj",link:"/mcleodganj/music/0",tripDate:new Date(2019,3,17),upcoming:!0,active:!0,featured_image:"https://support.apple.com/content/dam/edam/applecare/images/en_US/music/featured-section-support-for-itunes_2x.png",payment_code:"https://www.instamojo.com/@singlakaran1994/l2024c47265004a188bf110f01146428a/",start_location:"Zostel, Mcleodganj",end_location:"GoStops",duration:"4hrs",start_time:"8 am",cost:800,inclusions:"Snacks, Transports, Material, Tickets",short_description:"",experience:"",what_we_do:"",where_we_go:"",who_we_meet:"",notes:"",slides:[{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}]}],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;switch((arguments.length>1?arguments[1]:void 0).type){case"SELECT_DATE":return console.log("reached"),e;default:return e}},q=[{id:0,name:"mcleodganj",active:!0,link:"destinations/mcleodganj",description:"",slides:[{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 1",caption:"Slide 1",header:"Slide 1 Header"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 2",caption:"Slide 2",header:"Slide 2 Header"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 3",caption:"Slide 3",header:"Slide 3 Header"}]}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return(arguments.length>1?arguments[1]:void 0).type,e},P=Object(z.c)(Object(z.b)({trips:U,cities:G})),Y=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(E.a,{store:P},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(R,null))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.c344fe5e.chunk.js.map