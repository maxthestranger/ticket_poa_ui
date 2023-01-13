import { getInitials } from "../../utils/helper";

const Header = ({ name }) => {
  return (
    <header className="flex items-center justify-between px-4 py-5 bg-white sticky top-0 w-full">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* profile with setting and logout popup */}
      <div className="relative">
        <button className="flex items-center justify-center w-10 h-10 text-white bg-primary text-base font-bold rounded-full transition-all duration-100 ease-in hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="sr-only">Open user menu</span>
          {/* <!-- Heroicon name: solid/user-circle --> */}
          <span>{getInitials(name)}</span>
        </button>

        {/* <!-- Profile dropdown --> */}
        <div className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900">Signed in as</p>
            <p className="text-sm font-medium text-gray-900">
              <a href="#" className="text-gray-900 hover:underline">
                {/* <!-- Heroicon name: solid/user-circle --> */}
                <svg
                  className="w-6 h-6 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0
                                    11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0
                                    11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 10h.01M9
                                    14h.01M15 10h.01M15 14h.01M9 16a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                Tom Cook
              </a>
            </p>
          </div>
          <div className="px-4 py-3">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Your Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
          </div>
          <div className="px-4 py-3">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
