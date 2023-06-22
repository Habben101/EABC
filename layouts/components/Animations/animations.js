import { motion } from "framer-motion";

function FadeInWhenVisible({ children, delay }) {
    return (
      <motion.div
        initial={"hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeInWhenVisible;
  
  function FadeInWhenVisibleX({ children, delay }) {
    return (
      <motion.div
        initial={"hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 }
        }}
      >
        {children}
      </motion.div>
    );
  }

export {FadeInWhenVisibleX};
  
  function FadeInWhenVisibleY({ children, delay }) {
    return (
      <motion.div
        initial={"hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
      >
        {children}
      </motion.div>
    );
  }
  
export {FadeInWhenVisibleY};

function WidthWhenVisible({ children, delay, Svgwidth }) {
    return (
      <motion.svg
        initial={"hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay }}
        variants={{
          visible: { width: 100 },
          hidden: { width: 0 }
        }}
        width= {Svgwidth}
        height="11"
        viewBox="0 0 91 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="88"
          height="5"
          transform="translate(1.66998 3.85999)"
          fill="#DF0303"
        />
        <rect
          x="0.669983"
          y="0.859985"
          width="10"
          height="10"
          rx="5"
          fill="#DF0303"
        />
        <rect
          x="80.67"
          y="0.859985"
          width="10"
          height="10"
          rx="5"
          fill="#DF0303"
        />
  
      </motion.svg>
    );
  }
export {WidthWhenVisible};

function LineWidthWhenVisible({ children, delay, mr, ml, margintop, lineWidth }) {
  return (
    <motion.div
      initial={"hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: delay }}
      variants={{
        visible: { width: lineWidth ? lineWidth : 55 },
        hidden: { width: 0 }
      }}
      className={`mr-${mr} ml-${ml} ${margintop ? "mt-4" : ""} w-[${lineWidth ? lineWidth : '55px' }] h-[5px] bgCrimson rounded `}
    >

    </motion.div>
  );
}
export {LineWidthWhenVisible};