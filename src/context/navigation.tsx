import React, { createContext, ReactNode, useEffect, useState } from "react";

type NavigationValue = { currentPath: string; navigate: (to: string) => void };
export const navigationContext = createContext<NavigationValue>({} as NavigationValue);
function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    // popstate only fires on back/forward links and a links
    // does not get triggered by window.history.pushState
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <navigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </navigationContext.Provider>
  );
}

export default NavigationProvider;
