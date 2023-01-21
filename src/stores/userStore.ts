import { create } from "zustand";

type UserStoreType = {
  name: string;
  setName: (by: string) => void;
};

export const useUserStore = create<UserStoreType>()((set) => ({
  name: "",
  setName: (by: string) => set((state) => ({ name: by })),
}));
