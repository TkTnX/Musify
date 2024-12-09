import { UserWithDependencies } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface UserStoreType {
  user: UserWithDependencies | null;
  loading: boolean;
  error: boolean;
  fetchUser: () => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  loading: false,
  error: false,
  fetchUser: async () => {
    try {
      set({ error: false, loading: true });

      const user = await axios.get("/api/user");

      if (!user) throw new Error("User not found");

      set({ user: user.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
