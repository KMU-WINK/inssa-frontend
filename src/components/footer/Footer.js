import React from 'react'
import { useNavigate } from 'react-router-dom'
import box from '../../assets/footer/box.svg'
// import upload from '../from../assets/footer/upload.svg'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 430px;
  height: 80px;
  background-color: #2d2d2d;
  justify-content: center;
  gap: 125px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  cursor: pointer;
`

const Footer = () => {
  const navigate = useNavigate()
  const handleMypage = () => {
    navigate('/my-page')
  }
  return (
    <Container>
      <LogoContainer onClick={handleMypage}>
        <img src={box} alt={'box'} />
        보관함
      </LogoContainer>

      {/*<LogoContainer onClick={handleMypage}>*/}
      {/*  <img src={upload} alt={'upload'} />*/}
      {/*  등록*/}
      {/*</LogoContainer>*/}
    </Container>
  )
}

export default Footer
