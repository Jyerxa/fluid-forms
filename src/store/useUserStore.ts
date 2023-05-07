import {create} from 'zustand';

export interface UserStore {
    userName: string;
    setUserName: (user: string) => void;
    clearUserName: () => void;
}
export const useUserStore = create<UserStore>((set, get) => ({
    userName: '',
    setUserName: (userName: string) => set({userName}),
    clearUserName: () => set({userName: ''})
}));
