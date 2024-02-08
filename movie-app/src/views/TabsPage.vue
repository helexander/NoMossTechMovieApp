<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar
				slot="bottom"
				color="primary"
			>
				<ion-tab-button
					tab="tab1"
					href="/tabs/tab1"
				>
					<ion-icon
						aria-hidden="true"
						:icon="calendar"
					/>
					<ion-label>Date Picker and Button</ion-label>
				</ion-tab-button>

				<ion-tab-button
					tab="tab2"
					href="/tabs/tab2"
				>
					<ion-icon
						aria-hidden="true"
						:icon="film"
					/>
					<ion-label>Movies</ion-label>
				</ion-tab-button>

				<ion-tab-button
					tab="tab3"
					href="/tabs/tab3"
				>
					<ion-icon
						aria-hidden="true"
						:icon="albums"
					/>
					<ion-label>Toggle and Segment</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { film, albums, calendar } from 'ionicons/icons';
</script>

<style lang="scss">
ion-tab-bar,
ion-tab-button {
	background-color: black;
}

ion-icon {
	color: gold;
}
</style>
