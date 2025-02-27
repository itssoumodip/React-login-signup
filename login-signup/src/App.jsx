import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'

function App() {
  const currentPage = localStorage.getItem('currentPage') || 'login'

  const toggleForm = () => {
    const newPage = currentPage === 'login' ? 'signup' : 'login'
    localStorage.setItem('currentPage', newPage)
    window.location.reload()
  }

  const switchPage = (page) => {
    localStorage.setItem('currentPage', page)
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Toggle Switch Button */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-10 bg-gray-200 rounded-full p-1 cursor-pointer"
                   onClick={toggleForm}>
                <div className={`w-8 h-8 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                  currentPage === 'login' ? 'translate-x-0' : 'translate-x-14'
                }`}></div>
              </div>
              <span className={`absolute left-0 text-sm font-medium ${
                currentPage === 'login' ? 'text-blue-600' : 'text-gray-500'
              } -bottom-6`}>Login</span>
              <span className={`absolute right-0 text-sm font-medium ${
                currentPage === 'signup' ? 'text-blue-600' : 'text-gray-500'
              } -bottom-6`}>Signup</span>
            </div>
          </div>
          
          {/* Form Components */}
          {currentPage === 'login' && <Login switchPage={switchPage} />}
          {currentPage === 'signup' && <Signup switchPage={switchPage} />}
          {currentPage === 'forgot' && <ForgotPassword switchPage={switchPage} />}
        </div>
      </div>
    </div>
  )
}

export default App
