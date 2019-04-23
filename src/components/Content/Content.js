import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
const Content = ({ children }) => (
  <StyledContent>
    {children}
  </StyledContent>
)

Content.propTypes = {}

export default Content

const StyledContent = styled.main`
  flex: 1;
  max-width: 1080px;
  margin-left: 50px;
  margin-right: 50px;
`
