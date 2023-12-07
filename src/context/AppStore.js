import { create } from 'zustand'

export const useAppStore = create(set => ({
  activeNote: {},
  setActiveNote: activeNote => set({ activeNote }),
  notes: [],
  setNotes: notes => set({ notes }),
  addNote: (id, title, content) =>
    set(state => ({ notes: [...state.notes, { id, title, content }] }))
}))
