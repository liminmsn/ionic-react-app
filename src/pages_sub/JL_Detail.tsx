// @/pages_sub/JL_Detail.tsx
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonImg, useIonRouter } from '@ionic/react';
import { useEffect, useState } from 'react';
import type { HomeListItem } from '@/net/api/home';
import JLTopBarHeight from '@/components/JL_TopBarHeight';

const JLDetail: React.FC = () => {
    const [detailData, setDetailData] = useState<HomeListItem | null>(null);
    const { routeInfo } = useIonRouter(); // 获取路由信息（包含参数）

    useEffect(() => {
        setDetailData(routeInfo.routeOptions['item'])
    }, []);

    return (
        <IonPage>
            <IonContent>
                <JLTopBarHeight />
                {JSON.stringify(detailData)}
            </IonContent>
        </IonPage>
    );
};

export default JLDetail;