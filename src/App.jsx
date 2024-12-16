import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ArticleList from './Components/ArticleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/article-list' element={<ArticleList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
