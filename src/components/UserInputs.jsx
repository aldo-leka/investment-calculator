import UserInput from "./UserInput.jsx";

export default function UserInputs({initialValues, onInitialInvestmentChange, onAnnualInvestmentChange, onExpectedReturnChange, onDurationChange}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <UserInput
                    title="INITIAL INVESTMENT"
                    initialValue={initialValues.InitialInvestment}
                    onChangeValue={onInitialInvestmentChange}
                />
                <UserInput
                    title="ANNUAL INVESTMENT"
                    initialValue={initialValues.AnnualInvestment}
                    onChangeValue={onAnnualInvestmentChange}
                />
            </div>
            <div className="input-group">
                <UserInput
                    title="EXPECTED RETURN"
                    initialValue={initialValues.ExpectedReturn}
                    onChangeValue={onExpectedReturnChange}
                />
                <UserInput
                    title="DURATION"
                    initialValue={initialValues.Duration}
                    onChangeValue={onDurationChange}
                />
            </div>
        </div>
    );
}