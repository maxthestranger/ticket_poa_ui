function DetailsForm() {
  return (
    <form>
      <div className="mb-7">
        <label
          htmlFor="company"
          className="block text-base font-bold text-dark mb-5"
        >
          Company name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Enter your company name"
          className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
        />
      </div>
      <p className="font-bold text-dark mb-5">Individual name</p>
      <div className="mb-7 flex items-center justify-between gap-4">
        <div>
          <label
            htmlFor="f_name"
            className="block text-base font-bold text-dark mb-5"
          >
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="f_name"
            id="f_name"
            placeholder="Enter your first name"
            className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
          />
        </div>
        <div>
          <label
            htmlFor="l_name"
            className="block text-base font-bold text-dark mb-5"
          >
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="l_name"
            id="l_name"
            placeholder="https://tripadvisor.com"
            className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
          />
        </div>
      </div>
      <div className="mb-7">
        <label
          htmlFor="company"
          className="block text-base font-bold text-dark mb-5"
        >
          Country <span className="text-red-500">*</span>
        </label>
        <select
          name="country"
          id="country"
          placeholder="Select country"
          className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
        >
          <option value="1">United States</option>
          <option value="2">United Kingdom</option>
          <option value="3">Canada</option>
          <option value="4">Australia</option>
          <option value="5">New Zealand</option>
        </select>
      </div>
      <div className="mb-7 flex items-center justify-between gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-base font-bold text-dark mb-5"
          >
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
          />
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-base font-bold text-dark mb-5"
          >
            Postal code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="zip"
            id="zip"
            placeholder="Enter ZIP code"
            className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
          />
        </div>
      </div>
      <div className="mb-7">
        <button
          type="submit"
          className="bg-primary text-base font-bold py-3.5 w-full text-dark rounded-[6px] transition-all delay-75 ease-in hover:bg-orange-300"
        >
          Review your details
        </button>
      </div>
      <a href="/" className="font-bold text-primary text-base hover:underline">
        Back
      </a>
    </form>
  );
}

export default DetailsForm;
