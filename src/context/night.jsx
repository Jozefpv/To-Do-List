import { createContext, useState } from "react";

export const NightContext = createContext()

export function NightProvider({ children }) {
    const [night, setNight] = useState(true)

    const darkLight = () => {
        if(night===false){
            return {
                backgroundColor: "white",
                color: "black"
            }
        } else{
            return {
                backgroundColor: "black",
                color: "white"
            }
        }
    }

    return (
        <NightContext.Provider value={{ setNight, darkLight, night }}>
            {children}
        </NightContext.Provider>
    )
}