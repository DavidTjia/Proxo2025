import React, { useState, useRef, useEffect } from "react";

const Sponsor = () => {
  const ref4 = useRef(null);
  const [activeTab, setActiveTab] = useState("English version");
  const tabs = ["English version", "Indonesia version"];

  // State untuk mengatur visibilitas section (efek transisi)
  const [isVisible4, setIsVisible4] = useState(false);

  // Menggunakan Intersection Observer untuk mengamati ref4
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible4(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (ref4.current) {
      observer.observe(ref4.current);
    }

    return () => {
      if (ref4.current) {
        observer.unobserve(ref4.current);
      }
    };
  }, []);

  // Fungsi untuk membuka Gmail
  const openGmail = () => {
    window.location.href = "mailto:ProxoCoris.unklab@gmail.com";
  };

  // Fungsi untuk mengubah Google Drive URL ke link preview langsung
  const getGoogleDriveDirectLink = (url) => {
    const fileId = url.match(/[-\w]{25,}/);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId[0]}/preview`;
    }
    return url;
  };

  const pdfUrls = {
    "English version":
      "https://drive.google.com/file/d/1wwYwhbrh23sD5TtOMnLYlYRchKpOY7ji/view?usp=sharing ",
    "Indonesia version":
      "https://drive.google.com/file/d/1m8DUYh76v6Aec2J_n37W9ZUI7pDtOUUt/view?usp=sharing ",
  };

  const getPdfViewerUrl = () => {
    const originalUrl = pdfUrls[activeTab];
    if (originalUrl.includes("drive.google.com")) {
      return getGoogleDriveDirectLink(originalUrl);
    }
    return originalUrl;
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <h1 className="mb-2 text-center text-2xl font-bold">
            Sponsorship Proposal
          </h1>
          <div className="flex justify-center space-x-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Document View */}
      <div className="flex flex-grow items-center justify-center p-4">
        <iframe
          src={getPdfViewerUrl()}
          className="h-[80vh] w-full max-w-4xl rounded-lg border-2 border-gray-300 shadow-lg"
          frameBorder="0"
          allowFullScreen
          title="Sponsorship Document"
        />
      </div>

      {/* Email section */}
      <div
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
            Become a valued sponsor of the PROXOCORIS International Competition
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
      </div>
    </div>
  );
};

export default Sponsor;
