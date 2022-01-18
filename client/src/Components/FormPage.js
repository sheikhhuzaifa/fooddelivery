import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './F_P.css'

const FormPage = () => {
    const history=useNavigate();
   
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const loginUser = async (e) =>
    {
        e.preventDefault();
       
        const res =await fetch("/signin",{
            method:"POST",
            headers:
            {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email,password

            })
        });
        const data=await res.json();
        console.log(res.status)
        if(res.status===200&&data)
        {
            window.alert("valid");
            console.log("success");
            history("/");
            
        }
        else
        {
            window.alert("invalid");
            console.log("not success");
        }
        
    }
return (
    

<div className="login">

    <div className="row">
        <div className="rw col-md-offset-5 col-md-4 text-center">
            <h1 className='text-white'>Login Form</h1>
              <div className="form-login">
                <h4>Secure Login</h4>
                
                <input type="email" name="email" id="userName" className="form-control input-sm chat-input" placeholder="username"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                
                <input type="text" name="password" id="userPassword" className="form-control input-sm chat-input" placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                 <a id="s_u" href="Signup">signup</a>
                 <a id="f_p" href="    ForgetPassword">ForgetPassword</a>
                <div className="wrapper">
                        <span className="group-btn" onClick={loginUser}>
                               <a href="/" className="btn btn-danger btn-md">login <i className="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
</div>

);
};

export default FormPage;