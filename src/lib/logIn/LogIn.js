
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './firebase.config';
// import { UserContext } from '../../App';
const LogIn = () => {
	const [newUser, setNewUser] = useState(false);
	const { handleSubmit: handleSignIn, register: registerSignIn } = useForm()
	const { handleSubmit: handleSignUp, register: registerSignUp } = useForm()
	// const [loggedInUser, setLoggedInUser] = useContext(UserContext)
	const [user, setUser] = useState({})
	let firebaseApp;
	if (!getApps().length) {
		firebaseApp = initializeApp(firebaseConfig);
	} else {
		firebaseApp = getApp();
	}
	const handleResponse = (res) => {
		const { displayName, photoURL, email } = res.user;
		const signInUser = {
			isSignIn: true,
			name : displayName,
			email: email,
			photo: photoURL,
		}
		// setLoggedInUser(signInUser);
		setUser(signInUser);
	}
	const googleSign = () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((res) => {
				const user = res.user;
				console.log(res);
				handleResponse(res);

				// ...
			}).catch((error) => {
				const errorCode = error.code;
				console.log(errorCode)
				const errorMessage = error.message;
				console.log(errorMessage)
				handleResponse(errorMessage)
				const email = error.email;
				console.log(email);
			});
	}

	const onSubmit = data => {
		console.log(data);
		const {name, email, password} = data
		if (newUser && name && email && password) {
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, name, email, password)
				.then((res) => {
					// Signed in 
					handleResponse(res)
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
		}

		if (!newUser && email && password) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, email, password)
				.then((res) => {
					// Signed in 
					handleResponse(res)
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorMessage);
					// handleResponse(error
				});
		}

	}
	console.log(user.name);
	console.log(user.email);
	console.log(user.error);
	return (
		<>
			{/* <div >
				<p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque accusamus nulla tempora! Eos impedit qui est veritatis sapiente repellat labore suscipit! Ipsum in minima dolore labore voluptatem harum fugiat impedit.</p>
				<p style={{ color: 'black' }}> Welcome, {loggedInUser.name}</p>
				<p style={{ color: 'black' }}>Your email: {loggedInUser.email}</p>
				<img src={loggedInUser.photo} alt="" />
			</div> */}
			<div className={newUser ? "cont s--signup" : "cont"}>
				<div className="form sign-in">
					<h2>Welcome back,</h2>
					<form onSubmit={handleSignIn(onSubmit)}>

						<label>
							<span>Email</span>
							<input {...registerSignIn("email", { required: true })} type="email" />
						</label>
						<label>
							<span>Password</span>
							<input {...registerSignIn("password", { required: true })} type="password" />
						</label>
						<p className="forgot-pass">Forgot password?</p>
						<input type="submit" className="submit" value="Sign In" />
						<button type="button" onClick={googleSign} className="fb-btn">Connect with <span>Google Sign In</span></button>
					</form>
				</div>
				<div className="sub-cont">
					<div className="img">
						<div className="img__text m--up">
							<h2>New here?</h2>
							<p>Sign up and discover great amount of new opportunities!</p>
						</div>
						<div className="img__text m--in">
							<h2>One of us?</h2>
							<p>If you already has an account, just sign in. We've missed you!</p>
						</div>
						<div onClick={() => setNewUser(!newUser)} className="img__btn">
							<span className="m--up">Sign Up</span>
							<span className="m--in">Sign In</span>
						</div>
					</div>
					<div className="form sign-up">
						<h2>Time to feel like home,</h2>
						<form onSubmit={handleSignUp(onSubmit)}>
							<label>
								<span>Your Name</span>
								<input {...registerSignUp("name", { required: true })} type="Your Name" />
							</label>
							<label>
								<span>Email</span>
								<input {...registerSignUp("email", { required: true })} type="email" />
							</label>
							<label>
								<span>Password</span>
								<input {...registerSignUp("password", { required: true })} type="password" />
							</label>
							<input type="submit" className="submit" value="Sign Up" />
							<button type="button" onClick={googleSign} className="fb-btn">Join with <span>Google Sign</span></button>
						</form>
					</div>
				</div>
			</div>
			<div>

			</div>
		</>
	);
};

export default LogIn;