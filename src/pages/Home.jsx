import React, { useState, useEffect, useRef } from "react";
import logogl from "@/assets/guideline.png";
import logopx from "@/assets/proxo.png";
import category1 from "@/assets/Short-Movie.svg";
import category2 from "@/assets/Web dev.svg";
import category3 from "@/assets/Business Plan.svg";
import category4 from "@/assets/Mobile dev.svg";
import category5 from "@/assets/Business Case.svg";

import sponsor1 from "@/assets/coris.png";
import sponsor2 from "@/assets/Klabat.svg";
import sponsor3 from "@/assets/coding.png";

import adkonveksi from "@/assets/adkonveksi.png";
import AMIKOM_Purwokerto from "@/assets/amikom_purwokerto.png";
import AMIKOM_Yogyakarta from "@/assets/amikom_yogyakarta.png";
import AMIKOM_Solo from "@/assets/amikom_solo.png";
import Binus_university from "@/assets/binus_university.png";
import Institut_Teknologi_Bisnis_PalComTech from "@/assets/PalComTech.jpg";
import ISB_Atmaluhur from "@/assets/atmaluhur.png";
import Institut_Informatika_Bisnis_Darmajaya from "@/assets/darmajaya.png";
import STMIK_PPKIA from "@/assets/Stmik_PPKIA.png";
import STIKOM_Bali from "@/assets/Stikom_bali.png";
import STIKOM_PGRI_Banyuwangi from "@/assets/banyuwangi.png";
import STMIK_Profesional from "@/assets/Stmik_profesional.png";
import STMIK_Adiguna_Palu from "@/assets/Stmik_Adiguna_palu.png";
import STMIK_Sepuluh_November from "@/assets/Stimik_sepuluh_november.jpg";
import STMIK_Pontianak from "@/assets/Pontianak.png";
import STTB_Bandung from "@/assets/Sttb_bandung.png";
import UDINUS_Semarang from "@/assets/udinus.png";
import Universitas_Bumigora from "@/assets/bumigora.png";
import Universitas_Dipa_Makassar from "@/assets/Universitas_dipa_makassar.png";
import Universitas_Klabat from "@/assets/Universitas_klabat.png";
import Universitas_Potensi_Utama from "@/assets/Universitas_potensi_utama.png";
import Universitas_Raharja from "@/assets/Universitas_raharja.png";

import ReactTypingEffect from "react-typing-effect";
import useIntersectionObserver from "@/components/useIntersectionObserver";
import Footer from "@/components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import poster from "../assets/poster.png";

const Home = () => {
  //fadein animasi
  const [ref1, isVisible1] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();
  const [ref3, isVisible3] = useIntersectionObserver();
  const [ref4, isVisible4] = useIntersectionObserver();
  const [ref5, isVisible5] = useIntersectionObserver();
  const [ref6, isVisible6] = useIntersectionObserver();

  const navigate = useNavigate();

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const [isClickable, setIsClickable] = useState(true);
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-07");
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    return {
      days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
    };
  };

  const openGmail = () => {
    window.location.href = "mailto:ProxoCoris.unklab@gmail.com";
  };

  const sponsors = [
    { id: 1, name: "Sponsor 1", logo: sponsor1 },
    { id: 2, name: "Sponsor 2", logo: sponsor2 },
    { id: 3, name: "Sponsor 3", logo: sponsor3 },
  ];
  const partnerships = [
    { id: 1, name: "AMIKOM Purwokerto", logo: AMIKOM_Purwokerto },
    { id: 2, name: "AMIKOM Yogyakarta", logo: AMIKOM_Yogyakarta },
    { id: 3, name: "AMIKOM Solo", logo: AMIKOM_Solo },
    { id: 4, name: "Binus University", logo: Binus_university },
    { id: 5, name: "ISB Atmaluhur", logo: ISB_Atmaluhur },
    {
      id: 6,
      name: "Institut Teknologi dan Bisnis PalComTech",
      logo: Institut_Teknologi_Bisnis_PalComTech,
    },
    {
      id: 7,
      name: "Institut Informatika dan Bisnis Darmajaya",
      logo: Institut_Informatika_Bisnis_Darmajaya,
    },
    { id: 8, name: "STMIK PPKIA", logo: STMIK_PPKIA },
    { id: 9, name: "STIKOM Bali", logo: STIKOM_Bali },
    { id: 10, name: "STIKOM PGRI Banyuwangi", logo: STIKOM_PGRI_Banyuwangi },
    { id: 11, name: "STMIK Profesional", logo: STMIK_Profesional },
    { id: 12, name: "STMIK Adiguna Palu", logo: STMIK_Adiguna_Palu },
    { id: 13, name: "STMIK Sepuluh November", logo: STMIK_Sepuluh_November },
    { id: 14, name: "STMIK Pontianak", logo: STMIK_Pontianak },
    { id: 15, name: "STTB Bandung", logo: STTB_Bandung },
    { id: 16, name: "UDINUS Semarang", logo: UDINUS_Semarang },
    { id: 17, name: "Universitas Bumigora", logo: Universitas_Bumigora },
    {
      id: 18,
      name: "Universitas Dipa Makassar",
      logo: Universitas_Dipa_Makassar,
    },
    { id: 19, name: "Universitas Klabat", logo: Universitas_Klabat },
    {
      id: 20,
      name: "Universitas Potensi Utama",
      logo: Universitas_Potensi_Utama,
    },
    { id: 21, name: "Universitas Raharja", logo: Universitas_Raharja },
    { id: 22, name: "adkonveksi", logo: adkonveksi },
  ];

  const carouselData = [
    {
      image: category1,
      topic: "Short Movies",
    },
    {
      image: category2,
      topic: "Web Development",
    },
    {
      image: category3,
      topic: "Business Plan",
    },
    {
      image: category4,
      topic: "Mobile Development",
    },
    {
      image: category5,
      topic: "Business Case",
    },
  ];

  const timelineData = [
    {
      date: "29 January - 5 February",
      title: "1st Wave Registration",
      content: "First wave of early bird registration period",
    },
    {
      date: "6 February - 12 February",
      title: "2nd Wave Registration",
      content: "Second wave of early bird registration period",
    },
    {
      date: "13 February - 7 March",
      title: "Last Registration",
    },
    {
      date: "10 March - 14 March",
      title: "Proposal Submission",
      content: "Deadline for submitting proposals",
    },
    {
      date: "14 March 2025",
      title: "Proposal Selection Announcement",
      content: "Announcement of selected proposals",
    },
    {
      date: "Will be announce",
      title: "Technical Meeting",
      content: "Technical meeting for selected participants",
    },
    {
      date: "Will be announce",
      title: "Pitching",
      content: "Project pitching session",
    },
    {
      date: "Will be announce",
      title: "Final Announcement",
      content: "Final results announcement",
    },
  ];

  const showSlider = (type) => {
    if (!isClickable) return;
    setIsClickable(false);

    const items = listRef.current.querySelectorAll(".item");
    carouselRef.current.classList.remove("next", "prev");

    if (type === "next") {
      listRef.current.appendChild(items[0]);
      carouselRef.current.classList.add("next");
    } else {
      listRef.current.prepend(items[items.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  };

  const handleSeeMore = (title) => {
    console.log(title);
    if (
      title === "Short Movies" ||
      title === "Web Development" ||
      title === "Business Plan" ||
      title === "Mobile Development" ||
      title === "Business Case"
    ) {
      const driveLinks = {
        "Short Movies":
          "https://drive.google.com/drive/folders/18cmegs5pVEKpvxpoW6sBcRQ8r7TZDJcF",
        "Web Development":
          "https://drive.google.com/drive/folders/18ezmrilvhoSw7boc_5U1cTgKBuZpdBGI",
        "Business Plan":
          "https://drive.google.com/drive/folders/18IqZliz2rXplcRSxxxVXFa6VYUmPLJch",
        "Mobile Development":
          "https://drive.google.com/drive/folders/18_GCx7i-A-Zb66e_IdDinYM4X2bK1Djy",
        "Business Case":
          "https://drive.google.com/drive/folders/18I0yS486PaK5NK9r-E4_6vD5whJGTOdR",
      };

      const link = driveLinks[title];
      if (link) {
        window.open(link, "_blank");
      } else {
        console.log(`No drive link found for ${title}`);
      }
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  {
    /*Animasi Timeline*/
  }
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    }, options);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  //animasi typing

  const TimeUnit = ({ value, label }) => (
    <div className="flex min-w-[80px] flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 md:h-32 md:w-32">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="text-base font-medium text-gray-600 md:text-lg">
        {label}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background decorative elements */}

      <div className="flex justify-center">
        <video
          autoPlay
          muted
          loop
          className="w-full sm:min-h-[400px] md:min-h-[500px] lg:h-[800px]"
        >
          <source src="/src/assets/video1.MP4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>

      {/* <marquee
        behavior="scroll"
        direction="left"
        scrollAmount="7"
        className="pt-6"
      >
        🚀 GREAT NEWS! PROXO EXTENDED UNTIL 7 MARCH! 🔥 Don't Miss Out! 🔥
      </marquee> */}

      {/* Main content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-10">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-10 space-y-6">
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-6xl">
              Welcome to the
              <br />
              <span className="animate-text mt-2 inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                PROXOCORIS
              </span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                International
              </span>
              <span className="mt-2 block text-3xl md:text-5xl">
                community!
              </span>
            </h1>

            <div className="mx-auto max-w-2xl text-sm text-gray-600 md:text-xl">
              <ReactTypingEffect
                text={["Join us and showcase your brilliance in Proxocoris!"]}
                speed={50}
                eraseSpeed={30}
                typingDelay={100}
              />
            </div>
          </div>

          {/* Countdown section */}
          <div className="relative mb-20">
            <div className="mb-6 text-xl font-semibold text-gray-700 sm:text-2xl">
              Registration closes in:
            </div>
            <div className="flex flex-nowrap items-center justify-center overflow-x-auto sm:gap-4 md:gap-8">
              {/* Days */}
              <TimeUnit
                value={timeLeft.days}
                label="Days"
                className="text-lg sm:text-2xl md:text-3xl"
              />
              <div className="text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl">
                :
              </div>
              {/* Hours */}
              <TimeUnit
                value={timeLeft.hours}
                label="Hours"
                className="text-lg sm:text-2xl md:text-3xl"
              />
              <div className="text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl">
                :
              </div>
              {/* Minutes */}
              <TimeUnit
                value={timeLeft.minutes}
                label="Minutes"
                className="text-lg sm:text-2xl md:text-3xl"
              />
              <div className="text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl">
                :
              </div>
              {/* Seconds */}
              <TimeUnit
                value={timeLeft.seconds}
                label="Seconds"
                className="text-lg sm:text-2xl md:text-3xl"
              />
            </div>
          </div>

          {/* Section What is Proxo */}

          <div
            ref={ref1}
            className={`mb-32 transform transition-all duration-700 ease-in-out ${
              isVisible1 ? "opacity-100 blur-0" : "opacity-0 blur-2xl"
            }`}
          >
            <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
              <div className="text-left md:w-1/2">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  What is <span className="text-customGreen">proxo</span>?
                </h2>
                <p className="text-gray-600">
                  At the heart of Universitas Klabat's Faculty of Computer
                  Science,
                  <b>PROXO (Project Extraordinary)</b> is more than just an
                  event—it’s a movement.
                  <br />
                  <br />
                  With the theme
                  <b>
                    {" "}
                    "Innovation and Collaboration: Building Resilient
                    Communities to End Poverty,"
                  </b>
                  PROXO brings together innovators and changemakers to harness
                  technology for sustainable community solutions. It’s not just
                  a competition—it’s real action.
                  <br />
                  <br />
                  Meanwhile,{" "}
                  <b>CORIS (Cooperation Research Inter-University)</b> serves as
                  a global platform for academic collaboration in
                  <b>Information and Communication Technology (ICT)</b>.
                  <br />
                  As an open-access international journal, CORIS publishes
                  cutting-edge research that bridges theory, experimentation,
                  and numerical analysis—driving real-world impact.
                  <br />
                  <br />
                  By merging <b>PROXO’s hands-on innovation</b> with{" "}
                  <b>CORIS’s academic excellence</b>, we create a powerful
                  synergy where technology and research unite to combat poverty.
                  <br />
                  <br />
                  <b>Be part of this movement.</b> Together, we can drive real
                  change through technology, research, and innovation.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={logopx}
                  alt="Proxocoris Logo"
                  className="mx-auto w-full max-w-md"
                />
              </div>
            </div>
          </div>
          {/* Section Guideline */}
          <div
            ref={ref2}
            className={`mb-10 transform transition-all duration-500 ease-in-out ${
              isVisible2
                ? "opacity-100 blur-0 sm:duration-700"
                : "opacity-0 blur-2xl sm:duration-700"
            }`}
          >
            <div className="flex flex-col-reverse items-center justify-between md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={logogl}
                  alt="Guideline Logo"
                  className="mx-auto w-full max-w-md"
                />
              </div>
              <div className="text-left md:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-[#91261F] md:text-4xl">
                  Guideline
                </h2>
                <p className="text-gray-600">
                  To ensure a smooth journey through our process, we've designed
                  a set of clear, easy-to-follow guidelines that will help you
                  understand every step. Our aim is to provide you with all the
                  necessary information, ensuring that you can confidently move
                  forward and contribute to the mission. Whether you're a
                  first-time participant or a returning innovator, these
                  guidelines will empower you to navigate the process with
                  clarity, enabling you to focus on what truly matters—creating
                  solutions that make a real impact.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/19fccC9d2gGRb6WgQoO42vSyVee7oPjUZ?usp=drive_link"
                  target="_blank"
                  className="group relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-600 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
                >
                  <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                    Explore Guidelines
                    <span className="ml-2 inline-block transition-transform duration-200 ease-in-out group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Category Section */}
          <div
            ref={ref5}
            className={`mb-2 transform transition-all duration-700 ease-in-out ${
              isVisible5 ? "opacity-100 blur-0" : "opacity-0 blur-2xl"
            }`}
          >
            <div className="carousel" ref={carouselRef}>
              <h2 className="mt-20 text-3xl font-bold md:text-4xl">Category</h2>
              <div className="list" ref={listRef}>
                {carouselData.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.image} alt={`Category ${index + 1}`} />
                    <div className="introduce">
                      {/* <div className="title">{item.title}</div> */}
                      <div className="topic">{item.topic}</div>
                      <button
                        className="seeMore"
                        onClick={() => handleSeeMore(item.topic)}
                      >
                        DOWNLOAD GUIDELINE BOOK &#8599;
                      </button>
                    </div>
                    {/* <div className="detail">
                    <div className="title">{item.detailTitle}</div>
                    <div className="des">{item.detailDescription}</div>
                  </div> */}
                  </div>
                ))}
              </div>
              <div className="arrows">
                <button id="prev" onClick={() => showSlider("prev")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-10 w-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <button id="next" onClick={() => showSlider("next")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-10 w-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="min-h-screen px-4 py-4">
            <div className="mx-auto max-w-5xl">
              <h1 className="mb-16 text-center text-3xl font-bold text-purple-800 md:text-4xl">
                Event Timeline
              </h1>

              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 transform bg-gray-200 md:left-1/2 md:-translate-x-1/2">
                  <div
                    className="absolute top-0 w-full bg-purple-500 transition-all duration-700 ease-in-out"
                    style={{
                      height: `${activeIndex !== null ? (activeIndex + 1) * (100 / timelineData.length) : 0}%`,
                      opacity: 0.6,
                    }}
                  />
                </div>

                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-index={index}
                    className={`mb-12 transition-all duration-700 ease-out md:mb-20 ${activeIndex >= index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  >
                    <div
                      className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-start gap-8 md:items-center`}
                    >
                      <div className="w-full pl-12 md:w-5/12 md:pl-0">
                        <div
                          className={`relative rounded-xl border border-gray-100 bg-white p-6 shadow-lg ${index % 2 === 0 ? "md:text-right" : "md:text-left"} transition-all duration-700 ease-out ${activeIndex >= index ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-95 opacity-0"}`}
                        >
                          <div className="mb-2 text-sm font-semibold text-purple-600">
                            {item.date}
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.content}</p>

                          <div
                            className={`absolute left-0 top-6 -translate-x-[2.2rem] transform transition-all duration-500 ease-out md:hidden ${activeIndex >= index ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                          >
                            <div className="h-4 w-4 rounded-full bg-purple-500 shadow-md" />
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden justify-center md:flex md:w-2/12">
                        <div className="absolute top-1/2 h-5 w-5 -translate-y-1/2 transform">
                          <div
                            className={`h-full w-full rounded-full bg-purple-500 shadow-md transition-all duration-500 ease-out ${activeIndex >= index ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                          />
                        </div>
                      </div>

                      <div className="hidden w-5/12 md:block" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*Sponsor section*/}
          <div
            ref={ref3}
            className={`mb-32 transform transition-all duration-700 ease-in-out ${
              isVisible3 ? "opacity-100 blur-0" : "opacity-0 blur-2xl"
            }`}
          >
            <div className="container mx-auto px-4 py-8">
              <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                Our Sponsorship
              </h2>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="items-centerrounded-lg flex p-4 hover:shadow-md"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="h-30 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*Partnership section*/}
          <div
            ref={ref6}
            className={`mb-32 transform transition-all duration-700 ease-in-out ${
              isVisible6 ? "opacity-100 blur-0" : "opacity-0 blur-2xl"
            }`}
          >
            <div className="container mx-auto px-4 py-8">
              <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                Our Partnership
              </h2>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6">
                {partnerships.map((partenership) => (
                  <div
                    key={partenership.id}
                    className="items-centerrounded-lg flex p-4 hover:shadow-md"
                  >
                    <img
                      src={partenership.logo}
                      alt={`${partenership.name} logo`}
                      className="h-30 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*Email section*/}
          {/* <div
            ref={ref4}
            className={`mb-32 transform transition-all duration-700 ease-in-out ${
              isVisible4 ? "opacity-100 blur-0" : "opacity-0 blur-2xl"
            }`}
          >
            <div className="mx-auto max-w-4xl px-4 py-16 text-center">
              <h2 className="mb-8 text-4xl font-bold text-gray-800">
                Ready to Join?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Take the first step towards participating in PROXOCORIS
                International Competition. Contact us through email for
                registration and inquiries.
              </p>
              <button
                onClick={openGmail}
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us via Email
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
