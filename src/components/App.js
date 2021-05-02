import logo from '../assets/images/logo.png';
import fb from '../assets/images/fbIcon.png';
import instagram from '../assets/images/instaIcon.png';
import gym from '../assets/images/gym.jpg'

import styled, { createGlobalStyle } from 'styled-components';

import SocialButton from './SocialButton';
import Form from './Form';

const App = () => (
  <>
  <GlobalStyle />
  <Body>
    <Main>
      <img src={logo} alt="Logo"/>
      <Wrapper>
        <Registration>
          <Title>Zarejestruj się jako trener</Title>
          <SocialButton src={fb} alt="Facebook icon" text="Facebook"/>
          <SocialButton src={instagram} alt="Instagram icon" text="Instagram"/>
          <Divider>
            <Line></Line>
            <span>Lub za pomocą email</span>
            <Line></Line>
          </Divider>
          <Form />
          <Footer> Masz już konto? <Special href="#">Zaloguj się</Special></Footer>
        </Registration>
        <MainImage></MainImage>
      </Wrapper>
    </Main>
  </Body>
  </>
)

export default App;

const Body = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
${Body} {
  font-family: system-ui;
  font-size: 10px;
  }
`

const Main =  styled.main`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  width: 50vw;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 50px;
  box-shadow: 0px 0px 7px rgba(100, 96, 106, 0.2);
`

const MainImage= styled.div`
  width: 50%;
  background-image: url(${gym});
  background-size: cover;
  background-position: center;
  border-radius: 0 20px 20px 0px;
`

const Registration = styled.div`
  width: 50%;
  padding-top: 50px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`

const Divider = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 20px;

    & span {
    font-weight: 500;
    }
`

const Line = styled.div`
    width: 32%;
    height: 1px;
    background-color: silver;
`

const Footer = styled.footer`
  margin-bottom: 30px;
`

const Special = styled.a`
      border-bottom: 2px solid #413fb5;
    text-decoration: none;
    color: black;
    font-weight: 600;
`