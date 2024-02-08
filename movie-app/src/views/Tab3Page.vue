<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-segment value="all">
					<ion-segment-button value="all">
						<ion-label>All</ion-label>
					</ion-segment-button>
					<ion-segment-button value="favorites">
						<ion-label>Favorites</ion-label>
					</ion-segment-button>
				</ion-segment>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 3</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-toggle>Default Toggle</ion-toggle>
			<ion-toggle
				:enable-on-off-labels="true"
				aria-label="Success toggle"
				color="success"
				:checked="true"
				>Enable Notifications
			</ion-toggle>
			<ion-toggle
				:disabled="true"
				justify="space-between"
				>Disabled Toggle</ion-toggle
			>
			<ion-toggle :checked="true">Checked Toggle</ion-toggle>

			<ion-list>
				<ion-item>
					<ion-toggle
						aria-label="Success toggle"
						color="success"
						:checked="true"
						>Receive Push notifications</ion-toggle
					>
				</ion-item>
				<ion-item>
					<ion-toggle>Receive Emails</ion-toggle>
				</ion-item>
				<ion-item>
					<ion-toggle label-placement="end">Receive Text Messages</ion-toggle>
				</ion-item>
				<ion-item>
					<ion-toggle label-placement="stacked">Stacked Label</ion-toggle>
				</ion-item>
			</ion-list>

			<ion-segment
				:scrollable="true"
				value="heart"
			>
				<ion-segment-button value="home">
					<ion-icon :icon="home"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="heart">
					<ion-icon :icon="heart"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="pin">
					<ion-icon :icon="pin"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="star">
					<ion-icon :icon="star"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="call">
					<ion-icon :icon="call"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="globe">
					<ion-icon :icon="globe"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="basket">
					<ion-icon :icon="basket"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="barbell">
					<ion-icon :icon="barbell"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="trash">
					<ion-icon :icon="trash"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="person">
					<ion-icon :icon="person"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="person">
					<ion-icon :icon="person"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="person">
					<ion-icon :icon="person"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="person">
					<ion-icon :icon="person"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="person">
					<ion-icon :icon="person"></ion-icon>
				</ion-segment-button>
			</ion-segment>
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
	IonToggle,
	IonList,
	IonItem,
	IonIcon,
	IonSegment,
	IonSegmentButton
} from '@ionic/vue';
import { home, heart, pin, star, call, globe, basket, barbell, trash, person } from 'ionicons/icons';
</script>
