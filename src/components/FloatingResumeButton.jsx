import React from "react";

export default function FloatingResumeButton() {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "..../public/anshika_resume.pdf"; // Public folder file path
    a.download = "Anshika_Jain_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={handleDownload}
      title="Download Resume"
      className="fixed right-6 bottom-6 z-40 h-14 w-14 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
    >
      ⤓
    </button>
  );
}

