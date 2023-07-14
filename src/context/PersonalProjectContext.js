import { createContext, useEffect, useState } from "react";

export const PersonalProjectContext = createContext(null);

export default function PersonalProjectContextProvider({children}) {
    
    const [projectLink, setProjectLink] = useState("");
    const [previous, setPrevious] = useState("");

    useEffect(() => {
        console.log("project link: " + projectLink);
        console.log("previous link: " + previous);

    }, [projectLink, previous]);

    const data = {
        projectLink,
        setProjectLink,
        previous,
        setPrevious
    }

    return (
        <PersonalProjectContext.Provider value={data}>
            {children}
        </PersonalProjectContext.Provider>
    );
}