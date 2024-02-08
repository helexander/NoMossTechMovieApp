export const getMovieTitleAndYear = (title: string, movieDate: string) => {
	return `${title} (${new Date(movieDate).getFullYear()})`;
};
