const Footer = () => {
  return (
    <footer id="footer" data-aos="zoom-in-right" className="bg-secondary px-10">
      <div className="container mx-auto py-10 mt-10">
        <div className="flex flex-wrap gap-5 mt-10">
          <div className="w-full lg:w-2/5 mt-10">
            <img src="images/Logo.jpg" alt="" className="mb-4 w-10 h-10" />
            <p className="mt-4 text-left">
              At Ogitech Institution, we understand the importance of staying
              organized and keeping track of your academic responsibilities.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mt-10">
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold">Quick Links</h4>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-10">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold">Get in Touch</h4>
              <a
                href="mailto:ogitech@gmail.com"
                className="text-gray-700 hover:text-gray-900 flex items-center"
              >
                <i className="bi bi-envelope mr-2 text-button"></i>{" "}
                ogitech@gmail.com
              </a>
              <a
                href="tel:09088989982"
                className="text-gray-700 hover:text-gray-900 flex items-center"
              >
                <i className="bi bi-telephone mr-2 text-button"></i> 09088989982
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
