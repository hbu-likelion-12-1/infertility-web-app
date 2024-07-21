import { createStore } from 'zustand';

interface StoreState {
    someState: string;
    someAction: () => void;
}

const useStore = createStore<StoreState>((set) => ({
    someState: 'Initial state',
    someAction: () => set({ someState: 'New state' }),
}));

export default useStore;
