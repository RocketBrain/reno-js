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
  align-self: center;
  display: flex;
  flex: 1;
  max-width: 1080px;
`
