import * as React from "react"
import { Link } from "gatsby"

// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div style="padding-left:16px">
  <h2>Responsive Topnav Example</h2>
  <p>Resize the browser window to see how it works.</p>
</div>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
  <Layout>
    <Seo title="Home" />
    <p>
    <h1>Welcome to Rosscoin.nl</h1>
    <p>Here you'll find everything you need to know about Rosscoin.</p>

The Ross Machine (Ross 1.3)

The Ross machine is designed by me Arthur Ross.

It is used as a currency, that trades labour for resources. This means that when you exert pressure, that isn’t too pleasant, you get paid instantly. 
It is also possible to scale up, once you pass a certain barrier of discomfort. In this fashion you make tasks performed at a lower scale much more easy for yourself.

Once you’ve built up enough credit you can exchange this for something pleasurable, such as a product or a service.

The purpose is to bring an excess of joy to the world and to eventually have everyone be able to operate a ‘Ross Machine.’

As long as you’re higher in scale you will be more capable of manipulating the data throughput.

So in conclusion the Ross Machine generates happiness, in ways of pleasure, and helps wishes and desires come true. 

The counter arguments are that the feeling of joy, that you get, is highly addictive, therefore there should be a specific time of the day that you may use the Ross Machine. For instance only at 4 o’clock in the afternoon.
  
  </p>
    <StaticImage
      src="../images/rosscoin.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="The coin"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export default IndexPage
