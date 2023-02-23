// Composant login 
import './MainPage'
import { useState } from 'react';
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/select2/select2.min.css'
import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './css/util.css'
import './css/main.css'
import img01 from './img01.png';
import logo from './logo.png';

function Login(props){
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function getLogin(event){
      setLogin(event.target.value)
  }
  function getPassword(event){
    setPassword(event.target.value)
}

    return (
      <body>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic data-tilt" data-tilt>
                <img src={img01} alt="IMG"/>
              </div>
      
              <form method="POST" action="" className="login100-form validate-form">
                <div className="login100-logo js-tilt" data-tilt>
                  <img src={logo} alt="IMG"/>
                </div>
                <span className="login100-form-title">
                  BIRDY
                </span>
      
                <div className="wrap-input100 validate-input" data-validate = "Format de mail invalide">
                  <input id="login" onChange={getLogin} className="input100" type="text" name="email" placeholder="Email"/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
      
                <div className="wrap-input100 validate-input" data-validate = "Mot de passe obligatoire">
                  <input id="mdp" onChange={getPassword} className="input100" type="password" name="pass" placeholder="Mot de passe"/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
                
                <div className="container-login100-form-btn">
                  <button type="submit" className="login100-form-btn">
                    Connexion
                  </button>
                </div>
      
                <div className="text-center p-t-12">
                  <span className="txt1">
                    Vous avez oublié votre
                  </span>
                  <a className="txt2" href="#">
                    Mot de passe?
                  </a>
                </div>
      
                <div className="text-center p-t-136">
                  <a className="txt2" href="inscription.html">
                    Créer un compte
                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div> 
      </body>
      );
}
export default Login