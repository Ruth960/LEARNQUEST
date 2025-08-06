export default function SignUpPage() {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900">Sign Up</h1>
            <div className="mt-8 max-w-md mx-auto">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password" aclassName="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}