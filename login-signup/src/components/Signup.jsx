const Signup = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
        <p className="text-gray-500 mt-2">Please enter your details</p>
      </div>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Last Name"
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Create a password"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Re-Enter Password</label>
          <input
            type="password"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Re-Enter Created password"
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Create account
        </button>
      </form>
    </div>
  )
}

export default Signup