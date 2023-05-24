import { useState, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { debounce } from "lodash";

import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

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
const API_KEY = "";

function Map() {
	const [query, setQuery] = useState({
		summary: {
			query: "",
			queryType: "NON_NEAR",
			queryTime: 0,
			numResults: 0,
			offset: 0,
			totalResults: 0,
			fuzzyLevel: 1,
			queryIntent: [],
		},
		results: [
			{
				type: "",
				id: "",
				score: 0,
				address: {
					streetNumber: "",
					streetName: "",
					municipality: "",
					countrySecondarySubdivision: "",
					countrySubdivision: "",
					countrySubdivisionName: "",
					postalCode: "",
					extendedPostalCode: "",
					countryCode: "",
					country: "",
					countryCodeISO3: "",
					freeformAddress: "",
					localName: "",
				},
				position: { lat: 0, lon: -0 },
				viewport: {
					topLeftPoint: { lat: 0, lon: 0 },
					btmRightPoint: { lat: 0, lon: 0 },
				},
				entryPoints: [{ type: "", position: { lat: 0, lon: 0 } }],
			},
		],
	});

	const debouncedSearch = useCallback(
		debounce((text: string) => {
			if (text == "") {
				text = "%20";
			}

			text = text.replace(/\s/g, "%20");

			// Send the search query to the server
			fetch(
				`https://api.tomtom.com/search/2/search/${text}.json?key=${API_KEY}&language=en-US&countrySet=CA,US&typehead=true&idxSet=PAD,Addr,POI`
			)
				.then((res) => res.json())
				.then((res) => {
					setQuery(res);
					console.log(res);
				});
		}, 300),
		[]
	);

	function handleSearchChange(e: any) {
		debouncedSearch(e.target.value);
	}

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

			<div className="w-full sm:w-[366px] sm:flex sm:flex-row-reverse sm:justify-around sm:top-1/4 sm:left-[20%] sm:h-[500px] sm:absolute z-50 absolute h-[500px] text-bold">
				<div className="items-center  mx-auto lg:py-0">
					<div className="max-h-[100%] h-[100%] bg-white rounded-lg shadow dark:border sm:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 sm:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">
								Where do you want to park?
							</h1>
							{/* Eventually add a starting location when we have the ability to provide directions */}
							<input
								type="text"
								name="text"
								id="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your destination"
								onChange={handleSearchChange}
							></input>
							<hr />
							{query.summary.query != "" &&
								query.results.slice(0, 5).map((item) => {
									return (
										<div className="flex flex-row justify-between items center px-1 ">
											<IconContext.Provider
												value={{
													color: "black",
													className: "global-class-name",
												}}
											>
												<div className="min-h-35 min-w-35 items-center p-2 bg-gray-300 rounded-[100%]">
													<IoLocationSharp />
												</div>
											</IconContext.Provider>
											<div className="flex flex-col flex-grow px-5">
												<div className="text-black font-semibold text-[13px]">
													{item.address.streetNumber} {item.address.streetName}
												</div>
												<div className="text-gray-700 text-[10px]">
													{item.address.municipality},{" "}
													{item.address.countrySubdivision},{" "}
													{item.address.countryCode}, {item.address.postalCode}
												</div>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Map;
