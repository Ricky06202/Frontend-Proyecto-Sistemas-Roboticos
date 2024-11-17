import { create } from "zustand";

const useEdit = create((set) => ({
  editShow: false,
  editComponentId: 0,
  editChange: () => set((state) => ({ editShow: !editEdit })),
  setId: (id) => set((state) => ({ editComponentId: id })),
}));

export default useEdit;
