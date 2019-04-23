import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

import ResetStyle from 'components/ResetStyle'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Content from 'components/Content'

/*
 Layout component that queries for data
 with Gatsby's StaticQuery component
 See: https://www.gatsbyjs.org/docs/static-query/
*/

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Fragment>
        <ResetStyle />

        <StyledLayoutRoot className="styled-layout-root">
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'life, javascript' },
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>{children}</Content>
          <Footer />
        </StyledLayoutRoot>
      </Fragment>
    )}
  />
)

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
