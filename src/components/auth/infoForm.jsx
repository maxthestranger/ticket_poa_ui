function InfoForm() {
  return (
    <form>
      <div className="mb-7">
        <label
          htmlFor="categories"
          className="block text-base font-bold text-dark mb-5"
        >
          What type of activities do you offer?{" "}
          <span className="text-red-500">*</span>
        </label>
        <button
          type="button"
          id="categories"
          className="text-base font-bold text-primary border-none bg-transparent focus:outline-none"
        >
          Select the categories
        </button>
      </div>
      <div className="mb-7">
        <label
          htmlFor="socials"
          className="block text-base font-bold text-dark mb-5"
        >
          Add your websites or socials <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="socials"
          id="socials"
          placeholder="https://tripadvisor.com"
          className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
        />
      </div>
      <button type="submit" className="text-primary font-bold text-normal">
        Add another site
      </button>
      <div className="mb-7">
        <button
          type="submit"
          className="bg-primary text-base font-bold py-3.5 w-full text-dark rounded-[6px] transition-all delay-75 ease-in hover:bg-orange-300"
        >
          Next
        </button>
      </div>
      <a href="/" className="font-bold text-primary text-base hover:underline">
        Back
      </a>
    </form>
  );
}

export default InfoForm;
