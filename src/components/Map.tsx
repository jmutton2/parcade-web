import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
	lat: 37.7749,
	lng: -122.4194,
};
const containerStyle = {
	width: "100%",
	height: "100%",
};

const mapOptions = {
	disableDefaultUI: false, // Disable default controls
	fullscreenControl: false, // Disable fullscreen control
	streetViewControl: false, // Disable Street View control
	mapTypeControl: false, // Disable map type control
};

const apiKey = "";

function Map() {
	return (
		<div className="h-[70vh] sm:h-[100vh] w-[100vw]">
			<LoadScript googleMapsApiKey={apiKey}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={14}
					options={mapOptions}
				/>
			</LoadScript>

			<div className="sm:flex sm:flex-row-reverse sm:justify-around sm:top-1/4 sm:left-10 sm:h-[500px] sm:absolute z-50 absolute w-full h-[500px] text-bold">
				<div className="hidden sm:flex sm:visible justify-around w-[50%]">
					ddloaijhjdwio
				</div>
				<div className="items-center justify-center mx-auto lg:py-0">
					<div className=" bg-white rounded-lg shadow dark:border sm:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 sm:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">
								Where do you want to park?
							</h1>
							<form className="space-y-4 sm:space-y-6" action="#">
								<div>
									{/* Eventually add a starting location when we have the ability to provide directions */}
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Enter your destination"
										required={true}
									></input>
								</div>

								<button
									type="submit"
									className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Book Now
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Map;
