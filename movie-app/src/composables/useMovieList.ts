import { onMounted, ref } from 'vue';

const movieData = ref(null);
const movies = ref<MovieItem[]>;

export const useMovieList = () => {
	const fetchData = async () => {
		movieData.value = null;
		try {
			const res = await fetch('https://www.eventcinemas.com.au/Movies/GetNowShowing');
			movieData.value = await res.json();
		} catch (error) {
			console.error(error);
		}
	};

	onMounted(fetchData);

	return {
		movies,
		movieData
		// fetchData
	};
};

export interface MovieItem {
	Data: {
		Movies: {
			id: number;
			name: string;
			genres: string;
			director: string;
		};
	};
}
