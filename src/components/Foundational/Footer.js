export default function Footer() {
  return (
    <div>
      <footer className="rounded-lg shadow m-4 bg-[#86615c]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">
            © 2023 Arsyad Kamili. 
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-100 sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
