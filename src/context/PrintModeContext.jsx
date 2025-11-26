import { createContext, useContext } from 'react';

export const PrintModeContext = createContext(false);

export const usePrintMode = () => useContext(PrintModeContext);

