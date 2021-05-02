import logo from '../assets/images/logo.png';
import fb from '../assets/images/fbIcon.png';
import instagram from '../assets/images/instaIcon.png';

import SocialButton from './SocialButton';
import Form from './Form';

const App = () => (
  <main>
    <img src={logo} alt="Logo"/>
    <div className="wrapper">
      <div className="registration">
        <h2>Zarejestruj się jako trener</h2>
        <SocialButton src={fb} alt="Facebook icon" text="Facebook"/>
        <SocialButton src={instagram} alt="Instagram icon" text="Instagram"/>
        <div className="divider">
          <div className="line"></div>
          <span>Lub za pomocą email</span>
          <div className="line"></div>
        </div>
        <Form />
        <div className="footer"> Masz już konto? <a className="special" href="#">Zaloguj się</a></div>
      </div>
      <div className="main-image">Image</div>
    </div>
  </main>
)

export default App;
