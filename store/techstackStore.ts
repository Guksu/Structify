import { TechStack } from "@/constants/techstack";
import { create } from "zustand";

type State = {
  selectedFrontTechStack: Array<TechStack>;
  selectedBackTechStack: Array<TechStack>;
};

type Actions = {
  setFrontTechStack: (frontTechStack: Array<TechStack>) => void;
  setBackTechStack: (backTechStack: Array<TechStack>) => void;
};

const techstackStore = create<State & Actions>((set) => ({
  selectedFrontTechStack: [],
  selectedBackTechStack: [],
  setFrontTechStack: (selectedFrontTechStack) =>
    set({ selectedFrontTechStack }),
  setBackTechStack: (selectedBackTechStack) => set({ selectedBackTechStack }),
}));

export default techstackStore;
