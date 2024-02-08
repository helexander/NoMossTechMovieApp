<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button></ion-back-button>
				</ion-buttons>
				<ion-title>Movie Name (TODO)</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Hi</ion-title>
				</ion-toolbar>
			</ion-header>

			<!-- Full movie details such as: Name, image, release date, genre, director, etc. -->
			<ion-card>
				<ion-grid>
					<ion-row>
						<ion-col>
							<ion-img :src="movieItem?.LargePosterUrl" />
						</ion-col>
						<ion-col>
							<ion-card-header>
								<ion-card-title>{{ movieItem.Name }}</ion-card-title>
								<ion-card-subtitle>Director: {{ movieItem?.Director }}</ion-card-subtitle>
								<ion-card-subtitle>Release Date: 12 January 2025</ion-card-subtitle>
							</ion-card-header>
							<ion-card-content>
								<p>
									{{ movieItem.Synopsis !== null ? movieItem.Synopsis : 'Synopsis is not available' }}
								</p>
							</ion-card-content>
						</ion-col>
					</ion-row>
				</ion-grid>
			</ion-card>
			<p>{{ movieItem }}</p>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonGrid,
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonBackButton,
	IonButtons,
	IonCard,
	IonImg,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonCardContent,
	IonRow,
	IonCol
} from '@ionic/vue';
import { defineProps, inject } from 'vue';

const mockData = {
	Id: 123456,
	Name: 'Dune 2',
	Director: 'Denis Villeneuve',
	LargePosterUrl: 'https://cdn.eventcinemas.com.au/cdn/resources/movies/18701/images/largeposter.jpg',
	Genres: 'action',
	Synopsis: 'Oscar nominee Denis Villeneuve ("Arrival," "Blade Runner 2049") directs Warner Bros. Pictures'
};

const movieItem = inject('someMovieData', mockData);

const props = defineProps({
	movieInfo: Object,
	someText: String
});
</script>

<style lang="scss">
ion-card {
	max-width: 100%;
	white-space: normal;
	padding: 24px;

	ion-img {
		margin: 0 auto;
		height: 60%;
		width: 60%;
	}
}

ion-content {
	--background: #424769;
	--color: white;
}

ion-toolbar {
	--color: gold;
	--background: black;
}
</style>
