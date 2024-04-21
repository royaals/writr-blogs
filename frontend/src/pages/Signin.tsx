
import Form from "../component/Form";
import {Quote} from "../component/Quote" 
const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-1: lg:grid-cols-2  ">
      <div className="flex justify-center my-20 ">
        <Form type="signin"/>
        </div>
        <div className="hiddden lg:block">
        <Quote/>
        </div>
       
      </div>
    </div>
  )
}

export default Signin