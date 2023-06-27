import Header from "./components/Auth/Header";
import Signup from "./components/Auth/SignUp";

export default function SignupPage(){
    return(
        <div className="w-full flex justify-center">
            <div className=' w-fit flex align-middle flex-col '>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </div>
        </div>
    )
}