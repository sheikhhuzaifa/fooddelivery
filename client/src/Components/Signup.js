import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';
import './F_P.css';
const Signup = () => {
    const history=useNavigate();
    const [user,setUser]=useState({
     email:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>
    {
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const PostData = async (e) =>
    {
        e.preventDefault();
        const {email,password,cpassword}=user;
        const res =await fetch("/register",{
            method:"POST",
            headers:
            {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email,password,cpassword

            })
        });
        const data=await res.json();
        if(res.status===201&&data)
        {
            window.alert("valid");
            console.log("success");
            console.log(res.status)
            history("/FormPage");
        }
        else
        {
            console.log(res.status)
            window.alert("invalid");
            console.log("not success");
            
        }
        
    }
    return (
        <div className="login">

    <div className="row">
        <div className="rw col-md-offset-5 col-md-4 text-center">
            <h1 className='text-white'>SignUp Form</h1>
              <div className="form-login">
                <h4>SignUp</h4>
                
                <input type="email" name="email" id="userName" className="form-control input-sm chat-input" placeholder="Enter Email"
                value={user.email}
                onChange={handleInputs}
                />
                 
                <input type="text" name="password" id="userPassword" className="form-control input-sm chat-input" placeholder="password"
                value={user.password}
                onChange={handleInputs}
                />
                <input type="text" name="cpassword" id="confirmPassword" className="form-control input-sm chat-input" placeholder="confirm password"
                        value={user.cpassword}
                        onChange={handleInputs}
                />
                 <a id="s_u" href="FormPage">Login</a>
                <div className="wrapper">
                        <span className="group-btn" onClick={PostData}>
                            <a href="/FormPage" className="btn btn-danger btn-md">Register <i className="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Signup
