const coursesTitleArray:string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
function App() {

    return (
        <ul className="flex flex-col gap-[40px] justify-center w-100 items-center mt-20
mx-auto p-[20px] text-xl bg-sky-200 shadow-xl rounded-xl">
            {coursesTitleArray.map((value, index) => (
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 cursor-pointer transition duration-200 ease-in-out" key={index}>
                    {value}
                </li>
            ))}
        </ul>
    );
}

export default App
