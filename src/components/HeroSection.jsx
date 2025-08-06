
export default function HeroSection() {
    return (
        <div className="h-[400px] flex flex-row justify-between text-blue-600 p-5 text-center">
            <div className="p-5 w-3/5 items-start">
                <h1 className="text-4xl font-bold">Welcome to Learn Question</h1>
                <p className="text-lg mt-5">
                    Where we ensure to explain every topic so that you can be able to understand any question  related to that topic
                </p>
            </div>
            <div className="p-2.5 w-2/5 flex justify-center items-center">
                <img src="https://s39613.pcdn.co/wp-content/uploads/2025/04/iStock-1497617080-scaled.jpg" alt="Hero" className="mt-5 rounded-lg w-[300px] h-[400px]" />
            </div>
        </div>
    );
}