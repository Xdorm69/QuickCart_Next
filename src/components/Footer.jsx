const Footer = () => {
  return (
    <footer className=" py-8 text-gray-600 text-center">
      <div className="container mx-auto px-6 md:flex md:justify-between md:text-left">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-orange-500">Q</span>uick Cart
          </h2>
          <p className="mt-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div className="md:w-1/3 mt-6 md:mt-0 ml-44">
          <h3 className="font-semibold text-gray-800">Company</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/3 mt-6 md:mt-0 ml-44">
          <h3 className="font-semibold text-gray-800">Get in touch</h3>
          <p className="mt-2 text-sm">+1-234-567-890</p>
          <p className="text-sm">contact@greatstack.dev</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t pt-4 text-sm text-gray-500">
        Copyright 2025 &copy; GreatStack.dev All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
