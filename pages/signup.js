// import LiveBase from "../layouts/LiveBase";
// import config from "./../config/config.json";
// import Player from "../layouts/components/LiveVideo/Player";
import Base from "../layouts/Baseof";
import SignupPage from "../layouts/Signup";

const Signup = () => { 
    // const { title } = config.site;
    return (
        <Base title="Login - EABC">
            <section className="section pt-0">
                <div className="container">
                    <SignupPage />
                </div>
            </section>
        </Base>
    )
 }

export default Signup;