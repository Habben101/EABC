import Header from "./components/Auth/Header"
import Login from "./components/Auth/Login"

export default function LoginPage() {
    return (
        <div className="w-full flex justify-center">
            <div className=' w-fit flex align-middle flex-col '>

                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                <Login />
            </div>
        </div>
    )
}