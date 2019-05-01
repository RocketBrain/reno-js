import React from 'react'
import styled from '@emotion/styled'

type Props = {
  children?: React.Node
}

const Content = (props: Props) => (
  <StyledContent>
    {props.children}
  </StyledContent>
)

export default Content

const StyledContent = styled.main`
  flex: 1;
  max-width: 1080px;
  margin-left: 50px;
  margin-right: 50px;
`
