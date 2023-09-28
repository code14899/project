import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from './components/Navbar'
import Dash from './components/Dash'
import JudgePage from './pages/JudgePage'
import LawyerPage from './pages/LawyerPage'
import { Route, Routes, Navigate } from 'react-router-dom'

export default function Home() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Dash/>} />
      <Route path="/judge" element={<JudgePage />} />
      <Route path="/lawyer" element={<LawyerPage />} />
    </Routes>

    
    </>
  );
}
