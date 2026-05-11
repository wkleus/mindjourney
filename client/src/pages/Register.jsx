import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <h1 className="text-center mt-5 text-2xl font-extrabold text-gray-500 tracking-wider">
        Register
      </h1>
      <form className="flex flex-col border rounded-lg p-5 w-xl mx-auto mt-10 gap-5 border-gray-400 opacity-80">
        <input
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-5 w-2xs mx-auto"
          type="text"
          placeholder="Enter Name..."
        />
        <input
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 w-2xs mx-auto"
          type="email"
          placeholder="Enter Email..."
        />
        <input
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 w-2xs mx-auto"
          type="password"
          placeholder="Enter Password..."
        />
        <button
          // disabled
          className="disabled:opacity-70 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-2xs mx-auto cursor-pointer mb-5 "
        >
          Register
        </button>
      </form>
      <div className="text-center mt-5 text-gray-500">
        <p>Already have an account? </p>{" "}
        <Link to="/login">
          <span className="text-blue-600 cursor-pointer hover:text-blue-400">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
