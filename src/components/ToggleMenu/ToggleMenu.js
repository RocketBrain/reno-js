import React, { useState } from 'react'
import styled from '@emotion/styled'

type Props = {
  onClick?: Function
}

const ToggleMenu = (props: Props) => {
  const { onClick } = props
  const [active, setActive] = useState(false)

  function handleClick () {
    if (onClick) onClick(!active)
    setActive(!active)
  }

  return (
    <SyledToggleMenu
      active={active}
      className="toggle-menu-component"
      onClick={handleClick}
    >
      <span />
      <span />
      <span />
    </SyledToggleMenu>
  )
}

const SyledToggleMenu = styled.a`
  cursor: pointer;
  display: block;
  height: 20px;
  position: relative;
  text-decoration: none;
  user-select: none;
  width: 25px;

  > span {
    user-select: none;
    background: white;
    cursor: pointer;
    height: 2px;
    position: absolute;
    top: 8px;
    transition: top .25s;
    width: 100%;

    &:first-of-type {
      top: ${({ active }) => active ? 8 : 0}px;;
    }

    &:last-of-type {
      top: ${({ active }) => active ? 8 : 16}px;
    }
  }
`

export default ToggleMenu
