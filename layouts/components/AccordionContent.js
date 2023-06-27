import { useState } from "react";
import Image from "next/image";
// import Arrow from "/images/faqArrow.svg";
import { motion } from "framer-motion";
import FadeInWhenVisible,{ FadeInWhenVisibleX, FadeInWhenVisibleY, WidthWhenVisible } from "./Animations/animations";

const Arrow = () => {
    return (
        <svg width="10" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
    )
}

const Content = ({ faqs }) => {
    const [active, setActive] = useState(0);
    const handleToggle = (index) => {
        active === index ? setActive(null) : setActive(index);
    };
    const faqContainerClassName = (index) => {
        return (`m-0 p-0 w-[85%] faqContainer ${active === index ? "p-8" : "p-5"}`)
    };
    const faqTitleClassName = (index) => {
        return (
            active === index ? "text-[#df0303]" : "text-black")
    };
    return (
        <div className='min-h-[535px] flex m-0 flex-col items-center  md:flex-row md:justify-around md:min-h-[500px]'>
            <div className="md:w-[50%] md:h-[535px] relative">
                <div className="mb-4">
                    <WidthWhenVisible delay={0.6} Svgwidth="91" />
                </div>
                <FadeInWhenVisibleY delay={0.4}>
                    <h3 className="w-[70%] mb-12 md:mb-0">A few big reasons make you choose EABC</h3>
                </FadeInWhenVisibleY>
                <div>
                    <div className='flex flex-col gap-4 relative top-[-1.5rem] mb-[2.5rem] md:top-[2rem] md:mb-0'>
                        {faqs?.map((faq, index) => {
                            return (
                                <FadeInWhenVisibleY delay={0.4} key={index}>
                                <div  className={faqContainerClassName(index)}>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-between items-center gap-3 my-2'>
                                            <h5
                                                className={
                                                    active === index
                                                        ? "text-[#df0303] font-bold cursor-pointer"
                                                        : "text-DarkGrayishBlue cursor-pointer"
                                                }
                                                onClick={() => handleToggle(index)}>
                                                {faq.title}
                                            </h5>
                                        </div>
                                    </div>
                                    <p
                                        onClick={() => handleToggle(index)}
                                        className={
                                            active === index
                                                ? "text-black text-[0.7rem] p-0 m-0 cursor-pointer"
                                                : "invisible max-h-0"
                                        }>
                                        {faq.answer}
                                    </p>
                                </div>
                                </FadeInWhenVisibleY>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="md:w-[50%] relative justify-center">
                <Image src="/images/pattern-layer2.png" width={400} height={300} alt="patterned layer" className="absolute bottom-[15vh]" />
            </div>
        </div>
    );
};

export default Content;