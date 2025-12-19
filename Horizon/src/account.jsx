import './sass/account.scss';

const Account = () => {
  return (
    <section className="login-page">
      <h1 className="login-page__title">CREATE AN ACCOUNT</h1>

      <div className="login-page__grid">

        {/* REGISTERED CUSTOMERS */}
        <div className="login-box">

          <form className="login-form">
            <label>
              Full name <span>*</span>
              <input type="email" />
            </label>

            <label>
              Address <span>*</span>
              <input type="address" />
            </label>

            <label>
              Address - line 2 <span>*</span>
              <input type="address" />
            </label>

            <label>
              Zip-code <span>*</span>
              <input type="code" />
            </label>

            <label>
              City <span>*</span>
              <input type="city" />
            </label>

            <label>
              Country <span>*</span>
              <input type="country" />
            </label>

            <label>
              Phone number <span>*</span>
              <input type="tel" />
            </label>

            <label>
              Email <span>*</span>
              <input type="email" />
            </label>

            <label>
              Password <span>*</span>
              <input type="password" />
            </label>

            <label>
              Repeat password <span>*</span>
              <input type="password" />
            </label>

            <div className="login-form__options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button type="submit" className="login-form__btn">
              Create an Account
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Account;
