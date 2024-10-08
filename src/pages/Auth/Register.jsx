import { useState } from "react";
import { Link } from "react-router-dom";

// type Inputs = {
//   name: String,
//   email: String,
//   password: String,
// };

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log("on submit", formData);
  }
  return (
    <div className="p-56">
      <form onSubmit={submitHandler}>
        <div className="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
          <div className="mx-auto mb-2 space-y-3">
            <h1 className=" text-3xl font-bold text-gray-700">Register</h1>
            <p className="text-gray-500">Create an account</p>
          </div>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="name"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=""
                name={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Enter Your Name
              </label>
            </div>
          </div>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="email"
                name={formData.email}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=""
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Enter Your Email
              </label>
            </div>
          </div>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="password"
                id="password"
                name={formData.password}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="password"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Enter Your Password
              </label>
            </div>
          </div>
          <label>
            <input type="checkbox" />{" "}
            <span>I agree with Terms & Conditions</span>
          </label>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-3 font-bold text-white"
          >
            Create
          </button>
          <span>
            Already have an account?
            <Link to="/login" className="font-bold hover:underline">
              &nbsp;Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
