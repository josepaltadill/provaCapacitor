<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :translucent="true">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Camera 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonMenuButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from "@/components/ExploreContainer.vue";

export default  {
  name: 'Camera1',
  components: { IonButtons, IonMenuButton, ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
