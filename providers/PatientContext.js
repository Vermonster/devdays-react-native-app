import React, { useState } from 'react';
import Client from 'fhir-kit-client';

const client = new Client({ baseUrl: "https://r4.smarthealthit.org" });

const PatientContext = React.createContext([{}, () => {}]);

const PatientContextProvider = ({ children }) => {
  const [state, setState] = useState({ client });

  return (
    <PatientContext.Provider value={[state, setState]}>
      {children}
    </PatientContext.Provider>
  );
};

export { PatientContext, PatientContextProvider };
