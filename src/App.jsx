import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import './App.css'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Contact />
        </div>
    )
}

export default App