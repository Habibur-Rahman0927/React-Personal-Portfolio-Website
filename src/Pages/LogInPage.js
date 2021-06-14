import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';
import facebookImage from '../img/Group 2.png';
import googleImage from '../img/Group 573.png';
import '../Styles/Login.css';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const LogInPage = () => {
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
        password: '',
        success: false
    });

    const [ setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser)
                history.replace(from)

            }).catch((error) => {
            });
    }

    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                var { displayName, email ,photoURL} = result.user;
                const signedInUser = { name: displayName, email, photo: photoURL}
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
            });
    }

    const handleCreateUser = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValue = event.target.value.length > 6;
            const passwordHasNumber = /\d/.test(event.target.value);
            isFieldValid = isPasswordValue && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault()
    }


    return (
        <div className="container">


            <form action="" className="form-style" onSubmit={handleSubmit}>
                <h4><b>{newUser ? 'Create an acount' : 'Log In'}</b></h4>
                <div className="form-group ">
                    {newUser && <input type="text" name="name" onBlur={handleCreateUser} class="form-control all-margin" placeholder="Enter your name" required />}
                </div>
                <div className="form-group ">
                    <input type="email" name="email" onBlur={handleCreateUser} class="form-control all-margin" placeholder="Enter your email" required />
                </div>
                <div className="form-group ">
                    <input type="password" name="password" onBlur={handleCreateUser} class="form-control all-margin" placeholder="Enter your password" required />
                </div>

                {newUser ? '' : <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="checkbox" style={{ margin: "3px" }} name="remember" id="" />
                            <label htmlFor="remember"><small>Remember me</small></label>
                        </div>
                        <div className="col-md-6">
                            <button type="button" className="toggleBtn" style={{ float: 'right', marginTop: '-3px' }}><small className="borderBottom">Forgot PassWord</small></button>
                        </div>
                    </div>
                </div>}

                <div className="button-center">
                    <button type="submit" className="buttonstyle">{newUser ? "Create an acount" : "Log In"}</button>
                </div>
                <div className="toggleBtnStyling">
                    <p className="btnParagraph"><small>{newUser ? 'You have an acount ' : "Don't have an acount? "}</small></p>
                    <button type="button" onClick={() => setNewUser(!newUser)} className="toggleBtn"><small className="borderBottom">{newUser ? ' LogIn' : ' Create an acount'}</small></button>
                </div>
            </form>
            <div className="linestyle">
                <div className="line"></div>
                <p className="orstyle">or</p>
                <div className="line"></div>
            </div>

            <div className="row">
                <button onClick={handleGoogleSignIn} className="BtnStyle"><img src={googleImage} alt="" />Continue with Google</button>
            </div>
            <div className="row">
                <button onClick={handleFacebookSignIn} className="BtnStyle"><img src={facebookImage} alt="" />Continue with Facebook</button>
            </div>


        </div>
    );
};

export default LogInPage;