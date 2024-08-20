import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import PageLayout from "./PageLayout";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <PageLayout>
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/stt.jpg')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/stt.jpg')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/back.png')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        {/* Content inside Swiper */}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center mx-auto flex-col text-center">
          <h1
            className="font-bold text-white max-w-[700px] text-5xl md:font-extrabold fade-in-out delay-0 absolute mb-[300px] sm:mb-[170px]"
            data-aos="fade-up"
          >
            Effortlessly Manage Your{" "}
            <span className="text-primary">Academic</span> Schedule
          </h1>
          <h1 className="font-bold text-white max-w-[700px] text-5xl md:font-extrabold fade-in-out delay-1 absolute mb-[250px] sm:mb-[170px]">
            {" "}
            Never Miss a Class with{" "}
            <span className="text-primary">E-Timetable</span>
          </h1>
          <p
            className="mt-7 text-white text-lg max-w-[700px] font-normal leading-tight fade-in-out delay-2 absolute"
            data-aos="fade-u"
          >
            E-timetable is designed to help ogitech students stay organized and
            up to date with their class schedules,
            <br />
            it ensures that you never miss an important opportunity.
          </p>
          <p className=" mt-7 delay-3 max-w-[700px] absolute fade-in-out text-white text-lg leading-tight">
            E-timetable is the perfect solution for Ogitech students to keep up
            with their academic commitments. <br /> It keeps you informed and
            ready for every class
          </p>

          <span className="mt-56" data-aos="flip-right">
            <Link
              to="/timetable"
              className="rounded-md p-4 px-7 bg-primary text-white text-lg font-medium"
            >
              Get started
            </Link>
          </span>
        </div>
        {/* Content inside swiper ends */}
      </div>

      <section className="about min-h-screen mt-20" id="About">
        <h1
          className="text-4xl font-extrabold text-center mb-3 mx-10"
          data-aos="flip-left"
        >
          What you need to know
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div
              className="w-full lg:w-1/2 px-4 -mb-10 lg:mb-0"
              data-aos="flip-up"
            >
              <img
                src="/images/about2.png"
                className="w-[80%] mb-0 mx-auto"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 px-10" data-aos="flip-up">
              <p className="text-left mt-5">
                At Ogitech Institution, we understand the importance of staying
                organized and keeping track of your academic responsibilities.
                That’s why we have developed the Ogitech eTimetable platform – a
                tool designed to simplify the process of managing your class
                schedules or timetables.
              </p>
              <p className="mt-5">
                Managing your class schedule is now easier than ever with the
                Ogitech eTimetable platform. Our intuitive interface allows you
                to view your schedule by day, week, or month, ensuring you never
                miss a class. <br /> <br />
                Designed to help Ogitech students stay organized and up-to-date
                with their class schedules, our platform ensures you never miss
                an important date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Features" className="features py-20 px-10 md:pt-0">
        <h1
          className="text-4xl font-extrabold text-center mb-24"
          data-aos="zoom-in"
        >
          Key Features
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-10">
            <div className="w-full lg:w-1/3 text-start">
              <div
                className="bg-white shadow-lg rounded-xl px-8 py-8 flex flex-col items-center"
                data-aos="zoom-in-up"
              >
                <img
                  src="images/icon11.png"
                  className="mb-4 w-14"
                  alt="Real-time updates icon"
                />
                <h5 className="text-xl font-bold">Real-time updates</h5>
                <p className="mt-3 text-gray-600 text-center">
                  Always have the latest update on classes.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 text-start">
              <div
                className="bg-white shadow-xl rounded-lg px-8 py-8 flex flex-col items-center"
                data-aos="zoom-in-up"
              >
                <img
                  src="images/icon22.png"
                  className="mb-4 w-14"
                  alt="User-friendly Interface icon"
                />
                <h5 className="text-xl font-bold">User-friendly Interface</h5>
                <p className="mt-3 text-gray-600 text-center">
                  Simple and intuitive design for easy navigation.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div
                className="bg-white shadow-xl rounded-lg px-8 py-8 flex flex-col items-center"
                data-aos="zoom-in-up"
              >
                <img
                  src="images/icon33.png"
                  className="mb-4 w-14"
                  alt="Accessible anywhere icon"
                />
                <h5 className="text-xl font-bold">Accessible anywhere</h5>
                <p className="mt-3 text-gray-600 text-center">
                  Access your timetable from anywhere you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
