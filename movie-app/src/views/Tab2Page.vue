<template>
	<ion-page>
		<ion-header>
			<ion-toolbar class="movie-screen-toolbar">
				<ion-title>Event Cinemas Now Showing</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content
			:fullscreen="true"
			class="movie-list"
		>
			<p v-if="!movieData">Loading...</p>
			<pre v-else>
			<ion-item>
				<ion-select label="Filter by Genre:" placeholder="All Genres" v-model="selectedGenre">
				<ion-select-option v-for="(genreOption, idx) in genreList" :key="idx" :value="genreOption">{{ genreOption }}</ion-select-option>
			</ion-select>
			</ion-item>
			<ion-grid>
					<ion-row>
						<ion-col class="test-card" :key="movie.Id" v-for="movie in filteredMovies" size-xs="12" size-md="6">
				<ion-card class="movie-list__card">
				<ion-img :src="movie?.LargePosterUrl" class="movie-list__card__image" />
				<ion-card-header>
					<ion-card-title>{{ getMovieTitleAndYear(movie.Name, movie.ReleasedAt) }}</ion-card-title>
				<ion-card-subtitle>Director: {{ movie?.Director }}</ion-card-subtitle>
				</ion-card-header>
				<ion-card-content>
					<p>
					{{ movie.Synopsis !==  null ? (movie.Synopsis).substring(0, MAX_DESCRIPTION_LENGTH) + '...' : 'Synopsis is not available' }}
				</p>
					<ion-button class="more-info-button" @click="openMovieModal(true, movie)">More info</ion-button>
				</ion-card-content>
				</ion-card>
						</ion-col>
					</ion-row>
				</ion-grid>
      </pre>

			<!-- MOVIE MODAL -->
			<ion-modal :is-open="isOpen">
				<ion-header>
					<ion-toolbar class="movie-screen-toolbar">
						<ion-title>{{ getMovieTitleAndYear(selectedMovie.Name, selectedMovie.ReleasedAt) }}</ion-title>
						<ion-buttons slot="end">
							<ion-button @click="openMovieModal(false, {})">Close</ion-button>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>
				<ion-content class="movie-modal">
					<ion-card>
						<ion-grid>
							<ion-row>
								<ion-col>
									<ion-img :src="selectedMovie?.LargePosterUrl" />
								</ion-col>
								<ion-col>
									<ion-card-header>
										<ion-card-title>{{ selectedMovie.Name }}</ion-card-title>
										<ion-card-subtitle>Director: {{ selectedMovie?.Director }}</ion-card-subtitle>
										<ion-card-subtitle
											>Release Date:
											{{
												selectedMovie.ReleasedAt !== null || undefined
													? new Date(selectedMovie.ReleasedAt).toDateString()
													: 'Unannounced'
											}}</ion-card-subtitle
										>
									</ion-card-header>
									<ion-card-content>
										<p>
											{{ selectedMovie.Synopsis !== null ? selectedMovie.Synopsis : 'Synopsis is not available' }}
										</p>
									</ion-card-content>
								</ion-col>
							</ion-row>
						</ion-grid>
					</ion-card>
				</ion-content>
			</ion-modal>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonGrid,
	IonItem,
	IonRow,
	IonCol,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonImg,
	IonModal,
	IonButtons,
	IonSelect,
	IonSelectOption
} from '@ionic/vue';
import { ref, watch } from 'vue';
import { getMovieTitleAndYear } from '@/composables/helperFunc.ts';
import { fetchData } from '@/composables/api.ts';

const MAX_DESCRIPTION_LENGTH = 140;

const movieData = ref(null);
const isOpen = ref(false);
let retrievedGenres = [];
let selectedMovie: any = null;
// let genreList: any[] = [];
const genreList = ref([]);
const selectedGenre = ref(null);
const filteredMovies = ref([]);

fetchData().then((data) => {
	movieData.value = data;
	retrievedGenres = JSON.parse(JSON.stringify(data.Data.Genres));
	genreList.value = retrievedGenres.map((genre: { name: any }) => genre.name);
	filteredMovies.value = data.Data.Movies;
});

const openMovieModal = (open: boolean, movie: object | null) => {
	isOpen.value = open;
	selectedMovie = movie;
};

const filterMovies = () => {
	if (movieData.value && selectedGenre.value !== null) {
		filteredMovies.value = movieData.value.Data.Movies.filter((movie) => movie.Genres.includes(selectedGenre.value.toLowerCase()));
	} else {
		filteredMovies.value = movieData.value.Data.Movies;
	}
};

watch(selectedGenre, filterMovies);
</script>

<style lang="scss">
.test-card {
	display: flex;
}
.movie-screen-toolbar {
	--color: gold;
	--background: black;
}

.movie-list {
	--background: #424769;
	--color: white;

	&__card {
		max-width: 100%;
		white-space: normal;
		padding: 24px;

		&__image {
			margin: 0 auto;
			height: 50%;
			width: 50%;
		}
	}
}

.more-info-button {
	padding-top: 12px;
	margin-left: auto;
	margin-right: auto;
	display: block;
}

.movie-modal {
	--background: #dbe2ef;
}
</style>
