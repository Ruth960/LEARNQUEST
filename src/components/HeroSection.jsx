
export default function HeroSection() {
    return (
        <div >
            <div className="p-5 w-full align-start-end justify-center ">
                <h1 className="text-4xl font-bold">Welcome to Learn Quest</h1>
                <p className="text-2xl justify mt-5">
                    LearQuest is designed to transform how students  learn and prepare for exams. 
                    We're building a comprehensive platform with all the resources you need, right at your fingertips.
                </p>
                <div className="mt-5 justify-center flex gap-4">
                    <button className={'bg-green-600 text-white text-bold text-lg p-2 rounded-xl'} >Start Learning</button>
                    <button className={"text-blue-600 bg-white text-bold text-lg p-2 rounded-xl"}>Explore Features</button>
                </div>
            </div>
            
        </div>
    );
}