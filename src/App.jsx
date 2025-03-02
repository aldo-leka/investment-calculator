import logo from './assets/investment-calculator-logo.png';

function App() {
    return (
        <>
            <header id="header">
                <img src={logo} alt="logo"/>
                <h1>Investment Calculator</h1>
            </header>
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label>INITIAL INVESTMENT</label>
                        <input type="number"/>
                    </div>
                    <div>
                        <label>ANNUAL INVESTMENT</label>
                        <input type="number"/>
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label>EXPECTED RETURN</label>
                        <input type="number"/>
                    </div>
                    <div>
                        <label>DURATION</label>
                        <input type="number"/>
                    </div>
                </div>
            </div>
            <div id="result">
                <table>
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </>
    );
}

export default App
