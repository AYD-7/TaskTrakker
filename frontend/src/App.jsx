import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Tasks from "./pages/Tasks"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Home />
      {/* <Footer />  */}
    </div>

    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />}/>
    //     <Route path='/tasks' element={<Tasks />}/>
    //     <Route path='/*' element={<NotFound />}/>

    //   </Routes>
    // </Router>
  );
}

export default App
