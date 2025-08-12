export default function Registration() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-100 transition-colors duration-300">
      <div className="w-full max-w-md p-6 bg-white dark:bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-black">
          Register Now
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-extrabold text-gray-900 dark:text-gray-900 mb-1"
            >
              Full Names
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
              placeholder="Enter your Names"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-extrabold text-gray-700 dark:text-gray-900 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-extrabold text-gray-700 dark:text-gray-900 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-extrabold text-gray-700 dark:text-gray-900 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200 cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
