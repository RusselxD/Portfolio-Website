import Profile from "./sections/Profile/Profile";
import Projects from "./sections/Projects/Projects";

function App() {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <Profile />
            <Projects />
        </div>
    );
}

export default App;
