import React from "react"
import {Link} from "gatsby"

import SEO from "../components/seo"
import MainLayout from "../components/mainLayout"

const AboutMe = () => (
  <MainLayout pageTitle="About Me">
    <SEO title="About Me"/>
    <h2>About Me</h2>
    <p>Improver, Frost Mage, Human</p>

    <h2>The Improver</h2>

    <p>I am proud to work for one of the best places to work, Improving. As a senior consultant, I get to utilize a
      large variety of past experiences to be jack of all trades developer. Whether it is front end, app, database, or
      DevOps work, my goals it to do whatever is necessary to get the job done with quality, while building a
      trustworthy relationship with the client. These experience and network has also provided me both encouragement and
      the means of giving back to the community at large, as both an Organizer of the devopsdays Columbus conference,
      and as a speaker.</p>

    <h2>The Frost Mage</h2>

    <p>I am a gamer, and though I do play a variety of games, I am a dedicated player of World of Warcraft. I always
      choose "frost mage" to go back to (and is on my business card), as this is what I played with my first network, a
      community of gamers which has assisted me in growing as an individual, both in and out of the game. I found that
      when it comes to interacting and working with people as a team within games, you learn a lot of lessons which can
      affect work life as well, such dedication, culture, ideation and performance.</p>

    <Link to="/">Go back to the homepage</Link>
  </MainLayout>
);

export default AboutMe
