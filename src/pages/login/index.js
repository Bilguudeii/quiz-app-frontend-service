import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    const res = await axios.post("https://quiz-app-backend-service-p5cz.onrender.com/login", {
      email: email,
      password: password,
    });
    console.log(res);
    if (res.status === 200) {
      localStorage.setItem("user", true);
      localStorage.setItem("userId",JSON.stringify(res.data._id))
    }
    router.push("/");
  };

  // const Login = (req , res) => {
  //     const router = useRouter()
  //     const [email, setEmail] = useState('')
  //     const [password, setPassword] = useState('')
  //     const [response , setResponse] = useState()
  //     const loginUser = (email,password) => {
  //         res = axios.post('http://localhost:8080/', {
  //             email: email,
  //             password: password
  //         });
  //         setResponse(res)
  //     }
  //     const changeRoute =  () => {
  //         router.push('/signup')
  //     }

  //     if(response){
  //         console.log(response)
  //     }

  return (
    <section>
      {[...Array(100)].map((_, index) => (
        <span key={index}></span>
      ))}
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>

          <div className="form">
            <div className="inputBox">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i>Email</i>
            </div>

            <div className="inputBox">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i>Password</i>
            </div>

            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="/signup">Sign up</a>
            </div>

            <div className="inputBox">
              <button
                className="LoginBTN"
                type="submit"
                value="Login"
                onClick={() => loginUser(email, password)}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
