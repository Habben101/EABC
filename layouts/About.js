import { markdownify } from "./../lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import Image from "next/image";
import { motion } from 'framer-motion';
import FadeInWhenVisible, { FadeInWhenVisibleX, FadeInWhenVisibleY, WidthWhenVisible, LineWidthWhenVisible } from "./components/Animations/animations";


const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, who, ourStory, ourFounder, feature } = frontmatter;
  return (

    <>
      {/* About header */}
      <section className="section darkBlueWithGradient">
        <div className="container">
          <div className="flex justify-center content-center p-16">
            {markdownify(title, "h1", "text-center font-bold text-white")}
          </div>
        </div>
      </section>
      {/* Who we are */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
            {/* Carousel */}
            <div
              className="service-carousel  md:order-2"
            >
              <FadeInWhenVisibleX delay={0.2}>
                <div
                >
                  <Image src={who.image} alt="" width={600} height={500} />
                </div>
              </FadeInWhenVisibleX>
            </div>
            {/* Content */}
            <div
              className="service-content mt-5 md:mt-0 'md:order-1"
            >
              <div className="flex flex-row items-center ">
                <FadeInWhenVisibleX delay={0.5}>
                  <p
                    className="font-bold leading-[40px] text-black"
                  >
                    {who.title}
                  </p>
                </FadeInWhenVisibleX>
                <LineWidthWhenVisible delay={0.5} mr={3} />
              </div>
              <div>
                <FadeInWhenVisibleY delay={0.4}>
                  <h4>{who.subtitle}</h4>
                  <p
                    className="mt-4 mb-2 text-xl"
                  >
                    {who.firstPar}
                    <br />
                    <br />
                    {who.secondPar}
                    <br />
                    <br />
                    {who.thirdPar}
                  </p>
                </FadeInWhenVisibleY>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="section darkBlue">
        <div className="container">
        <div className="items-center gap-8 md:grid md:grid-cols-2">
            {/* Carousel */}
            <div
              className="service-content mt-5 md:mt-0 md:order-2"
            >
              <div className="flex flex-row items-center ">
                <FadeInWhenVisibleX delay={0.5}>
                  <p
                    className="font-bold leading-[40px] text-white"
                  >
                    {ourStory.title}
                  </p>
                </FadeInWhenVisibleX>
                <LineWidthWhenVisible delay={0.5} mr={3} />
              </div>
              <div>
                <h4 className="text-[#FFFDFD]">{ourStory.subtitle}</h4>
                <FadeInWhenVisibleY delay={0.4}>
                  <p
                    className="mt-4 mb-2 text-xl text-[#FFFDFD] text-opacity-90"
                  >
                    {ourStory.firstPar}
                    <br />
                    <br />
                    {ourStory.secondPar}
                    <br />
                    <br />
                    {ourStory.thirdPar}
                    <br />
                    <br />
                    {ourStory.forthPar}
                  </p>
                </FadeInWhenVisibleY>
              </div>
            </div>
            {/* Content */}
            <div
              className="service-carousel  md:order-1"
            >
              <FadeInWhenVisibleX delay={0.2}>
                <div
                >
                  <Image src={who.image} style={{"transform": "scaleX(-1)"}} alt="" width={600} height={500} />
                </div>
              </FadeInWhenVisibleX>
            </div>
          </div>
        </div>
      </section>
      {/* Our Founder */}
      <section className="section bg-theme-light">
        <div className="container">
        <div className="items-center gap-8 md:grid md:grid-cols-2">
            {/* Carousel */}
            <div
              className="service-content mt-5 md:mt-0 md:order-2"
            >
              <div className="flex flex-row items-center ">
                <FadeInWhenVisibleX delay={0.5}>
                  <p
                    className="font-bold leading-[40px] text-black"
                  >
                    {ourFounder.title}
                  </p>
                </FadeInWhenVisibleX>
                <LineWidthWhenVisible delay={0.5} mr={3} />
              </div>
              <div>
                <h4>{ourFounder.subtitle}</h4>
                <FadeInWhenVisibleY delay={0.4}>
                  <p
                    className="mt-4 mb-2 text-xl"
                  >
                    {ourFounder.firstPar}
                    <br />
                    <br />
                    {ourFounder.secondPar}
                    <br />
                    <br />
                    {ourFounder.thirdPar}
                    <br />
                    <br />
                    {ourFounder.forthPar}
                  </p>
                </FadeInWhenVisibleY>
              </div>
            </div>
            {/* Content */}
            <div
              className="service-carousel  md:order-1"
            >
              <FadeInWhenVisibleX delay={0.2}>
                <div
                >
                  <Image src={ourFounder.image} alt="" width={600} height={500} />
                </div>
              </FadeInWhenVisibleX>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="section bgWithImg">
        <div className="absolute z-0 w-full h-full">
          <FadeInWhenVisible delay={0.4}>
          <Image src="/images/pattern-layer.png" width={82} height={149} alt="pattern layer" className="absolute right-0" />
          <Image src="/images/pattern-layer.png" width={82} height={149} alt="pattern layer" className="absolute rotate-180 left-0 bottom-0" />
          </FadeInWhenVisible>
        </div>
        <div className="container">
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <WidthWhenVisible delay={0.6} Svgwidth="91"></WidthWhenVisible>
            </div>
            <FadeInWhenVisibleY delay={0.4}><h2 className="Crimson">{markdownify(feature.title)}</h2></FadeInWhenVisibleY>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {feature.features.map((item, i) => (
              <FadeInWhenVisibleY delay={0.4} key={`feature-${i}`}>
              <motion.div
                className="feature-card rounded-xl bg-transparent border-[#DF0303] border p-5 pb-8 text-center flex flex-col justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "#010c3aa3" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h2", "h5 Crimson")}
                  <p className="mt-3 text-white">{item.content}</p>
                </div>
              </motion.div>
              </FadeInWhenVisibleY>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
