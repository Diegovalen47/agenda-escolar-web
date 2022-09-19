import { useState } from 'react'
import './App.css'
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { Navbar } from './components/Navbar/Navbar';
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./utilities/trpc";


function AppConfig() {

  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => 
    trpc.createClient({
      url: 'http://localhost:4000/trpc'
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  )
}


function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Container>
    </>
  )
}

export default AppConfig
