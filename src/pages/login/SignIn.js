import React, { useState } from 'react'
import logo from '../../assets/logo/logo.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/SignButton'
import Input from '../../components/input/Input'
import * as style from '../../components/signin/SignInStyle'

export default function SignIn() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  const handleSignInClick = () => {
    navigate('/my-page')
  }

  return (
    <div className='container'>
      <style.LogoContainer>
        <img src={logo} alt={'logo'} />
        요즘 핫한 인생네컷 사진첩
      </style.LogoContainer>
      <style.InformationContainer>
        <Input
          label='아이디'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label='비밀번호'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </style.InformationContainer>
      <Button onClick={handleSignInClick}>로그인</Button>
      <style.SignUpLink onClick={handleSignUpClick}>회원가입</style.SignUpLink>
    </div>
  )
}
