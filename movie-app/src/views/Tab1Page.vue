<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Date Picker and Button</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 1</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-datetime
				:is-date-enabled="isWeekday"
				presentation="date"
				:show-default-buttons="true"
			>
				<span slot="title">Select movie date</span></ion-datetime
			>
			<!-- date-fns for more advanced date manipulation -->

			<ion-button size="small">Small</ion-button>
			<ion-button size="default">
				<ion-icon
					slot="end"
					:icon="star"
				></ion-icon>
				Default</ion-button
			>
			<ion-button size="large">Large</ion-button>
			<ion-button expand="block">Block</ion-button>
			<ion-button expand="full">Full</ion-button>
			<ion-button
				:disabled="true"
				color="medium"
				>Disabled</ion-button
			>
			<ion-button
				shape="round"
				fill="outline"
				color="success"
				>Round and outline</ion-button
			>
			<ion-button
				class="ion-text-wrap"
				style="max-width: 400px"
				>This is the button that never ends it just goes on and on and on and on and on and on and on and on my friends</ion-button
			>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime, IonButton, IonIcon } from '@ionic/vue';
import { star } from 'ionicons/icons';
const isWeekday = (dateString: string) => {
	const date = new Date(dateString);
	const utcDay = date.getUTCDay();

	/**
	 * Date will be enabled if it is not
	 * Sunday or Saturday
	 */
	return utcDay !== 0 && utcDay !== 6;
};
</script>

<style scoped>
ion-button {
	--background: #93e9be;
	--background-hover: #9ce0be;
	--background-activated: #88f4be;
	--background-focused: #88f4be;

	--color: blue;

	--border-radius: 0;
	--border-color: #000;
	--border-style: solid;
	--border-width: 1px;

	--box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

	--ripple-color: deeppink;

	--padding-top: 10px;
	--padding-bottom: 10px;
}
</style>
