import React from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import './Login.scss'

 function Login() {
     let user = '';
     let pass = '';
     const history = useHistory();
    const handleUsernameChange = (event) => {
            user = event.target.value
    }
    const handlePasswordChange = (event) => {
            pass = event.target.value
}
    const submit = () => {
        if ((user == 'John') && (pass == '12345')) {
             history.push("/column-chart");
        }else if ((user == 'MICKY') && (pass == '98765')) {
            history.push("/pie-chart");
         }else if ((user == '') && (pass == '')) {
             alert('Fields are empty');
         }else if (!(user == '') && (pass == '')) {
            alert('Password is empty');
        }else if ((user == '') && !(pass == '')) {
            alert('Username is empty');
        }
         else {
             alert('Enter correct credentials')
         }
    }
    return (
        <div className="main-container">
            <div id="breaking-news-container">
                <div id="breaking-news-colour" className="slideup animated">            
                </div>  
            <span className="breaking-news-title delay-animated slidein">
                // credentials //
                </span> 
                <a className="breaking-news-headline delay-animated2 fadein marquee">
                John:12345 / MICKY:98765
                </a>  
            </div>  
        <div className="card-wrap">
            <div>
                <FontAwesomeIcon className="mr-2" icon={faUser} />
                <input type="text" placeholder="username"  onChange={handleUsernameChange}/>
            </div>
            <div>
                <FontAwesomeIcon className="mr-2" icon={faLock} />
                <input type="text" placeholder="password" onChange={handlePasswordChange}/>
            </div>
                <button type="button" className="btn btn-dark btn-submit" type="submit" onClick={submit}>Login</button>
            </div>
         </div>
    )
}
export default Login;