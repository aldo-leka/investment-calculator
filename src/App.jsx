import Header from "./components/Header.jsx";
import UserInputs from "./components/UserInputs.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

const INITIAL_STATE = {
    InitialInvestment: 10000,
    AnnualInvestment: 0,
    ExpectedReturn: 4,
    Duration: 1
}

function App() {
    const [initialInvestment, setInitialInvestment] = useState(INITIAL_STATE.InitialInvestment);
    const [annualInvestment, setAnnualInvestment] = useState(INITIAL_STATE.AnnualInvestment);
    const [expectedReturn, setExpectedReturn] = useState(INITIAL_STATE.ExpectedReturn);
    const [duration, setDuration] = useState(INITIAL_STATE.Duration);

    function onInitialInvestmentChange(newValue) {
        setInitialInvestment(newValue);
    }

    function onAnnualInvestmentChange(newValue) {
        setAnnualInvestment(newValue);
    }

    function onExpectedReturnChange(newValue) {
        setExpectedReturn(newValue);
    }

    function onDurationChange(newValue) {
        setDuration(newValue);
    }

    return (
        <main>
            <Header/>
            <UserInputs
                initialValues={INITIAL_STATE}
                onInitialInvestmentChange={onInitialInvestmentChange}
                onAnnualInvestmentChange={onAnnualInvestmentChange}
                onExpectedReturnChange={onExpectedReturnChange}
                onDurationChange={onDurationChange}
            />
            <Result
                initialInvestment={initialInvestment}
                annualInvestment={annualInvestment}
                expectedReturn={expectedReturn}
                duration={duration}
            />
        </main>
    );
}

export default App
