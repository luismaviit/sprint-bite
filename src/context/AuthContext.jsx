import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [shoppingCard, setShoppingCard] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        shoppingCard,
        setShoppingCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
