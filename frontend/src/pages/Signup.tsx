
import Form from "../component/Form";
import {Quote} from "../component/Quote" 
const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-1: lg:grid-cols-2  ">
      <div className="flex justify-center my-20 ">
        <Form type="signup"/>
        </div>
        <div className="hiddden lg:block">
        <Quote/>
        </div>
       
      </div>
    </div>
  )
}

export default Signup
