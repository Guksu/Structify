"use client";
import React from "react";
import useInfoStore from "../../../store/infoStore";
import useTechstackStore from "../../../store/techstackStore";

export default function PdfFunnel() {
  const { title, from, to, description } = useInfoStore();
  const { selectedBackTechStack, selectedFrontTechStack } = useTechstackStore();

  const handleDownloadPDF = async () => {
    const input = document.getElementById("pdf-content");
    if (input) {
      const htmlContent = input.outerHTML;

      const response = await fetch("/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ htmlContent }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "download.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error("Error generating PDF");
      }
    }
  };

  return (
    <div className=" p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">PDF Funnel</h1>
      <div id="pdf-content">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
            Info Data
          </h2>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <p>
            <strong>From:</strong> {from.toDateString()}
          </p>
          <p>
            <strong>To:</strong> {to.toDateString()}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
            Front Techstack
          </h2>
          <ul className="list-none p-0">
            {selectedFrontTechStack.map((tech) => (
              <li key={tech.name} className="flex items-center mb-2">
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="w-8 h-8 mr-2"
                />
                {tech.name}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 mt-8">
            Back Techstack
          </h2>
          <ul className="list-none p-0">
            {selectedBackTechStack.map((tech) => (
              <li key={tech.name} className="flex items-center mb-2">
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="w-8 h-8 mr-2 "
                />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={handleDownloadPDF}
        className="absolute bottom-4 right-4 bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        PDF Download
      </button>
    </div>
  );
}
