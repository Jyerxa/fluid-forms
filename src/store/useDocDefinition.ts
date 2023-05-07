import {create} from 'zustand';

export interface DocDefinition {
    fields: string[];
    addField: (field: string) => void;
    removeField: (field: string) => void;
}

const useDocDefinition = create((set) => ({
    fields: [],
    addField: (field: string) => set((state: DocDefinition) => ({fields: [...state.fields, field]})),
    removeField: (field: string) => set((state: DocDefinition) => ({fields: state.fields.filter((f) => f !== field)}))
}));
