import Navbar from './components/Navbar'
import './App.css'

function App() {
    return (
        <div className="App">
            <Navbar />

            {/* Main content with clean layout */}
            <main className="main-content">
                <section className="hero-section">
                    <h1>Welcome to CampusConnect</h1>
                    <p>Your campus connection platform</p>
                </section>
            </main>
        </div>
    )
}

export default App