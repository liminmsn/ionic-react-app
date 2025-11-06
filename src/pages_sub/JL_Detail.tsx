// @/pages_sub/JL_Detail.tsx
import { IonContent, IonPage, IonImg, useIonRouter, IonCard, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import type { HomeListItem } from '@/net/api/home';
import JLTopBarHeight from '@/components/JL_TopBarHeight';
import { bookmarkOutline, bookOutline } from 'ionicons/icons';

const JLDetail: React.FC = () => {
    const [detailData, setDetailData] = useState<HomeListItem | null>({ desc: '', href: '', img: '', label: '' });
    const { routeInfo } = useIonRouter(); // 获取路由信息（包含参数）

    useEffect(() => {
        setDetailData(routeInfo.routeOptions['item'])
    }, [detailData]);

    return (
        <IonPage>
            <IonContent>
                <JLTopBarHeight />
                <div className='flex'>
                    <IonCard className='w7/12'>
                        <IonImg src={detailData?.img as string} />
                    </IonCard>
                    <div className='w-full pt-2 pr-2 box-border'>
                        <p className='m-0 mb-2 text-6 font_mbz' style={{ color: 'var(--ion-color-primary)' }}>{detailData?.label}</p>
                        <IonLabel className='line-height-none font-300'>{detailData?.desc}</IonLabel>
                        <div className='mt-4'>
                            <IonButton size="small" color={'secondary'}>
                                <IonIcon icon={bookOutline} />
                                <IonLabel className='ml-1 text-4 font-bold'>阅读</IonLabel>
                            </IonButton>
                            <IonButton size="small" color={'tertiary'}>
                                <IonIcon icon={bookmarkOutline} />
                                <IonLabel className='ml-1 text-4 font-bold'>收藏</IonLabel>
                            </IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default JLDetail;