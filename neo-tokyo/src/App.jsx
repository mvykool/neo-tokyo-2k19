import Home from "./components/Home"
import Error404 from './components/Error404'
import NavBar from "./components/NavBar"
import { Routes, Route} from 'react-router-dom'
import PopularPage from "./pages/PopularPage"
import LatestPage from "./pages/LatestPage"
import SearchPage from "./pages/SearchPage"


function App() {
 

  return (
    <div className="App">
       <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/popular" element={<PopularPage/>}/>
        <Route path="/latest" element={<LatestPage/>}/>
        <Route path="/search/:searchTerm" element={<SearchPage/>}/>
       </Routes>
    </div>
  )
}

export default App
