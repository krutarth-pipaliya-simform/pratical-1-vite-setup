import { useState } from "react";

function App() {
    const [name] = useState("Krutarth Pipaliya");
    const [email] = useState("krutarth.pipaliya@simformsolutions.com");
    const [githubURL] = useState(
        "https://github.com/krutarth-pipaliya-simform",
    );
    const [intro] = useState("still figuring out");
    return (
        <>
            <div>My name is {name}</div>
            <div>
                My email is <a href={"mailto:" + email}>{email}</a>
            </div>
            <div>
                My github URL is <a href={githubURL}>{githubURL}</a>
            </div>
            <div>My intro is {intro}</div>
        </>
    );
}

export default App;
