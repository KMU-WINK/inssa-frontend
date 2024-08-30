import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 260px;
  height: 50px;
  border-radius: 26px;
  background-color: #fdd329;
  cursor: pointer;
  margin: 35px 0 10px 0;
  border: none;
`

const SignButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default SignButton
