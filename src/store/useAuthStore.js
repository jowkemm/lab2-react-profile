import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // 1. นำเข้า persist

export const useAuthStore = create(
  persist( // 2. ครอบฟังก์ชันด้วย persist
    (set) => ({
      user: null, // Initial state: not logged in

      // Simulate login
      login: (userData) => set({ user: userData }),

      // Simulate logout
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage', // 3. ตั้งชื่อ key ที่จะถูกบันทึกลงใน localStorage
    }
  )
);