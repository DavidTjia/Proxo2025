import React, { useState } from "react";

const Sponsor = () => {
  const [activeTab, setActiveTab] = useState("English version");
  const tabs = ["English version", "Indonesia version"];

  // Function to convert Google Drive URL to direct download link
  const getGoogleDriveDirectLink = (url) => {
    // Extract file ID from Google Drive URL
    const fileId = url.match(/[-\w]{25,}/);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId[0]}/preview`;
    }
    return url;
  };

  const pdfUrls = {
    "English version":
      "https://drive.google.com/file/d/1h3217kghq06uNT97Um8zZIf3qFttmUyO/view?usp=sharing",
    "Indonesia version":
      "https://drive.google.com/file/d/16NfQki1hfilcRNmsVNwR4tHQVSVjSw4C/view?usp=sharing",
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
        />
      </div>
    </div>
  );
};

export default Sponsor;
