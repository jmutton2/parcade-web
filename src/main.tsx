import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Login from "./components/Login.tsx";
import Map from "./components/Map.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="w-[100vw] h-[100vh]">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);
