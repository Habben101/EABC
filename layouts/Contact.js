import config from "./../config/config.json";
import { markdownify } from "./../lib/utils/textConverter";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import social from "./../config/social.json";
import Social from "./components/Social";
import { LineWidthWhenVisible } from "./components/Animations/animations";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <>
      <section className="section darkBlueWithGradient">
        <div className="container">
          <div className="flex flex-col justify-center content-center p-16 ">
            <p className="text-center Crimson text-sm">GOT A QUESTION?</p>
            {markdownify(title, "h3", "text-center font-bold text-white py-4")}
            <p className="text-center text-white">We’re here to help and answer any question you might have. <br/> We look forward to hearing from you.</p>
          </div>
        </div>
      </section>
      <section className="section bg-theme-light pt-1 px-8">
        <div className="form-container container">
          <div className="w-layout-grid form-grid">
            <div className="form-left-div">
              <div>
                <h2 className="h2-small text-white">Contact Information</h2>
                <LineWidthWhenVisible delay={0.6} lineWidth="150px" margintop="24px"></LineWidthWhenVisible>
                <div className="contact-box-container">
                  <div className="contact-box">
                    <CiLocationOn />
                    <p className="ml-2">Address Placeholder</p>
                  </div>
                  <div className="contact-box">
                    <LuPhone />
                    <p className="ml-2">+1-000-0000</p>
                  </div>
                  <div className="contact-box">
                    <MdOutlineEmail />
                    <Link href="mail:gedion@eabc.us" className="ml-2">gedion@eabc</Link>
                  </div>
                </div>
              </div>
              <div className="social-div">
                <Social source={social} className="social-icons mb-8 flex justify-center" color="#df0303" />
              </div>
              <div className="circle-2"></div>
              <div className="circle-3"></div>
            </div>
            <div className="form-card p-16 ">
              <div className="form-body">
                <div className="form-block w-form">
                  <form
                  className="contact-form"
                  method="POST"
                  action={contact_form_action}
                >
                  <div className="mb-3 form-row">
                    <label htmlFor="name" className="field-label">Your name</label>
                    <input
                      className="form-input w-full rounded"
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3 form-row">
                    <label htmlFor="email" className="field-label">Your email</label>
                    <input
                      className="form-input w-full rounded"
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="mb-3 form-row">
                    <label htmlFor="subject" className="field-label">Subject</label>
                    <input
                      className="form-input w-full rounded"
                      name="subject"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3 form-row">
                    <label htmlFor="message" className="field-label">Your Message</label>
                    <textarea
                      className="form-textarea w-full rounded-md"
                      id="message"
                      rows="7"
                      placeholder="Your message"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Now
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="section row pb-0">
            <div className="col-12 md:col-6 lg:col-7">
              <form
                className="contact-form"
                method="POST"
                action={contact_form_action}
              >
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-textarea w-full rounded-md"
                    rows="7"
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Now
                </button>
              </form>
            </div>
            <div className="content col-12 md:col-6 lg:col-5 shadow-[0 4px 11px -5px rgba(0,0,0,.4)] p-8 bg-white">
              {markdownify(info.title, "h4")}
              {markdownify(info.description, "p", "mt-4")}
              <ul className="contact-list mt-5">
                {info.contacts.map((contact, index) => (
                  <li key={index}>
                    {markdownify(contact, "strong", "text-dark")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Contact;
