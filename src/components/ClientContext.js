import React from 'react';
import uuid from "react-uuid";

export const ClientContext = React.createContext({
    id: uuid()
});
