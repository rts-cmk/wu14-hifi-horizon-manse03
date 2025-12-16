import './sass/login.scss';

const Login = () => {
  return (
    <section className="login-page">
      <h1 className="login-page__title">LOGIN</h1>

      <div className="login-page__grid">

        {/* REGISTERED CUSTOMERS */}
        <div className="login-box">
          <h2 className="login-box__title">REGISTERED CUSTOMERS</h2>
          <p className="login-box__subtitle">
            If you have an account, sign in with your email address.
          </p>

          <form className="login-form">
            <label>
              Email <span>*</span>
              <input type="email" />
            </label>

            <label>
              Password <span>*</span>
              <input type="password" />
            </label>

            <div className="login-form__options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button type="submit" className="login-form__btn">
              Sign in
            </button>

            <a href="#" className="login-form__forgot">
              Forgot your Password?
            </a>
          </form>
        </div>

        {/* NEW CUSTOMER */}
        <div className="login-box login-box--center">
          <h2 className="login-box__title">NEW CUSTOMER</h2>
          <p className="login-box__subtitle">
            Creating an account has many benefits: check out faster,
            track orders and more.
          </p>

          <button className="login-box__create-btn">
            Create an Account
          </button>
        </div>

      </div>
    </section>
  );
};

export default Login;
