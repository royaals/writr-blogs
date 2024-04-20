import { SignupInput } from "writr-common"
import { Link,useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { FaEye as Eye, FaEyeSlash as EyeSlash } from 'react-icons/fa';
import axios from "axios";
import { BACKEND_URL } from "../config"
const Form = ({type}: {type: "signup" | "signin"}) => {
  const navigate=useNavigate();
    const [postInputs,setPostInputs]=useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function sendRequest() {
      try {
          const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        
          const jwt = response.data.jwt;  
          
          localStorage.setItem("token", jwt);
          navigate("/blogs");
      } catch(e) {
          console.error('Error:', e);  
          alert("Error while signing up")
      }
  }
    
  return (
    <div className=" bg-card text-card-foreground shadow-sm" data-v0-t="card">
    <div className="flex flex-col p-6 space-y-2">
     {type=== "signup"? <h3 className="whitespace-nowrap font-bold text-3xl">Sign Up</h3> : <h3 className="whitespace-nowrap font-bold text-3xl">Sign in</h3>}
    {type==="signup"? <p className="text-2xl text-slate-500 text-muted-foreground">Get started with an account on Writr.</p>: <p className="text-2xl text-slate-500 text-muted-foreground">Welcome back!</p>}
    </div>
    <div className="p-6 space-y-4">
   
        <div className="space-y-2 mb-5">
        {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}
          
        </div>
       
     
      <div className="space-y-2 mb-5">
       
        <LabelledInput label="Email" placeholder="Enter your email" onChange={(e) => setPostInputs({...postInputs, email: e.target.value})} />
      </div>
      <div className="space-y-2 ">
      
    {type==="signup" ?   <LabelledInput label="Password" placeholder="Create a password" onChange={(e) => setPostInputs({...postInputs, password: e.target.value})} type="password" /> : <LabelledInput label="Password" placeholder="Enter your password" onChange={(e) => setPostInputs({...postInputs, password: e.target.value})} type="password" />}  
      </div>
       <button onClick={sendRequest}
        className="inline-flex items-center mb-5  bg-black text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
        type="submit"
      >{type==="signup" ? "Get started" : "Sign in"}
       
      </button>
    </div>
    <div className="flex justify-center">
      
      <div >or</div>
    
     
     </div>

    <div className="flex items-center p-6">
    {type==="signup" ?   <button className="inline-flex items-center justify-center whitespace-nowrap mr-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      Sign up with Google
    </button> 
    :<button className="inline-flex items-center justify-center whitespace-nowrap mr-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      Sign in with Google
    </button>}
    {type==="signup" ?   <button className="inline-flex items-center justify-center whitespace-nowrap mr-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      Sign up with Facebook
    </button> 
    :<button className="inline-flex items-center justify-center whitespace-nowrap mr-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      Sign in with Facebook
    </button>}
    {type==="signup" ?   <button className="inline-flex items-center justify-center whitespace-nowrap mr-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      Sign up with GitHub
    </button> 
    :<button className="inline-flex items-center justify-center whitespace-nowrap mr-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      Sign in with GitHub
    </button>}
    
    </div>
    
    <div className="mt-4 mb-4 text-center text-sm">
      
     {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
    </div>
  
  </div>
  )
}
interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
    return  <div style={{ position: 'relative' }}>
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>
    <input onChange={onChange} type={inputType} id="first_name" className="flex h-10 w-full mb-5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder={placeholder} required />
    {type === 'password' && (
        <button onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '20px', top: '70%', transform: 'translateY(-50%)' }}>
            {showPassword ? <EyeSlash /> : <Eye />}
        </button>
    )}
</div>
}

export default Form