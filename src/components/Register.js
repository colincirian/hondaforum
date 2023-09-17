// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Register.css';
// import { supabase } from '../config/SupabaseClient';
// import { Link } from 'react-router-dom'; // Import Link

// async function registerClient() {

//   const { client } = auth.currentClient; // Get the authenticated user
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   // try {
//   //   // Create a new client record
//   //   const { data, error } = await supabase
//   //     .from('clients')
//   //     .select('*')
//   //     .upsert([
//   //       {
//   //         user_id: user.id, // Link to the user
//   //         name: "Client Name",
//   //         email: "Client@gmail.com",
//   //       },
//   //     ], { onConflict: ['email'] });

//   //     if (error) {
//   //       // Display an error message to the user 
//   //       console.error('Error registering client:', error.message);
//   //     } else {
//   //       // Registration for the client was successful
//   //       console.log('Client registration successful:', data);
//   //       history.push("/login");
//   //     }
//   // } catch (e) {
//   //   console.error('An unexcepected error occurred:', e);
//   // }

//   // const handleRegistration = async () => {
//   //   try {
//   //     // Step 1: Create a user account using Supabase authentication
//   //     const { user, error } = await supabase.auth.signUp({ email: username, password });

//   //     if (error) {
//   //       console.error('Registration failed:', error.message);
//   //       // Handle registration error (e.g., display an error message)
//   //     } else {
//   //       // Registration successful, user is now created
//   //       console.log('User registered:', user);

//   //       // Step 2: Navigate to another page (login) for additional user setup
//   //       history.push('/login');
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     // Handle unexpected errors
//   //   }
//   // };

//   return (
//     <div className="registration-container">
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
//   );
// }

// export default registerClient;
