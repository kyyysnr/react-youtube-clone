

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Top from './pages/Top'
import Search from './pages/Search'
import Watch from './pages/Watch'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Top />}/>
          <Route exact path="/search" element={<Search />}/>
          <Route exact path="/watch" element={<Watch />}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
