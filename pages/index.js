import config from "./../config/config.json";
import Base from "./../layouts/Baseof";
import Cta from "./../layouts/components/Cta";
import { markdownify } from "./../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, Grid, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import Hero from "./../layouts/components/Hero/hero";
import { useState } from "react";
import Content from "./../layouts/components/AccordionContent";
import { BiChevronRight } from "react-icons/bi";
import { motion } from 'framer-motion';
import FadeInWhenVisible,{ FadeInWhenVisibleX, FadeInWhenVisibleY, WidthWhenVisible } from "./../layouts/components/Animations/animations";


// function FadeInWhenVisible({ children, delay }) {
//   return (
//     <motion.div
//       initial={"hidden"}
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.9, delay: delay }}
//       variants={{
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 }
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function FadeInWhenVisibleX({ children, delay }) {
//   return (
//     <motion.div
//       initial={"hidden"}
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.9, delay: delay }}
//       variants={{
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: 100 }
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function FadeInWhenVisibleY({ children, delay }) {
//   return (
//     <motion.div
//       initial={"hidden"}
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.9, delay: delay }}
//       variants={{
//         visible: { opacity: 1, y: 0 },
//         hidden: { opacity: 0, y: 100 }
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function WidthWhenVisible({ children, delay }) {
//   return (
//     <motion.svg
//       initial={"hidden"}
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.9, delay: delay }}
//       variants={{
//         visible: { width: 100 },
//         hidden: { width: 0 }
//       }}
//       width="91"
//       height="11"
//       viewBox="0 0 91 11"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         width="88"
//         height="5"
//         transform="translate(1.66998 3.85999)"
//         fill="#DF0303"
//       />
//       <rect
//         x="0.669983"
//         y="0.859985"
//         width="10"
//         height="10"
//         rx="5"
//         fill="#DF0303"
//       />
//       <rect
//         x="80.67"
//         y="0.859985"
//         width="10"
//         height="10"
//         rx="5"
//         fill="#DF0303"
//       />

//     </motion.svg>
//   );
// }
const Home = ({ frontmatter }) => {
  const { banner, feature, services, faqs, applinks, channelsList, downloadLinks, workflow, call_to_action } = frontmatter;
  const { title } = config.site;
  const [input, setInput] = useState('')

  return (
    <Base title={title}>
      {/* Banner */}
      <Hero />

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;

        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && 'bg-theme-light'}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div
                  className={`service-carousel ${!isOdd && 'md:order-2'}`}
                >
                  {/* Slides */}
                  {service?.images.map((slide, index) => (
                    <FadeInWhenVisibleX key={index} delay={0.2}>
                      <div
                      >
                        <Image src={slide} alt="" width={600} height={500} />
                      </div>
                    </FadeInWhenVisibleX>
                  ))}
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${!isOdd && 'md:order-1'
                    }`}
                >
                  <div className="mb-4">
                    <WidthWhenVisible delay={0.8} Svgwidth="91">
                    </WidthWhenVisible>
                  </div>
                  <FadeInWhenVisibleY delay={0.2}>
                    <h2
                      className="font-bold leading-[40px]"
                    >
                      Welcome to{' '}
                      <span style={{ color: '#DF0303' }}>EABC</span> -<br /> Your
                      Premier Free IPTV Provider for East Africans
                    </h2>
                  </FadeInWhenVisibleY>
                  <div>
                    <FadeInWhenVisibleY delay={0.4}>
                      <p
                        className="mt-4 mb-2 text-xl"
                      >
                        {service?.content}
                      </p>
                    </FadeInWhenVisibleY>
                  </div>
                  {service.button.enable && (
                    <FadeInWhenVisibleY delay={0.6}>
                      <div
                      >
                        <Link
                          href={service?.button.link}
                          className="btn btn-primary mt-4 flex w-fit"
                        >
                          <Image
                            className="mr-1.5"
                            src="/images/play.svg"
                            width={18}
                            height={14}
                            alt="play button"
                          />
                          {service?.button.label}
                        </Link>
                      </div>
                    </FadeInWhenVisibleY>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}


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

      {/* Download Channels Cta */}
      <section className="section bgCrimson">
        <div className="container">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
            <div className="mt-5 md:mt-0 md:order-1">
              <h4 className="text-white">Download EABC channels list</h4>
            </div>
            <div className="mt-5 md:order-2">
              <form className='flex'>

                <input className='bg-gray-200 shadow-[inset 0 2px 4px 0 rgb(1 12 58 / 0.05)] rounded-l p-2 flex-1' id='email' type='email' aria-label='email address' placeholder='Enter your email address' value={input} onChange={e => setInput(e.target.value)} />
                <button className='bg-[#010C3A] hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
                  Download
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section faqSectionBg">
        <div className="container">
          <Content faqs={faqs} />
        </div>
      </section>

      {/* App links */}

      <section className="section AppLinksContainerBg">
        <div className="container">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
            <div className="md:order-1">
              {/* {applink?.map((slide, index) => ( */}
              <FadeInWhenVisibleX delay={0.4}>
                <div className="relative manWatchingTVcontainer">
                  <Image src={"/images/tabAndCellphone.png"} width={190} height={140} alt="tablet and cellphone" className="absolute bottom-0" />
                  <Image src={"/images/decoder.png"} width={150} height={120} alt="tablet and cellphone" className="absolute bottom-0 right-[10%]" />
                </div>
                {/* <CoronaVirus /> */}
              </FadeInWhenVisibleX>

            </div>
            {/* Content */}
            <div
              className={"service-content mt-5 md:mt-0 md:order-2"}
            >
              <div className="mb-4">
                <WidthWhenVisible delay={0.6} Svgwidth="91" />
              </div>
              <FadeInWhenVisibleY delay={0.4}>
                <h2 className="font-bold text-white leading-[40px]">{applinks[0].title}</h2>
              </FadeInWhenVisibleY>
              <FadeInWhenVisibleY delay={0.6}>
              <p className="mt-4 mb-2 text-xl">{applinks[0].content}</p>
              </FadeInWhenVisibleY>
              {/* {applinks.button.enable && ( */}
              <FadeInWhenVisibleY delay={0.6}>
              <Link
                href={applinks[0].button.link}
                className="btn btn-primary mt-4 flex w-fit"
              >
                <Image
                  className="mr-1.5"
                  src="/images/play.svg"
                  width={18}
                  height={14}
                  alt="play button"
                />
                {applinks[0].button.label}
              </Link>
              </FadeInWhenVisibleY>
              {/* )} */}
            </div>
          </div>


        </div>

      </section>

      {/* Channel List */}
      <section className="section pb-0 pt-0 bg-[#1f1f1f]">
        <div className="container">
          <div className={"service-carousel"}>
            <Swiper
              navigation={true}
              modules={[Autoplay, Navigation]}
              slidesPerView={5}
              spaceBetween={20}

              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              init={channelsList?.images > 1 ? false : true}
            >
              {/* Slides */}
              {channelsList?.images.map((slide, index) => (
                <SwiperSlide key={index}>
                  <motion.div className="cursor-pointer" whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}> 
                    <Image src={slide} alt="" width={150} height={150} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* download links */}
      {downloadLinks.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section pt-0 ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-1 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  {/* Slides */}
                  {service?.images.map((slide, index) => (
                    <FadeInWhenVisibleX key={index} delay={0.4}>
                      <Image src={slide} alt="" width={600} height={200} />
                    </FadeInWhenVisibleX>
                  ))}
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 w-full md:mt-0 ${!isOdd && "md:order-1"
                    }`}
                >
                  <div className="mb-4">
                    <WidthWhenVisible delay={0.6} Svgwidth="91"/>
                  </div>
                  <FadeInWhenVisibleY delay={0.4}>
                    <h2 className="font-bold leading-[40px] text-4xl mb-4">{service?.title}</h2>
                  </FadeInWhenVisibleY>
                  <FadeInWhenVisibleY delay={0.5}>
                  {markdownify(service?.content, 'p', 'mt-4 mb-2 text-2xl')}
                  </FadeInWhenVisibleY>
                  <div className="flex my-6 iconsContainer">
                    {service.icons.map((icon, index) => (
                      <FadeInWhenVisibleY delay={0.6} key={index}>
                        <Link href="#">
                          <Image src={icon} width={150} height={10} alt="Download Icon" />
                        </Link>
                      </FadeInWhenVisibleY>
                    ))}
                  </div>
                  <div className="mt-5 w-[90%]">
                  <FadeInWhenVisibleY delay={0.6}>
                    <form className='flex'>

                      <input className='bg-gray-200 shadow-[inset 0 2px 4px 0 rgb(1 12 58 / 0.05)] rounded-lg p-2 flex-1 w-[50%] focus:ring-[#df0303] focus:border-[#df0303]' id='email' type='email' aria-label='email address' placeholder='email address' value={input} onChange={e => setInput(e.target.value)} />
                      <button className='btn btn-primary flex flex-row justify-center content-center text-white shadow p-2 px-6 mx-2 border-4' type='submit'>
                        Join Now <BiChevronRight />
                      </button>
                    </form>
                    </FadeInWhenVisibleY>
                  </div>
                  {/* {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="btn btn-primary mt-4 flex w-fit"
                    >
                      <Image
                        className="mr-1.5"
                        src="/images/play.svg"
                        width={18}
                        height={14}
                        alt="play button"
                      />
                      {service?.button.label}
                    </Link>
                  )} */}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Cta */}
      {/* <Cta cta={call_to_action} />*/}
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
