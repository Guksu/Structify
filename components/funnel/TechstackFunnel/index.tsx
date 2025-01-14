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
import TechstackBox from "../TechstackBox";

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
      <TechstackBox
        type="front"
        filteredSkill={filteredFrontSkill}
        handleAddSkill={handleAddSkill}
        handleRemoveSkill={handleRemoveSkill}
        inputValue={frontInputValue}
        selectedTechStack={selectedFrontTechStack}
        setInputValue={setFrontInputValue}
      />

      <TechstackBox
        type="back"
        filteredSkill={filteredBackSkill}
        handleAddSkill={handleAddSkill}
        handleRemoveSkill={handleRemoveSkill}
        inputValue={backInputValue}
        selectedTechStack={selectedBackTechStack}
        setInputValue={setBackInputValue}
      />

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
