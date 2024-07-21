import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    login: (email, password) => {
        // 실제 로그인 로직을 구현하세요.
        if (email === 'test@test.com' && password === 'password') {
            set({ isAuthenticated: true });
        } else {
            alert('Invalid credentials');
        }
    },
    logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
