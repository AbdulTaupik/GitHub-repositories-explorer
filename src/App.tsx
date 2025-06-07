import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className=' flex justify-center pt-10 sm:pt-20'>
            <div className='max-w-2xl w-full min-h-10 flex flex-col justify-center '>
                <h2 className='text-xl sm:text-2xl text-gray-600 sm:text-white text-center mb-10'>
                    Search username from <b>Github</b>
                </h2>
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
