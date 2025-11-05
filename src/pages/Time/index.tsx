import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './index.css';
import JLDevicInfo from '../../context/useJLDevicInfo';
import JLTopBarHeight from '../../components/JL_TopBarHeight';

const Time: React.FC = () => {
    const [info] = JLDevicInfo();
    return (
        <IonPage>
            <IonContent fullscreen>
                <JLTopBarHeight />
                {JSON.stringify(info.deviceInfo)}
                <ExploreContainer name="Tab 1 page" />
            </IonContent>
        </IonPage>
    );
};

export default Time;
