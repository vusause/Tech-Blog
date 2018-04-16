import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Border from '../components/Border'
import Header from '../components/Header'
import Sidebar from '../components/Side-bar'

import '../styles/index.css'
import '../styles/layout-override.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mike's Tech Blog"
      meta={[
        { name: 'description', content: 'A Tech Blog' },
        { name: 'keywords', content: 'Tech, Blog' },
      ]}
    />
    <Header />
    <Border />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 1200,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px',
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 1200,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px',
              }}
            >
              <div style={{ flex: 2.5, paddingRight: '30px' }}>
                {children()}
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
