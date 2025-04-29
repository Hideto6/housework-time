// /contexts/HouseworkContext.tsx
import React, { createContext, useState, useContext } from 'react';

const HouseworkContext = createContext(null);

export const HouseworkProvider = ({ children }) => {
  const [houseworkList, setHouseworkList] = useState([]);

  return (
    <HouseworkContext.Provider value={{ houseworkList, setHouseworkList }}>
      {children}
    </HouseworkContext.Provider>
  );
};

// カスタムフックで簡単に使えるように
export const useHousework = () => useContext(HouseworkContext);
