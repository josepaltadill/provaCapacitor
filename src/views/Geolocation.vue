<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Geolocalització</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-card>
      <ion-card-header>
        <ion-card-title>La teva geolocalització és:</ion-card-title>
      </ion-card-header>

      <ion-item>
        <ion-icon :icon="walk" slot="start"></ion-icon>
        <p>Latitude: {{loc?.coords.latitude}}</p>
      </ion-item>

      <ion-item>
        <ion-icon :icon="walk" slot="start"></ion-icon>
        <p>Longitude: {{loc?.coords.longitude}}</p>
      </ion-item>

      <ion-item>
        <ion-button @click="getCurrentPosition" fill="outline">Get Current Location</ion-button>
      </ion-item>

    </ion-card>
  </ion-page>
</template>

<script>
import { Plugins } from '@capacitor/core'
import { IonPage, IonMenuButton, IonHeader, IonButtons, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonButton } from '@ionic/vue'
import { walk } from 'ionicons/icons'
export default {
  name: 'Geolocation',
  data() {
    return {
      loc: null,
      walk
    }
  },
  methods: {
    async getCurrentPosition(){
      const { Geolocation } = Plugins;
      const loc = await Geolocation.getCurrentPosition()
      this.loc = loc
    }
  },
  components: { IonPage, IonMenuButton, IonHeader, IonButtons, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonButton }
}
</script>

<style>
  .ion-page {
    justify-content: normal;
  }
</style>
