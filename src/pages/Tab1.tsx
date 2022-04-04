import {
  IonButton,
  IonCardContent,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useState } from "react";
import { DetectScreenshot } from "detect-screenshot";

const Tab1: React.FC = () => {
  const [error, seterror] = useState("");

  function detectScreenshot() {
    DetectScreenshot.onScreenshot()
      .then(res => {
        console.log(res, "oben desmond");
        alert(res.toString());
        seterror(res.toString() + " | " + new Date().toTimeString());
      })
      .catch(err => alert(err.toString()));
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={() => detectScreenshot()}>
          detect screenshot
        </IonButton>
        <IonButton color="danger" onClick={() => alert("alerteh")}>
          alert
        </IonButton>
        <IonCardContent>
          <IonLabel color="success">{error}</IonLabel>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
