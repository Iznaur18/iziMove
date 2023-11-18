import "./form.css";

import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form">
      <div className="container">
        <form className="form__content">
          <div className="form__body">
            <div className="form__title title-2">Leave a request</div>
            <div className="form__row">
              <input
                className="form__input"
                onChange={(e) => emailHandler(e)}
                value={email}
                name="nickname"
                type="text"
                placeholder="Enter your telegran nickname"
              />
              <input
                className="form__input"
                onChange={(e) => passwordHandler(e)}
                value={password}
                name="phone number"
                type="number"
                placeholder="Enter your phone number"
              />
               <textarea
                className="form__textarea"
                onChange={(e) => passwordHandler(e)}
                value={password}
                name="phone number"
                type="number"
                placeholder="Enter your phone number"
              />
            <a className="form__btn" type="submit">Submit</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
