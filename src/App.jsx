import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from './components/Navbar'
import Dash from './components/Dash'
import JudgePage from './pages/JudgePage'
import LawyerPage from './pages/LawyerPage'
import GuestPage from './pages/GuestPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import AllDataPage from "./pages/AllDataPage";

export default function Home() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Dash/>} />
      <Route path="/judge" element={<JudgePage />} />
      <Route path="/lawyer" element={<LawyerPage />} />
      <Route path="/guest" element={<GuestPage />} />
      <Route path="/jury" element={<AllDataPage />} />
    </Routes>

    
    </>
  );
}
