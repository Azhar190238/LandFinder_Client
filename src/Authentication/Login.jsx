

// import  { useState, useContext } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { authContext } from "../Providers/AuthProvider";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';
// import UseTitle from "../Title/UseTitle";

// const Login = () => {
//     // Set the title of the page
//     UseTitle("Login");

//     // Initialize necessary hooks and context
//     const location = useLocation();
//     const naviGate = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);
//     const { signIn, googleSignIn, gitHubSignIn } = useContext(authContext);

//     // Function to handle form submission for regular login
//     const handleSignIn = async (e) => {
//         e.preventDefault();

//         const form = new FormData(e.currentTarget);
//         const email = form.get('email');
//         const password = form.get('password');

//         try {
//             // Attempt to sign in
//             await signIn(email, password);
//             naviGate(location?.state ? location.state : '/');
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Login successful!',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         } catch (error) {
//             console.error(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Login failed',
//                 text: 'Please check your credentials and try again.'
//             });
//         }
//     }

//     // Function to handle sign in with Google
//     const handlesSignInWithGoogle = () => {
//         googleSignIn()
//             .then(result => {
//                 console.log(result);
//                 naviGate(location?.state ? location.state : '/');
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login successful!',
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//             .catch(error => {
//                 console.error(error);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Login failed',
//                     text: 'Please try again later.'
//                 });
//             });
//     }

//     // Function to handle sign in with GitHub
//     const handlesSignInWithGitHub = () => {
//         gitHubSignIn()
//             .then(result => {
//                 console.log(result);
//                 naviGate(location?.state ? location.state : '/');
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login successful!',
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             })
//             .catch(error => {
//                 console.error(error);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Login failed',
//                     text: 'Please try again later.'
//                 });
//             });
//     }

//     // JSX for the login form
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col ">
//                     <div className="text-center ">
//                         <h1 className="text-3xl font-bold">Login Your Account</h1>
//                     </div>
//                     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleSignIn} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <div className="flex">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         name="password" placeholder="Password" className="input border-slate-300 pr-16" required />
//                                     <span onClick={() => setShowPassword(!showPassword)} className="mt-4 -ml-5">
//                                         {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
//                                     </span>
//                                 </div>
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-primary">Login</button>
//                             </div>
//                             <div>
//                                 <p className="text-center"> or</p>
//                             </div>
//                             <div className=" flex">
//                                 <p>
//                                     <button onClick={handlesSignInWithGoogle} className="btn btn-outline ml-4 btn-success">Google</button>
//                                 </p>
//                                 <p>
//                                     <button onClick={handlesSignInWithGitHub} className="btn btn-outline ml-4 btn-success">GitHub</button>
//                                 </p>
//                             </div>
//                             <div>
//                                 <p>New Here ? please <Link to='/register'>
//                                     <button className="btn btn-outline btn-success">Register</button>
//                                 </Link> </p>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;





import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import UseTitle from "../Title/UseTitle";
import { useForm } from "react-hook-form";

const Login = () => {
    // Set the title of the page
    UseTitle("Login");

    // Initialize necessary hooks and context
    const { signIn, googleSignIn, gitHubSignIn } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    // Function to handle form submission for regular login
    const onSubmit = async (data) => {
        try {
            // Attempt to sign in
            await signIn(data.email, data.password);
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(location?.state?.from || '/'); // Redirect to the previous location or home
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Please check your credentials and try again.'
            });
        }
    }

    // Function to handle sign in with Google
    const handlesSignInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state?.from || '/'); // Redirect to the previous location or home
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Please try again later.'
                });
            });
    }

    // Function to handle sign in with GitHub
    const handlesSignInWithGitHub = () => {
        gitHubSignIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state?.from || '/'); // Redirect to the previous location or home
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Please try again later.'
                });
            });
    }

    // JSX for the login form
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Login Your Account</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="input border-slate-300 pr-16"
                                        {...register("password", { required: true })}
                                    />
                                    <span onClick={() => setShowPassword(!showPassword)} className="mt-4 -ml-5">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-center"> or</p>
                            </div>
                            <div className="flex">
                                <p>
                                    <button onClick={handlesSignInWithGoogle} className="btn btn-outline ml-4 btn-success">Google</button>
                                </p>
                                <p>
                                    <button onClick={handlesSignInWithGitHub} className="btn btn-outline ml-4 btn-success">GitHub</button>
                                </p>
                            </div>
                            <div>
                                <p>New Here ? please <Link to='/register'>
                                    <button className="btn btn-outline btn-success">Register</button>
                                </Link> </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;




