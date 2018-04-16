import React from 'react'

import 'font-awesome/css/font-awesome.min.css'
import '../../styles/side-bar.css'
import headShot from '../../media/Headshot.png'

const Sidebar = () => (
  <div
    className="sidebar-border"
  >
    <img
      src={headShot}
      alt={`Mike Vu`}
      className="profile-img"
    />
    <center>
      <a className="fa fa-linkedin-square fa-2x fa-fw link-icon" ariaHidden="true" href="https://www.linkedin.com/in/mdhvu/" />
      <a className="fa fa-github fa-2x fa-fw link-icon" ariaHidden="true" href="https://github.com/vusause" />
      <a className="fa fa-envelope fa-2x fa-fw link-icon" ariaHidden="true" href="mailto:mdhvu@uwaterloo.ca" />
    </center>
    <div className="description">
      Written by <strong>Mike Vu</strong>, a fullstack developer and Computer
      Science student at the University of Waterloo.
    </div>
  </div>
)

export default Sidebar
