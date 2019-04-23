import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Footer = () => (
  <StyledFooter>Footer</StyledFooter>
)

const StyledFooter = styled.footer`
  height: 50px;
  padding: 50px;
  display: flex;
  flex-direction: row-reverse;
`

Footer.propTypes = {}

export default Footer
