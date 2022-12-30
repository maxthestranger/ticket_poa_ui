function ContactForm() {
  return (
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
        <label
          htmlFor="phone"
          className="block text-base font-bold text-dark mb-5"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter your phone"
          className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
        />
      </div>
      <div className="mb-7">
        <label
          htmlFor="password"
          className="block text-base font-bold text-dark"
        >
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
        />
      </div>
      <div className="mb-7">
        <label
          htmlFor="confirm"
          className="block text-base font-bold text-dark"
        >
          Confirm confirm <span className="text-red-500">*</span>
        </label>
        <input
          type="confirm"
          name="confirm"
          id="confirm"
          placeholder="Confirm your password"
          className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
        />
      </div>
      <div className="mb-7">
        <button
          type="submit"
          className="bg-primary text-base font-bold py-3.5 w-full text-dark rounded-[6px] transition-all delay-75 ease-in hover:bg-orange-300"
        >
          Sign up
        </button>
      </div>
      <p className="text-dark text-base font-medium">
        Already have an account?{" "}
        <a
          href="/"
          className="font-bold text-primary text-base hover:underline"
        >
          Sign in here
        </a>
      </p>
    </form>
  );
}

export default ContactForm;
