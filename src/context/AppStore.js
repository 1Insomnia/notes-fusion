import { create } from 'zustand'

export const useAppStore = create(set => ({
  visible: false,
  setVisible: visible => set({ visible }),
  activeNote: {},
  setActiveNote: activeNote => set({ activeNote })
}))
