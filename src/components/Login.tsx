import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Login = () => {
	const navigate = useNavigate();
	const [formState, setFormState] = useState({
		login: true,
		email: "",
		password: "",
	});

	const [addUser, { loading }] = useMutation(REGISTER_USER, {
		update(proxy, result) {
			console.log(result);
		}, // triggered if mutation worked
		variables: formState,
	});

	const onSubmit = (event: any) => {
		event.preventDefault();
		addUser();
	};

	return (
		<div className=" bg-white sm:bg-gray-100 h-[100%] dark:bg-gray-900">
			<div className="flex flex-col h-[100%] items-center justify-center mx-auto sm:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border sm:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 sm:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">
							{formState.login
								? "Sign in to your account "
								: "Create your account"}
						</h1>
						<form className="space-y-4 sm:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required={true}
									onChange={(e) =>
										setFormState({
											...formState,
											email: e.target.value,
										})
									}
								></input>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required={true}
									onChange={(e) =>
										setFormState({
											...formState,
											password: e.target.value,
										})
									}
								></input>
							</div>
							{!formState.login && (
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Verify Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required={true}
									></input>
								</div>
							)}
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										></input>
									</div>
									<div className="ml-3 text-sm">
										<label
											htmlFor="remember"
											className="text-gray-500 dark:text-gray-300"
										>
											Remember me
										</label>
									</div>
								</div>
								<a
									href="#"
									className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Forgot password?
								</a>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								onClick={(e) => onSubmit(e)}
							>
								{formState.login ? "Login" : "Create Account"}
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								{formState.login
									? "Don’t have an account yet? "
									: "Already have an account? "}
								<a
									className="hover:cursor-pointer"
									onClick={() => {
										setFormState({ ...formState, login: !formState.login });
									}}
								>
									{formState.login ? "Sign up" : "Login"}
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const REGISTER_USER = gql`
	mutation register(
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				email: $username
				password: $username
				confirmPassword: $username
			}
		) {
			id
			email
			username
			createdAt
			token
		}
	}
`;

export default Login;
