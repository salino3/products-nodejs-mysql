import React from "react";
import { MyState } from "./interface";


export const GlobalContext = React.createContext<MyState>({} as MyState);
