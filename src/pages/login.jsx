import logo from "../assets/img/icons/logo_footer.svg";

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col bg-secondary border-t-8 border-primary border-solid">
      <img src={logo} alt="logo" className="mx-auto mb-10" />
      <div className="bg-white text-dark rounded-[40px] mx-auto mt-5 p-16 min-w-[568px]">
        <h1 className="text-2xl text-dark font-bold mb-3 text-center">
          Agent Login
        </h1>
        <p className="mb-10 text-muted text-sm text-center mx-auto max-w-[246px]">
          To proceed, please login with your credentials
        </p>

        <form>
          <div className="mb-7">
            <label
              htmlFor="email"
              className="block text-base font-bold text-dark mb-5"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
            />
          </div>
          <div className="mb-7">
            <div className="flex items-center justify-between mb-5">
              <label
                htmlFor="password"
                className="block text-base font-bold text-dark"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <a
                href="forgot-password"
                className="font-bold text-primary text-base hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
            />
          </div>
          <div className="mb-7">
            <button
              type="submit"
              className="bg-primary text-base font-bold py-3.5 w-full text-dark rounded-[6px] transition-all delay-75 ease-in hover:bg-orange-300"
            >
              Sign in
            </button>
          </div>
          <p className="text-dark text-base font-medium">
            Not a partner yet?{" "}
            <a
              href="/sign-up"
              className="font-bold text-primary text-base hover:underline"
            >
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
