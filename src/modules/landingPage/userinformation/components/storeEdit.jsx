import { create } from "zustand";

const useEdit = create((set) => ({
  editComponentId: 0,

  setId: (id) => set((state) => ({ editComponentId: id })),
}));

export default useEdit;
