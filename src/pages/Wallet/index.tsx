import { IonCard, IonContent, IonHeader, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import { StatusBar } from '@capacitor/status-bar'
import './index.css'
import { useEffect, useState } from 'react';

const Wallet: React.FC = () => {
    const [barHeight, SetbarHeight] = useState(0);
    function initData() {
        StatusBar.getInfo().then(info => {
            //@ts-ignore
            SetbarHeight(info['height'])
        })
    }
    useEffect(() => {
        initData();
    }, [])
    return (
        <IonPage style={{ paddingTop: `${barHeight}px` }}>
            <IonContent fullscreen>
                <IonCard className='p-4'>
                    <IonLabel color={'danger'}>
                        订阅到期：{new Date().toUTCString()}
                    </IonLabel>
                    {barHeight}
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Wallet;
