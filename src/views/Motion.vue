<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Motion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <strong>Prem el botó per provar el Motion</strong><br>
        <ion-button @click="getMotion()">Motion</ion-button>
        <ion-card>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-text>Acceleració X</ion-text>
                <ion-text>{{ acceleracioX }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Acceleració Y</ion-text>
                <ion-text>{{ acceleracioY }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Acceleració Z</ion-text>
                <ion-text>{{ acceleracioZ }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Orientació Alpha</ion-text>
                <ion-text>{{ orientacioA }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Orientació Beta</ion-text>
                <ion-text>{{ orientacioB }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Orientació Gamma</ion-text>
                <ion-text>{{ orientacioG }}</ion-text>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonText, IonList, IonCard, IonCardContent} from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { Motion } = Plugins;

export default {
  name: 'Motion',
  data() {
    return {
      acceleracioX: null,
      acceleracioY: null,
      acceleracioZ: null,
      orientacioA: null,
      orientacioB: null,
      orientacioG: null
    }
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonText,
    IonList,
    IonCard,
    IonCardContent
  },
  methods: {
    async getMotion() {
      Motion.addListener('accel', (event) => {
        this.acceleracioX = event.acceleration.x;
        this.acceleracioY = event.acceleration.y;
        this.acceleracioZ = event.acceleration.z;
      });
      Motion.addListener('orientation', (event) => {
        this.orientacioA = event.alpha;
        this.orientacioB = event.beta;
        this.orientacioG = event.gamma;
      });
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

#container strong {
  font-size: 20px;
  line-height: 26px;
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
