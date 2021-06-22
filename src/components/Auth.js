import classes from "./Auth.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailIsValid] = useState(false);
  const [passwordValid, setPasswordIsValid] = useState(false);

  const dispatch = useDispatch();

  const emailChangeHandler = (event) => {
    let emailValue = event.target.value;
    setEmail({ email: emailValue });
  };

  const passwordChangeHandler = (event) => {
   let passwordValue = event.target.value;
   setPassword({password: passwordValue})
  };

  const authHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={emailChangeHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
            />
          </div>
          <button onClick={authHandler}> Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
