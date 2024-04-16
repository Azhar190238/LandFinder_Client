import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";


import { ToastContainer, toast } from 'react-toastify';
import UseTitle from "../Title/UseTitle";

const Login = () => {
   UseTitle("Login");
    const location = useLocation()
    const naviGate = useNavigate()

    const { signIn, googleSignIn, gitHubSignIn } = useContext(authContext)
    const handleSignIn = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result)
                naviGate(location?.state ? location.state : '/')
                toast('Login Successfully')
               
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handlesSignInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                naviGate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handlesSignInWithGitHub = () => {
        gitHubSignIn()
            .then(result => {
                console.log(result)
                naviGate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Login Your Account</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-center"> or</p>
                            </div>
                            <div className=" flex">
                                <p>
                                    <button onClick={handlesSignInWithGoogle} className="btn btn-outline ml-4 btn-success">Google</button>
                                </p>
                                <p>
                                    <button onClick={handlesSignInWithGitHub} className="btn btn-outline ml-4 btn-success">gitHub</button>
                                </p>
                            </div>
                            <div>
                                <p>New Here ? please <Link to='/register'>
                                    <button className="btn btn-outline btn-success">Register</button>
                                </Link> </p>

                            </div>
                        </form>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Login;