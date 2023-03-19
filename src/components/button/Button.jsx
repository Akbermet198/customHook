import React from 'react'
import styled from 'styled-components'

export const Button = ({children, onClick}) => {

  return (
  <StyledButton    onClick={onClick}>{children}</StyledButton>
  )
}


const StyledButton = styled.button`
 padding: 7px 15px;
 background-color: gray;
 border:none;
 border-radius: 6px;
 color: white;
 margin: 5px;
 :hover {
    background: #4d4643;
    color: white;
  }
  :active {
    background: #993108;
  }
  cursor: pointer;
`