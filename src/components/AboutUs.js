import React from 'react'
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

const AboutUs = () => (
  <div>
   <div class="card card-body">
<h2 class="card-title"><emj style={{color: "orange"}}>💃</emj> Who We Are</h2>
<p style={{color: "black"}} class="lead" >We're a welcoming community of developers of all skill levels who have a love or interest in creative code. Even if you've never heard of it before or it sounds intimidating - this is the place for you!
<br/>
<br/>
From CSS web animation to experimenting with HTML5 Canvas, code is art and a means of self-expression that can be translated into effective UI/UX and bring about unforgettable experiences and interaction to the web. We curate content/resources, hold CSS/SVG art (creative code) challenges, and inspire each other to become better Cascading Coders!</p>
<blockquote class="blockquote"><emj style={{color: " #0CA4ED"}}>👥</emj>  Join our Community: </blockquote><a href="https://www.facebook.com/groups/1752972351391061/">Facebook Group</a><br/>
<blockquote class="blockquote"><emj  style={{color: "red"}}>❤️ </emj>Like/Follow:</blockquote> <a href="https://twitter.com/cascadingcoders">Twitter</a><a href="https://www.facebook.com/CascadingCoders/">Facebook Page</a>

</div>
  </div>
)

export default () => (<div>{style}<AboutUs/></div>)