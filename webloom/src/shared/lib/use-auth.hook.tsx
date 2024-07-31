import { useEffect } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useRouter } from "next/navigation";
import { User } from "@/types/object";
import { Server } from "@/service/api";

interface AuthenticationStore {
  user?: User;
  setUser: (user: User) => void;
  logout: () => void;
}

const useStore = create(
  persist<AuthenticationStore>(set => ({
    setUser: user => set({ user }),
    logout: () => {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      set({ user: undefined });
    }
  }), {
    name: 'user-store',
    storage: createJSONStorage(() => localStorage),
  })
)

const useAuth = () => {
  const store = useStore();
  const { setUser, user, logout } = store;
  const router = useRouter();

  const login = (user: User) => {
    setUser(user);
  };

  const logoutWrapper = async () => {
    logout();
  };

  const getUserOnServer = async () => {
    try {
      const userData = await Server.User.get();
      setUser(userData);
    } catch (error) {
      logoutWrapper();
      console.error(error);
      router.push('/');
    }
  };

  useEffect(() => {
    const access = localStorage.getItem('access');
    if (!access) return;
    if (user) return;
    getUserOnServer();
  }, []);

  return {
    ...store,
    login,
    logout: logoutWrapper,
    refresh: getUserOnServer,
  };
};

export default useAuth;
