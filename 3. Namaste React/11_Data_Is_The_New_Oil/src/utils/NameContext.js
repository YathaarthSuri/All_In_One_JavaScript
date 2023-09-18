import { createContext } from 'react';

const NameContext = createContext({
  loggedInUser: 'Default Value',
});

export default NameContext;
