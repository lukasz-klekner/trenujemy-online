import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [emial, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [aggrement, setAgreement] = useState(false);

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeSurname = (e) => setSurname(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeAgreement = (e) => setAgreement(e.target.checked);


    return (
    <form action="#" method="POST">
        <div className="personal-details">
            <input
                className="input"
                type="text" name="name"
                placeholder="First name..."
                value={name}
                onChange={handleChangeName}
            />
            <input
                className="input"
                type="text"
                name="surname"
                placeholder="Last name..."
                value={surname}
                onChange={handleChangeSurname}
            />
        </div>
        <input
            className="full-input"
            type="email"
            name="email"
            placeholder="Email address..."
            value={emial}
            onChange={handleChangeEmail}
            />
        <input
            className="full-input"
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={handleChangePassword}
            />
        <label className="label">
            <input
                className="agreement"
                type="checkbox"
                name="agree"
                checked={aggrement}
                onChange={handleChangeAgreement}
            />
            <span>I have read the <a className="special" href="#">Terms & Conditions</a></span>
        </label>
        <button className="button">Zarejestruj się za darmo</button>
    </form>
)
}

export default Form;