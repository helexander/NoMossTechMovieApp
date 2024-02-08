export const fetchData = async (movieData: any) => {
	movieData.value = null;
	try {
		const res = await fetch('https://www.eventcinemas.com.au/Movies/GetNowShowing');
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}
		movieData.value = await res.json();
	} catch (error) {
		console.error(error);
	}
};
