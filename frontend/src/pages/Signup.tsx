
import Form from "../component/Form";
import {Quote} from "../component/Quote" 
const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="invisible lg:visible">
        <Quote/>
        </div>
        <div className="flex justify-center my-20 ">
        <Form/>
        </div>
      </div>
    </div>
  )
}

export default Signup
