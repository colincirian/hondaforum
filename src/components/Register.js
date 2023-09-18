import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Register.css";
import { supabase } from "../config/SupabaseClient";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSomeIcon, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/;

function Register() {

  const userRef = useRef();
  const errRef = useRef();

  // Validate username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // Validate password
  const [pass, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // Validate that the passwords match
  const [matchPass, setMatchPass] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // Display either an error message or successful message
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PASS_REGEX.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result);
    const match = pass === matchPass;
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pass, matchPass])

  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" :
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 - 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>
        </form>
    </section>
  )
}

export default Register;

//   const { client } = auth.currentClient; // Get the authenticated user
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   try {
//     // Create a new client record
//     const { data, error } = await supabase
//       .from('clients')
//       .select('*')
//       .upsert([
//         {
//           user_id: user.id, // Link to the user
//           name: "Client Name",
//           email: "Client@gmail.com",
//         },
//       ], { onConflict: ['email'] });

//       if (error) {
//         // Display an error message to the user
//         console.error('Error registering client:', error.message);
//       } else {
//         // Registration for the client was successful
//         console.log('Client registration successful:', data);
//         history.push("/login");
//       }
//   } catch (e) {
//     console.error('An unexcepected error occurred:', e);
//   }

//   const handleRegistration = async () => {
//     try {
//       // Step 1: Create a user account using Supabase authentication
//       const { user, error } = await supabase.auth.signUp({ email: username, password });

//       if (error) {
//         console.error('Registration failed:', error.message);
//         // Handle registration error (e.g., display an error message)
//       } else {
//         // Registration successful, user is now created
//         console.log('User registered:', user);

//         // Step 2: Navigate to another page (login) for additional user setup
//         history.push('/login');
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle unexpected errors
//     }
//   };

//  <div className="registration-container">
//       <h2>Register</h2>
//       <form className="registration-form">
//         <input
//           type="text"
//           placeholder="Username"
//           value={client}
//           onChange={(e) => setUsername(e.target.value)}
//           className="input-field"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input-field"
//         />
//         <button onClick={registerClient} className="register-button">
//           Register
//         </button>

//         {/* Back to Login Link */}
//         <Link to="/login" className="back-to-login-button">
//           Back to Login
//         </Link>
//       </form>
//     </div>

