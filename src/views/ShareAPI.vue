<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Share</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-text>
          <div class="content">
          <h1>Vuetify - Aplicació Todos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque commodi, corporis dolorum excepturi impedit natus obcaecati provident quod similique soluta voluptatibus voluptatum. Eligendi eos impedit odit omnis perferendis!</p>
          </div>
        </ion-text>
        <ion-button @click="compartir">Compartir Noticia</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/vue';
import { Plugins } from "@capacitor/core";
const { Share } = Plugins;

export default {
  name: 'ShareAPI',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonButton
  },
  methods: {
    async compartir() {
      try {
        await Share.share({
          title: 'Nova aplicació TODOS',
          text: 'Explora tot el que la nostra aplicació et pot oferir',
          url: 'http://nuxtvuetify.josepaltadill.codes/',
          dialogTitle: 'Comparteix-ho amb els teus amics'
        });
      } catch (err) {
        console.log("error")
      }
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.content {
  max-width: 600px;
  margin: 0 auto 30px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
