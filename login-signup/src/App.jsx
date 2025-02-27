import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import ToggleButton from './components/ToggleButton'
import { useState } from 'react'

function App() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      {/* Toggle Button */}
      <div className="absolute top-8 right-8">
        <ToggleButton 
          isChecked={isFlipped} 
          onChange={handleFlip}
        />
      </div>

      {/* Flip Card Container */}
      <div className="relative w-[400px] h-[500px] group perspective">
        {/* Card */}
        <div className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front - Login */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <Login />
              <button 
                onClick={handleFlip}
                className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up →
              </button>
            </div>
          </div>

          {/* Back - Signup */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <Signup />
              <button 
                onClick={handleFlip}
                className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                ← Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
