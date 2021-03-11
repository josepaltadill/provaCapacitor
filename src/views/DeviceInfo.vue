<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Informació del dispositiu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size-xs="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Informació del teu dispositiu</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item v-if="model">Model: {{model}}</ion-item>
                <ion-item v-if="plataforma">Plataforma: {{plataforma}}</ion-item>
                <ion-item v-if="sistemaOperatiu != 'unknown'">Sistema operatiu: {{sistemaOperatiu}}</ion-item>
                <ion-item v-if="osVersio">Versió sistema operatiu: {{osVersio}}</ion-item>
                <ion-item v-if="fabricant">Fabricant: {{fabricant}}</ion-item>
                <ion-item v-if="uuid">UUID: {{uuid}}</ion-item>
                <ion-item v-if="memoria">Memòria usada: {{memoria}}</ion-item>
                <ion-item v-if="diskLliure">Espai de disc lliure: {{diskLliure}}</ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size-md="6" size-xs="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Informació de la bateria</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item v-if="nivellBateria">Nivell de bateria: {{nivellBateria}}%</ion-item>
                <ion-item v-if="estatBateria">Estat de la bateria: {{estatBateria}}</ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size-md="6" size-xs="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Informació de la xarxa</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item v-if="estatXarxa">La xarxa està: {{estatXarxa}}</ion-item>
                <ion-item v-if="tipusConnexio">Tipus connexió de xarxa: {{tipusConnexio}}</ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { Plugins } from '@capacitor/core'
import { IonButtons, IonCol, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonRow, IonGrid } from '@ionic/vue';

export default {
  name: 'DeviceInfo',
  data() {
    return {
      info: null,
      model: null,
      plataforma: null,
      sistemaOperatiu: null,
      osVersio: null,
      fabricant: null,
      uuid: null,
      memoria: null,
      diskLliure: null,
      bateria: null,
      nivellBateria: null,
      estatBateria: null,
      xarxa: null,
      estatXarxa: null,
      tipusConnexio: null
    }
  },
  methods: {
    async getInfo() {
      const { Device, Network } = Plugins
      const info = await Device.getInfo()
      const bateria = await Device.getBatteryInfo()
      const xarxa = await Network.getStatus()
      this.info = info
      this.model = info.model
      this.plataforma = info.platform
      this.sistemaOperatiu = info.operatingSystem
      this.osVersio = info.osVersion
      this.fabricant = info.manufacturer
      this.uuid = info.uuid
      this.memoria = info.memUsed
      this.diskLliure = info.diskFree
      this.bateria = bateria
      this.nivellBateria = bateria.batteryLevel * 100
      if (bateria.isCharging) {
        this.estatBateria = "Carregant"
      } else this.estatBateria = "Carregada"
      this.xarxa = xarxa
      this.estatXarxa = xarxa.connected
      this.tipusConnexio = xarxa.connectionType
      Network.addListener('networkStatusChange', (status => {
        console.log("event")
        this.tipusConnexio = status.connectionType
        if (status.connected) {
          this.estatXarxa = "Connectada"
        } else this.estatXarxa = "Desconnectada"
      }))
    }
  },
  mounted() {
    this.getInfo()
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonCol,
    IonRow,
    IonGrid
  }
}
</script>

<style>

</style>
