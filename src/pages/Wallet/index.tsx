import { IonCard, IonContent, IonLabel, IonPage } from '@ionic/react';
import JLTopBarHeight from '../../components/JL_TopBarHeight';
import './index.css';

const Wallet: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <JLTopBarHeight />
                <IonCard className='p-4'>
                    <IonLabel color={'danger'}>
                        订阅到期：{new Date().toUTCString()}
                    </IonLabel>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Wallet;
