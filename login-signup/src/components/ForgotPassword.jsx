const ForgotPassword = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
        <p className="text-gray-500 mt-2">We'll send you reset instructions</p>
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
        
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Send Reset Link
        </button>
        
        <button type="button" className="w-full text-gray-600 py-3 rounded-lg hover:bg-gray-50 transition duration-200">
          Back to Login
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword