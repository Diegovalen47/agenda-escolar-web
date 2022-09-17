import { useState } from 'react'
import './App.css'
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./trpc";


function AppConfig() {

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  }))
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
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Container>
    </>
  )
}

export default AppConfig
