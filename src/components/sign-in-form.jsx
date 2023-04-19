import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../utils/firebase";
import FormInput from "./form-input";
import "./sign-in-form.scss";
import Button from "./button";

import { UserContext } from "../contexts/user-context";

const SignInForm = ({ onClickHandler }) => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFielnd = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFielnd();
    } catch (err) {
      if (err.code == "auth/wrong-password") {
        alert("wrong password");
      } else if (err.code == "auth/user-not-found") {
        alert("user not found");
      }
      console.log(err);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button
            type="submit"
            children="Sign In"
            className="button-container"
          />
          <Button
            type="button"
            children="Google sign in"
            className="button-container google-sign-in"
            onClick={onClickHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
