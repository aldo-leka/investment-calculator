import UserInput from "./UserInput.jsx";

export default function UserInputs() {
    return (
        <div id="user-input">
            <div className="input-group">
                <UserInput title="INITIAL INVESTMENT" />
                <UserInput title="ANNUAL INVESTMENT" />
            </div>
            <div className="input-group">
                <UserInput title="EXPECTED RETURN" />
                <UserInput title="DURATION" />
            </div>
        </div>
    );
}