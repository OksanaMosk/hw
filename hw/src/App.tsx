import './App.css'
import MyComponent from "./components/MyComponent";

function App() {

    return (
        <div>
            {/*<MyComponent title={"tailwindcssTEST"}/>*/}

            <MyComponent title={"tailwindcssTEST"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, repellendus!</MyComponent>


            <h1 className="text-pink-600 text-6xl font-bold bg-black p-8 rounded-lg">
                🔥 Tailwind працює! 🔥
            </h1>
        </div>
    )
}

export default App
