import React, { useState } from "react";
import internship from "../assets/INTERNSHIP.png";
import iic from "../assets/IIC.png";
import inspire from "../assets/INSPIRE.png";
import cr from "../assets/CR.png";
import sr from "../assets/SR.png";
import ue from "../assets/UE.png";
import powerbi from "../assets/PowerBI.png";
export default function Achievements() {
  const achievements = [
    { title: "Selected as Student Member of IIC(Institute Innovation Council)", certificate:iic},
    { title: "Shortlisted for as full Stack developer intern", certificate: internship },
    { title: "Awarded by INSIPE Scheme", certificate: inspire},
    { title: "Lead Class Communication and Coordinator as Class Representative", certificate:cr},
    { title: "Represented of IOET Department", certificate: sr},
{ title: "Sucessfully Completed UX Design Course By Accenture on FutureLearn with a 92% Score", certificate: ue},
{ title: "Completed a Workshop By Office Master", certificate: powerbi},
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (certificate) => {
    setSelectedCert(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setModalOpen(false);
  };

  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-cyan-500 mb-8 text-center">Achievements</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => (
            <article
              key={idx}
              className="rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{ach.title}</h4>

                <button
                  onClick={() => openModal(ach.certificate)}
                  className="mt-4 px-3 py-2 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-400 transition"
                >
                  View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white dark:bg-slate-800 p-4 rounded shadow-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            >
              <button
                className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 font-bold text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
