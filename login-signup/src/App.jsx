import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'

function App() {
  const currentPage = localStorage.getItem('currentPage') || 'login'

  const switchPage = (page) => {
    localStorage.setItem('currentPage', page)
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => switchPage('login')}
                className={`px-6 py-2 rounded-md ${currentPage === 'login' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              >
                Login
              </button>
              <button 
                onClick={() => switchPage('signup')}
                className={`px-6 py-2 rounded-md ${currentPage === 'signup' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              >
                Signup
              </button>
            </div>
          </div>
          
          {currentPage === 'login' && <Login switchPage={switchPage} />}
          {currentPage === 'signup' && <Signup switchPage={switchPage} />}
          {currentPage === 'forgot' && <ForgotPassword switchPage={switchPage} />}
        </div>
      </div>
    </div>
  )
}

export default App
