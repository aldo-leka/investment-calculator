import Header from "./components-academind/Header.jsx";
import UserInput from "./components-academind/UserInput.jsx";
import {useState} from "react";
import Result from "./components/Result.jsx";
import Results from "./components-academind/Results.jsx";

function AppAcademind() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }

    return (
        <>
            <Header/>
            <UserInput userInput={userInput} onChange={handleChange} />
            {!inputIsValid && <p className="center">Please enter a valid duration.</p>}
            {inputIsValid && <Results input={userInput} />}
        </>
    );
}

export default AppAcademind;