import React from 'react'
import Link from 'gatsby-link'

import '../../styles/header.css'

const Header = () => (
  <div className="background">
    <div className="border">
      <h1 className="title-text">
        <Link to="/" className="link-text">
          Mike's Tech Blog
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
