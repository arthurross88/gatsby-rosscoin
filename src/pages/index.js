import * as React from "react"
import { Link } from "gatsby"

// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, intial=scale-1">
<link rel="stylesheet" href="/w3css/3/w3.css">
<html>
  <Layout>
    <Seo title="Home" />
  
  <!-- Navigation -->
<nav class="w3-bar w3-black">
  <a href="#home" class="w3-button w3-bar-item">Home</a>
  <a href="#news" class="w3-button w3-bar-item">News</a>
  <a href="#contact" class="w3-button w3-bar-item">Contact</a>
  <a href="#about" class="w3-button w3-bar-item">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</nav>
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
</html>
)

export default IndexPage
