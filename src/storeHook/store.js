import { create } from "zustand";

export const useFilters = create((set) => ({
  filters: "filters",
  setFilter: (filters) => set(filters),
}));
