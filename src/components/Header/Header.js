import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import ToggleMenu from 'components/ToggleMenu'

type Props = {
  siteTitle: string
}

const Header = (props: Props) => (
  <StyledHeader className="header-component">
    <h1>
      <Link to="/">{props.siteTitle}</Link>
    </h1>
    <ToggleMenu onClick={() => {
      console.log('Toggle menu clicked')
    }}/>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background: black;
  height: 70px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid  #e5e5e5; */
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    flex: 1;

    a {
      color: white;
      font-size: 2rem;
      font-weight: 100;
    }
  }
`

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
