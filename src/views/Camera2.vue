<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { actionSheetController, IonButtons, IonMenuButton, IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { usePhotoGallery,  Photo} from '@/composables/usePhotoGallery';

export default  {
  name: 'Camera2',
  components: { IonButtons, IonMenuButton, IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg },
  setup() {
    const { photos, takePhoto, deletePhoto } = usePhotoGallery();
    const showActionSheet = async (photo: Photo) => {
      const actionSheet = await actionSheetController.create({
        header: 'Photos',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            deletePhoto(photo);
          }}, {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          }
        }]
      });
      await actionSheet.present();
    }
    return {
      photos,
      takePhoto,
      showActionSheet,
      camera, trash, close
    }
  }
}
</script>
