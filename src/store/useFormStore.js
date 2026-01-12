import { create } from 'zustand';

export const useFormStore = create((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    skills: "",
  },
  
  // Updates only the fields passed to it (merges with existing data)
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),

  // Clears the form after submission
  resetForm: () => set({ 
    formData: { 
      firstName: "", 
      lastName: "", 
      email: "", 
      experience: "", 
      skills: "" 
    } 
  })
}));