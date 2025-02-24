import { useState } from 'react'
import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setCurrentForm('login')}
                className={`px-6 py-2 rounded-md ${currentForm === 'login' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setCurrentForm('signup')}
                className={`px-6 py-2 rounded-md ${currentForm === 'signup' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              >
                Signup
              </button>
            </div>
          </div>
          
          {currentForm === 'login' && <Login setCurrentForm={setCurrentForm} />}
          {currentForm === 'signup' && <Signup setCurrentForm={setCurrentForm} />}
          {currentForm === 'forgot' && <ForgotPassword setCurrentForm={setCurrentForm} />}
        </div>
      </div>
    </div>
  )
}

export default App
