import { Route, Routes } from "react-router";
import Header from "./components/Header"
import Anasayfa from "./components/Anasayfa";
import Cevaplar from "./components/Cevaplar"
import Alışveriş from './components/Alışveriş'
import Ünite1 from './components/Ünite1'
import Ünite2 from './components/Ünite2'
import Ünite3 from './components/Ünite3'
import Ünite4 from './components/Ünite4'
import Ünite5 from './components/Ünite5'
import Ünite6 from './components/Ünite6'
import Ünite7 from './components/Ünite7'
import Ünite8 from './components/Ünite8'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
          <Route exact path="/" element={<Anasayfa/>} />
          <Route exact path="/Anasayfa" element={<Anasayfa/>} />
          <Route path="/Cevaplar" element={<Cevaplar/>} />
          <Route path="/Alışveriş" element={<Alışveriş />} />
          <Route path="/Ünite1" element={<Ünite1 />} />
          <Route path="/Ünite2" element={<Ünite2 />} />
          <Route path="/Ünite3" element={<Ünite3 />} />
          <Route path="/Ünite4" element={<Ünite4 />} />
          <Route path="/Ünite5" element={<Ünite5 />} />
          <Route path="/Ünite6" element={<Ünite6 />} />
          <Route path="/Ünite7" element={<Ünite7 />} />
          <Route path="/Ünite8" element={<Ünite8 />} />
      </Routes>
    </div> 
  );
}

export default App;
