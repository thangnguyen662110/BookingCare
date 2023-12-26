import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

function AppUserProvider({ children }) {
  const [user, setUser] = useState({});

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

AppUserProvider.propTypes = {
  children: PropTypes.object,
};

export default AppUserProvider;
