import { useState } from "react";
import styled from 'styled-components';

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
    <FitnessForm action="#" method="POST">
        <PersonalDetails>
            <Input
                type="text" name="name"
                placeholder="First name..."
                value={name}
                onChange={handleChangeName}
            />
            <Input
                type="text"
                name="surname"
                placeholder="Last name..."
                value={surname}
                onChange={handleChangeSurname}
            />
        </PersonalDetails>
        <FullInput
            type="email"
            name="email"
            placeholder="Email address..."
            value={emial}
            onChange={handleChangeEmail}
            />
        <FullInput
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={handleChangePassword}
            />
        <Label>
            <Agreement
                type="checkbox"
                name="agree"
                checked={aggrement}
                onChange={handleChangeAgreement}
            />
            <span>I have read the <Special href="#">Terms & Conditions</Special></span>
        </Label>
        <Button>Zarejestruj się za darmo</Button>
    </FitnessForm>
)
}

export default Form;

const FitnessForm = styled.form`
    width: 85%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const PersonalDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

const FullInput = styled.input`
    padding: 10px;
    padding-left: 20px;
    border-radius: 8px;
    border: 1px solid silver;
`

const Input = styled(FullInput)`
    width: 38%;
`
const Label = styled.label`
    display: flex;
    align-items: center;
`

const Agreement = styled.input`
    margin-right: 10px;
`

const Special = styled.a`
      border-bottom: 2px solid #413fb5;
    text-decoration: none;
    color: black;
    font-weight: 600;
`

const Button = styled.button`
    font-size: 1.15rem;
    padding: 10px;
    border-radius: 10px;
    background-color: #413fb5;
    border: 1px solid #413fb5;
    color: white;
`
