import { useContext, createContext, useState } from "react";

const user = createContext(null);

export default contextProvider = ({ childern }) => {
  const [user, setUser] = useState();

  return (
    <>
      <user.Provider value={{ user, setUser }}>childern</user.Provider>
    </>
  );
};

export const useUser = () => {
  const user = useContext(user);
  if (!user) throw new Error("useCounter must be used within CounterProvider");
  return user;
};
