import "./login.css"
import { useContext,useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { AuthContext } from "./Context/AuthContext";



const Login = () => {
  const[email,setEmail] = useState("")
  const[error,setError] = useState(false)
  const[password,setPassword] = useState("")

  const navigate= useNavigate()
  
  const {dispatch}= useContext(AuthContext) // pindahin dri authcontext

  const handleLogin =(e)=>{
    e.preventDefault();


   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN",payload:user}) // bikin untuk masuk login
    navigate("/home")
    // ...
  })
  .catch((error) => {
    setError(true);
    // ..
  });

  }

  return (
    <div className="login">
      <div className="loginContainer">
      <form onSubmit={handleLogin} >
      <h1 className="login-h1">Login</h1>
        <input className="login-input" type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
        <input className="login-input" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <Link className="login-link" to={"/"}>Back To Home Page</Link>
        {error && <span>Wrong email or passowrd</span>}
      </form>
      </div>
    </div>
  )
}

export default Login