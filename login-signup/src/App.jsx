import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import ToggleButton from './components/ToggleButton'
import ForgotPassword from './components/ForgotPassword'
import { useState } from 'react'

function App() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentComponent, setCurrentComponent] = useState('login')

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleSignup = () => {
    setIsFlipped(true)  
    setCurrentComponent('signup')
  }

  const handleForgotPassword = () => {
    setCurrentComponent('forgot')
  }

  const handleBackToLogin = () => {
    setCurrentComponent('login')
    setIsFlipped(false)  
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="absolute top-6 m-auto">
        <ToggleButton 
          isChecked={isFlipped} 
          onChange={handleFlip}
        />
      </div>
      <div className="relative w-[400px] h-[600px] group perspective">
        {currentComponent === 'forgot' ? (
          <div className="absolute w-full h-full">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full overflow-y-auto">
              <ForgotPassword onBackToLogin={handleBackToLogin} />
            </div>
          </div>
        ) : (
          <div className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className="absolute w-full h-full backface-hidden">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full overflow-y-auto">
                <Login 
                  onForgotPassword={handleForgotPassword}
                  switchPage={handleSignup}
                />
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full overflow-y-auto">
                <Signup onBackToLogin={handleBackToLogin} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
