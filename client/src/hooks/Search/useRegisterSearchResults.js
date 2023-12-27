import { create } from "zustand";

const useRegisterSearchResults = create((set) => ({
  searchResults: [],
  loading: false,
  setLoading: (isLoading) => set({ loading: isLoading }),
  setSearchResult: (newSearch) => set({ searchResults: newSearch }),
}));

export default useRegisterSearchResults;
