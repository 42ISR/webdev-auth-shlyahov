import { create } from "zustand";
import {createJSONStorege, persist } from "zustand/middleware"

export const useUserStore = create()(
persist(
    (set) => ({
    user: undefined,
    setUser: (user) => {
        set({user})
    },
    clearUser: () => {
        set ({user: undefined})
    },
}),
{
    name: "user-storege",
    storage: createJSONStorege(() =>
        localStorage),
},
),
)



