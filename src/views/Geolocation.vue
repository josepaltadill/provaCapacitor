<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Geolocation</ion-card-title>
        <ion-card-subtitle>Your location is:</ion-card-subtitle>
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
import { IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonButton } from '@ionic/vue'
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
  components: { IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonButton }
}
</script>