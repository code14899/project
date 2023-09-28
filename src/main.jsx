import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import {BrowserRouter} from 'react-router-dom'
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={process.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
    <BrowserRouter>
      <App />
    </BrowserRouter>
      
    </ThirdwebProvider>
  </React.StrictMode>
);
