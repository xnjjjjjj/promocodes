import React from 'react'
import './App.css'
import Header from 'src/components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer/Footer'
import { createContext } from 'react'


type AuthContextType = {
  isAuth:boolean, 
  setIsAuth: (auth:boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false, 
  setIsAuth: () => {}
})

function App() {
  const [isAuth, setIsAuth] = React.useState<boolean>(false)
  
  return (
      <div className="app">
        <AuthContext.Provider value ={{isAuth, setIsAuth}}>
          <Header />
          <main>
            <MainRoutes />
          </main>
          <Footer />
        </AuthContext.Provider>
      </div>
    
  )
}

export default App