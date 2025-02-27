const Login = ({ onForgotPassword, switchPage }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-500 mt-2">Please enter your details</p>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-blue-600" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button 
            type="button" 
            onClick={() => onForgotPassword()} 
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Forgot password?
          </button>
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Sign in
        </button>
        
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button 
            type="button"
            onClick={() => switchPage('signup')}
            className="text-blue-600 hover:text-blue-500"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login