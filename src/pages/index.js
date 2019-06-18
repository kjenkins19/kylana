import React from "react"
import {Link} from "gatsby"

import SEO from "../components/seo"
import MainLayout from "../components/mainLayout";

const IndexPage = () => (
  <MainLayout pageTitle="Welcome">
    <SEO title="Home"/>
    <h2>Recent Entries</h2>
    <div>
      <h3>Latest Entry</h3>
      <p>The Summary</p>
    </div>
    <div>
      <h3>Second to latest entry</h3>
      <p>The Summary</p>
    </div>
    <Link to="/about/">Go to about me</Link>
  </MainLayout>
);

export default IndexPage
