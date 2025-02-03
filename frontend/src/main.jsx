import React from "react";
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import {ChainId , ThirdwebProvider} from "@thirdweb-dev/react"
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App';
import './index.css';
import { StateContextProvider } from "./web3";
const root = createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider 
        clientId="78d021e0dbfe24def0e49591c3d61e7b"
        activeChain={Sepolia} 
    >
        <Router>
            <StateContextProvider>
                 <App/>
            </StateContextProvider>
        </Router>

    </ThirdwebProvider>
);