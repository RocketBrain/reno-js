import React from 'react'
import styled from '@emotion/styled'

const Footer = () => (
  <StyledFooter>&copy; 2019</StyledFooter>
)

const StyledFooter = styled.footer`
  height: 50px;
  padding: 50px;
  display: flex;
  flex-direction: row-reverse;
`

export default Footer
