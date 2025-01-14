import { TechStack } from "@/constants/techstack";
import { Dispatch, SetStateAction } from "react";

interface Props {
  type: "front" | "back";
  selectedTechStack: Array<TechStack>;
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
  handleRemoveSkill: (skill: TechStack) => void;
  handleAddSkill: (skill: TechStack) => void;
  filteredSkill: Array<TechStack>;
}

export default function TechstackBox({
  filteredSkill,
  handleAddSkill,
  handleRemoveSkill,
  inputValue,
  selectedTechStack,
  setInputValue,
  type,
}: Props) {
  return (
    <>
      <label className="block text-gray-700 font-medium mb-2">
        {type === "front" ? "Frontend" : "Backend"}
      </label>
      <p className="text-gray-500 text-sm mb-4">
        select the {type === "front" ? "Frontend" : "Backend"} techstack you
        want to use
      </p>
      <div className="border border-gray-300 rounded-lg p-2 flex flex-wrap items-center gap-2">
        {selectedTechStack.map((skill) => (
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {inputValue && (
        <ul className="border border-gray-300 rounded-lg mt-2 max-h-40 overflow-y-auto">
          {filteredSkill.map((tech) => (
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
    </>
  );
}
