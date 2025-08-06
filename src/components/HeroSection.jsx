export default function HeroSection() {
    return (
        <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
                Welcome to <span className="text-indigo-600">Learn Quest</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                Your ultimate destination for comprehensive learning materials and exam preparation. 
                We are dedicated to providing you with the resources you need to succeed.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a href="#" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 sm:px-8">
                        Get Started
                    </a>
                    <a href="#" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 sm:px-8">
                        Explore Features
                    </a>
                </div>
            </div>
        </div>
    );
}