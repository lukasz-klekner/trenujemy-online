const Form = () => (
    <form action="#" method="POST">
        <div className="personal-details">
            <input className="input" type="text" name="name" placeholder="First name..." />
            <input className="input" type="text" name="surname" placeholder="Last name..." />
        </div>
        <input className="full-input" type="email" name="email" placeholder="Email address..." />
        <input className="full-input" type="password" name="password" placeholder="Password..." />
        <label className="label">
            <input className="agreement" type="checkbox" name="agree" />
            <span>I have read the <a className="special" href="#">Terms & Conditions</a></span>
        </label>
        <button className="button">Zarejestruj się za darmo</button>
    </form>
)

export default Form;