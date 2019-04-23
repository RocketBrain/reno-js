import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </StyledHeader>
)

const StyledHeader = styled.header`
  height: 50px;
  padding: 50px;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
