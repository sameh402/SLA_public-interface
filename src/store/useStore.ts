import { create } from 'zustand';

// Define the store's type
interface StoreState {
  count: number;
  isEgyptUser: boolean | null;
  increment: () => void;
  setEgyptUser: (value: boolean) => void;
}

// Create the store
export const useStore = create<StoreState>((set) => ({
  count: 0,
  isEgyptUser: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  setEgyptUser: (value) => set({ isEgyptUser: value }),
}));