"use client";
import useInfoStore from "../../../store/infoStore";
import useTechstackStore from "../../../store/techstackStore";

export default function PdfFunnel() {
  const { title, from, to, description } = useInfoStore();
  const { selectedBackTechStack, selectedFrontTechStack } = useTechstackStore();
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          Info Data
        </h2>
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
              <img src={tech.imgSrc} alt={tech.name} className="w-8 h-8 mr-2" />
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
              <img src={tech.imgSrc} alt={tech.name} className="w-8 h-8 mr-2" />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
