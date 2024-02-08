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
        <div>
          Genres
        </div>
        <!-- <select id="genreFilter">
          <option v-for="genre in genres" :value="genre"> 
            {{ genre }}
          </option>
        </select> -->
        <ion-grid>
				<ion-row>
					<ion-col class="test-card" :key="movie.Id" v-for="movie in movieData.Data.Movies" size-xs="12" size-md="6">
            <ion-card class="movie-list__card">
              <ion-img :src="movie?.LargePosterUrl" class="movie-list__card__image" />
              <ion-card-header>
                <ion-card-title>{{ movie.Name }}</ion-card-title>
              <ion-card-subtitle>Director: {{ movie?.Director }}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <p>
                  {{ movie.Synopsis !==  null ? (movie.Synopsis).substring(0, maxDescriptionLength) + '...' : 'Synopsis is not available' }}
              </p>
                <ion-button :router-link="`/tab2/movie/${movie.Id}`" router-direction="forward" class="more-info-button" @click="passSomeData">More info</ion-button>
              </ion-card-content>
            </ion-card>
					</ion-col>
				</ion-row>
			</ion-grid>
      </pre>
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
	IonRow,
	IonCol,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonImg
} from '@ionic/vue';
import { ref, provide } from 'vue';
// import { useRouter } from 'vue-router';
import { useMovieList, MovieItem } from '@/composables/useMovieList';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

const movieData = ref(null);

const maxDescriptionLength = 140;
const movieGenres = ref(); // Need to define empty array with type

const fetchData = async () => {
	movieData.value = null;
	try {
		const res = await fetch('https://www.eventcinemas.com.au/Movies/GetNowShowing');
		console.log(res);
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}
		movieData.value = await res.json();
		movieData.value = await CapacitorHttp.get(options);
		// movieGenres.value = [...new Set(movieData.value.map((movie: { Genres: string }) => movie.Genres))];
	} catch (error) {
		console.error(error);
	}
};

// const doGet = async () => {
// 	const options = {
// 		url: 'https://www.eventcinemas.com.au/Movies/GetNowShowing'
// 	};

//   const res: HttpResponse = await CapacitorHttp.get(options)
//   .then(() => console.log(res))
// };

fetchData();

const passSomeData = () => {
	provide('someMovieData', 'Hi');
	// provide('someMovieData', movieData.value);
};

const filterMoviesByGenre = () => {};
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
</style>
