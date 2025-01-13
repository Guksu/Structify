import { removeChainSpace } from "@/utils/removeSpace";
import { create } from "zustand";

type State = {
  title: string;
  from: Date;
  to: Date;
  description: string;
};

type Actions = {
  setTitle: (title: string) => void;
  setFrom: (from: Date) => void;
  setTo: (from: Date) => void;
  setDescription: (description: string) => void;
  reset: () => void;
};

const infoStore = create<State & Actions>((set) => ({
  title: "",
  from: new Date(),
  to: new Date(),
  description: "",
  setTitle: (title: string) =>
    set({
      title: removeChainSpace(title),
    }),
  setFrom: (from: Date) => {
    if (from > infoStore.getState().to) {
      return set({ from: infoStore.getState().to });
    } else {
      return set({ from });
    }
  },
  setTo: (to: Date) => {
    if (to < infoStore.getState().from) {
      return set({ to: infoStore.getState().from });
    } else {
      return set({ to });
    }
  },
  setDescription: (description: string) =>
    set({ description: removeChainSpace(description) }),
  reset: () =>
    set({
      title: "",
      from: new Date(),
      to: new Date(),
      description: "",
    }),
}));

export default infoStore;
