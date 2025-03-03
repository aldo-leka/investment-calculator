import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({initialInvestment, annualInvestment, expectedReturn, duration}) {
    const data = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration});
    return (
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
                <tbody>
                {data.map((item, index) =>
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td></td>
                        <td>{formatter.format(item.annualInvestment)}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}