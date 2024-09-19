import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="flex bg-gray-800 text-white top-0 py-7 flex-wrap justify-around bg-silver">
        <h1 className="text-lg font-semibold">TODO</h1>
        <ul className="flex gap-[40px] text-m">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="#"> About</Link>
          </li>
          <li>
            <Link to="#"> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
