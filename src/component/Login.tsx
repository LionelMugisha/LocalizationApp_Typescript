import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./context/AuthContext";

function Login () {

    const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		try {
			await login(`${email}`, `${password}`);
			Swal.fire({
				title: "Logged In",
				icon: "success",
				timer: 2000,
				showConfirmButton: false,
			});
			navigate("/Dashboard");
		} catch {
			Swal.fire({
				title: "Invalid Credentials",
				text: ``,
				icon: "error",
				timer: 2000,
				showConfirmButton: false,
			});
		}
	};

  return (
    <>
        <div className="w-full lg:max-w-5xl mt-8 lg:ml-36 md:max-w-2xl md:ml-16">
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-2xl font-bold mb-2">
                            Login
                        </label>
                    </div>
                    <hr className="mb-4"></hr>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
						ref={emailRef}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" 
                        type="password" 
						ref={passwordRef}
                        required
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                            Login
                        </button>
                    </div>
                    <div className="flex items-center mb-4 justify-between">
                        <Link to="/register">  
                            <p>Create an account!!</p>
                        </Link>
                    </div>
                </form>
            </div>
    </>
  );
};

export default Login;
