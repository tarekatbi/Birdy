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
import Login from './Login';

function Signin (props) {

const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [passOK, setPassOK] = useState(false);
const [pass1, setPass1] = useState("");
const [pass2, setPass2] = useState("");
const getLogin = (evt) => {setLogin(evt.target.value)};
const getFirstName = (evt) => {setFirstName(evt.target.value)};
const getLastName = (evt) => {setLastName(evt.target.value)};
const getPass1 = (evt) => {setPass1(evt.target.value)};
const getPass2 = (evt) => {setPass2(evt.target.value)};
const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Soumettre le formulaire
  };
const passwordsMatch = () => {
    return pass1 === pass2;
  };

return (
<body>
	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic-insc js-tilt" data-tilt>
                    <img src={img01} alt="IMG"/>
				</div>

				<form method="POST" onSubmit={handleSubmit} className="login100-form validate-form">
					<div className="login100-logo js-tilt" data-tilt>
                        <img src={logo} alt="IMG"/>
					</div>
					<span className="login100-form-title">
						BIRDY
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Format de mail invalide">
						<input id="lastname" onChange={getLastName} className="input100" type="text" name="nom" placeholder="Nom"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-address-card" aria-hidden="true"></i>
						</span>
					</div>

                    <div className="wrap-input100 validate-input" data-validate = "Format de mail invalide">
						<input id="firstname" onChange={getFirstName} className="input100" type="text" name="prenom" placeholder="Prénom"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-address-card" aria-hidden="true"></i>
						</span>
					</div>

                    <div className="wrap-input100 validate-input" data-validate = "Format de mail invalide">
						<input id="signin_login" onChange={getLogin} className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

                    <div className="wrap-input100 validate-input" data-validate = "Mot de passe obligatoire">
						<input id="signin_mdp1" onChange={getPass1} className="input100" type="password" name="pass" placeholder="Mot de passe"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Mot de passe obligatoire">
						<input id="signin_mdp2" onChange={getPass2} className="input100" type="password" name="pass" placeholder="Répeter Mot de passe"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
                    {passwordsMatch() ? null : <div style={{ color: 'red' }}>Les mots de passe ne correspondent pas</div>}
					
					<div className="container-login100-form-btn">
						<button type="submit" disabled={!passwordsMatch()} className="login100-form-btn">
							Inscription
						</button>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="Login">
							Connexion
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
    
export default Signin;