import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

    <div className="relative z-0 overflow-visible pb-32"> {/* Wrapping container */}
      {/* Hero Section */}
      <section className="relative text-white text-center py-32 px-6 bg-gradient-to-tr from-indigo-900 via-blue-900 to-blue-950 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="z-10 relative"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Driving Innovations
            <br />
            And Empowering Business
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg mt-6 font-semibold text-white">
            Metalogic envisions a future where technology serves as a catalyst for limitless human potential,
            fostering innovation and empowering organizations to thrive in a transformative digital era.
          </p>
        </motion.div>
      </section>

      <motion.div
        className="absolute top-[calc(100%-4rem)] left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <div className="bg-white text-gray-800 shadow-xl rounded-2xl px-10 py-8 flex flex-col md:flex-row justify-around items-center text-center space-y-6 md:space-y-0 md:space-x-8">
          {[
            { label: "Projects Completed", value: "32+" },
            { label: "Satisfied Clients", value: "50+" },
            { label: "Experts", value: "18+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-teal-700">{stat.value}</h3>
              <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Below */}
      <section className="mt-32 pt-40 pb-24 bg-gradient-to-r from-rose-100 via-teal-100 to-indigo-100 text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="space-y-8"
        >
          <h2 className="text-red-500 font-semibold tracking-wider text-sm">OUR APPROACH</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            Where Vision Meets <span className="text-teal-600">Execution</span>
          </h1>
          <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-700">
            At Metalogic, we navigate the digital landscape with innovation, collaboration,
            and a dedicated focus on client success, turning ideas into reality with precision and purpose.
          </p>
        </motion.div>
      </section>
    </div>
const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-white">
        <main className="flex-grow">
          <section className="relative text-white text-center py-32 pb-60 px-6 bg-gradient-to-tr from-indigo-900 via-blue-900 to-blue-950 overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="z-10 relative"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Driving Innovations
                <br />
                And Empowering Business
              </h1>
              <p className="max-w-2xl mx-auto text-base md:text-lg mt-6 font-semibold text-white">
                Metalogic envisions a future where technology serves as a catalyst for limitless human potential,
                fostering innovation and empowering organizations to thrive in a transformative digital era.
              </p>
            </motion.div>

            <motion.div
              className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              <div className="bg-white text-gray-800 shadow-xl rounded-2xl px-10 py-8 flex flex-col md:flex-row justify-around items-center text-center space-y-6 md:space-y-0 md:space-x-8">
                {[
                  { label: "Projects Completed", value: "32+" },
                  { label: "Satisfied Clients", value: "50+" },
                  { label: "Experts", value: "18+" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={fadeInUp}
                    custom={index + 2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className="text-4xl md:text-5xl font-extrabold text-teal-700">{stat.value}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="mt-0 py-24 bg-gradient-to-r from-rose-100 via-teal-100 to-indigo-100 text-center px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
              className="space-y-8"
            >
              <h2 className="text-red-500 font-semibold tracking-wider text-sm">OUR APPROACH</h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                Where Vision Meets <span className="text-teal-600">Execution</span>
              </h1>
              <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-700">
                At Metalogic, we navigate the digital landscape with innovation, collaboration,
                and a dedicated focus on client success, turning ideas into reality with precision and purpose.
              </p>
            </motion.div>
          </section>

          <section className="min-h-[70vh] bg-white px-4 py-24 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
              className="space-y-6"
            >
              <h2 className="text-red-500 font-bold tracking-wide">OUR FOUNDATION</h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
                Bridging Futures Since <br />2023
              </h1>
              <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
                We strive for excellence in every aspect, delivering cutting-edge solutions
                tailored to meet the evolving needs of the modern world.
              </p>
              <div className="flex justify-center mt-8">
                <div className="w-6 h-6 rounded-full bg-blue-600 animate-bounce" />
              </div>
            </motion.div>
          </section>

          <section className="py-24 bg-gradient-to-br from-white to-slate-100 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[{
                number: "1",
                title: "2023 Founded",
                desc: "In 2023, Metalogic: a beacon of innovation, emerged with a mission to transform industries."
              }, {
                number: "2",
                title: "Visionary Leadership",
                desc: "Founded by forward-thinking visionaries with a passion for progress and purpose."
              }, {
                number: "3",
                title: "Commitment to Excellence",
                desc: "Our culture centers on continuous improvement and customer-centric innovation."
              }].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  variants={fadeInUp}
                  custom={index + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-indigo-100 bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-fade-in-up">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-800">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
