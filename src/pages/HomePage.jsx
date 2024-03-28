import Button from "../components/button";

const HomePage = () => {
    return (
        <>
        <div className='h-screen flex items-center justify-center flex-col'>
            <h1 className="text-3xl font-bold mb-2 ">Welcome To Password Manager</h1>
            <p className="mb-1">Check All Password Here</p>
            <Button isLink='true' to='/password' className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">View All Password</Button>  
        </div>  
        </>
    )
} 

export default HomePage;