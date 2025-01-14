"use client";

import {
  backTechStack,
  frontTechStack,
  TechStack,
} from "@/constants/techstack";
import useFunnel from "@/hooks/useFunnel";
import techstackStore from "@/store/techstackStore";
import { useState } from "react";
import { useStore } from "zustand";

export default function TechstackFunnel() {
  const {
    selectedBackTechStack,
    selectedFrontTechStack,
    setBackTechStack,
    setFrontTechStack,
  } = useStore(techstackStore);
  const { moveBack, moveNext } = useFunnel();

  const [frontInputValue, setFrontInputValue] = useState<string>("");
  const [backInputValue, setBackInputValue] = useState<string>("");

  const handleAddSkill = (skill: TechStack) => {
    if (skill.type === "front") {
      if (!selectedFrontTechStack.includes(skill)) {
        setFrontTechStack([...selectedFrontTechStack, skill]);
        setFrontInputValue("");
      }
    } else {
      if (!selectedBackTechStack.includes(skill)) {
        setBackTechStack([...selectedBackTechStack, skill]);
        setBackInputValue("");
      }
    }
  };

  const handleRemoveSkill = (skill: TechStack) => {
    if (skill.type === "front") {
      setFrontTechStack(selectedFrontTechStack.filter((t) => t !== skill));
    } else {
      setBackTechStack(selectedBackTechStack.filter((t) => t !== skill));
    }
  };

  const filteredFrontSkill = frontTechStack.filter((tech) =>
    tech.name.toLowerCase().includes(frontInputValue.toLowerCase())
  );

  const filteredBackSkill = backTechStack.filter((tech) =>
    tech.name.toLowerCase().includes(backInputValue.toLowerCase())
  );

  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md">
      <label className="block text-gray-700 font-medium mb-2">Frontend</label>
      <p className="text-gray-500 text-sm mb-4">
        select the Frontend techstack you want to use
      </p>
      <div className="border border-gray-300 rounded-lg p-2 flex flex-wrap items-center gap-2">
        {selectedFrontTechStack.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill.name}
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => handleRemoveSkill(skill)}
            >
              ✕
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-700"
          value={frontInputValue}
          onChange={(e) => setFrontInputValue(e.target.value)}
        />
      </div>
      {frontInputValue && (
        <ul className="border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto">
          {filteredFrontSkill.map((tech) => (
            <li
              key={tech.name}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleAddSkill(tech)}
            >
              {tech.imgSrc && (
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="h-5 w-5 object-contain"
                />
              )}
              {tech.name}
            </li>
          ))}
        </ul>
      )}

      <label className="block text-gray-700 font-medium mb-2 mt-8">
        Backend
      </label>
      <p className="text-gray-500 text-sm mb-4">
        select the Backend techstack you want to use
      </p>
      <div className="border border-gray-300 rounded-lg p-2 flex flex-wrap items-center gap-2">
        {selectedBackTechStack.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill.name}
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => handleRemoveSkill(skill)}
            >
              ✕
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-700"
          value={backInputValue}
          onChange={(e) => setBackInputValue(e.target.value)}
        />
      </div>
      {backInputValue && (
        <ul className="border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto">
          {filteredBackSkill.map((tech) => (
            <li
              key={tech.name}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleAddSkill(tech)}
            >
              {tech.imgSrc && (
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="h-5 w-5 object-contain"
                />
              )}
              {tech.name}
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-8">
        <button
          className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={moveBack}
        >
          Back
        </button>
        <button
          className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={moveNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
