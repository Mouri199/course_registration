

const Navbar = () => {
  return (
    <nav className=" bg-blue-500 ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-black mt-10 font-bold text-5xl mb-8">Course Registration</div>
       <div>
       <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black font-semibold text-xl hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-semibold text-xl  hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-semibold text-xl  hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
