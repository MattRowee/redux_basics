import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [emailValid, setEmailIsValid] = useState(false);
  // const [passwordValid, setPasswordIsValid] = useState(false);

  const dispatch = useDispatch();

  // const emailChangeHandler = (event) => {
  //   let emailValue = event.target.value;
  //   setEmail({ email: emailValue });
  // };

  // const passwordChangeHandler = (event) => {
  //  let passwordValue = event.target.value;
  //  setPassword({password: passwordValue})
  // };

  const authHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <button onClick={authHandler}> Login</button>
        </form>
      </section>
    </main>
  );
};


export default Auth;
