import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar />
    <div className=" relative w-screen"> <Manager /> </div>
    <Footer />
    </>
  )
}

export default App
