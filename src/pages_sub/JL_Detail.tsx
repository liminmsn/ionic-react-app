// @/pages_sub/JL_Detail.tsx
import { IonContent, IonPage, IonImg, useIonRouter, IonCard, IonButton, IonIcon, IonLabel, NavContext } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import type { HomeListItem } from '@/net/api/home';
import JLTopBarHeight from '@/components/JL_TopBarHeight';
import { bookmarkOutline, caretDownCircleOutline, caretUpCircleOutline, play } from 'ionicons/icons';
import JLFetchData from '@/components/JLFetchData';
import { detail_list, DetailType } from '@/net/api/detail';
import { goTo } from '@/router';

const obj = { desc: '', href: '', img: '', label: '' };
const JLDetail: React.FC = () => {
    const [detailData, setDetailData] = useState<HomeListItem | null>(obj);
    const { routeInfo } = useIonRouter(); // 获取路由信息（包含参数）
    const nav = useContext(NavContext);

    const [detail, setDetail] = useState<DetailType>();
    const [detail_size, setDetailSize] = useState(false);
    useEffect(() => {
        setDetail(undefined);
        setDetailData(routeInfo.routeOptions['item'])
    }, [routeInfo]);

    return (
        <IonPage>
            <IonContent>
                <JLTopBarHeight />
                {
                    detailData &&
                    detailData.href &&
                    <JLFetchData<DetailType> label={`${detailData.label}`} fetch={() => detail_list(detailData)} state={[detail, setDetail]} end={() => setDetailSize(true)}>
                        <div className='flex'>
                            <IonCard className='w7/12'>
                                <IonImg src={detailData?.img as string} />
                            </IonCard>
                            <div className='w-full pt-2 pr-2 box-border'>
                                <p className='m-0 mb-2 text-6 font_mbz' style={{ color: 'var(--ion-color-primary)' }}>{detailData?.label}</p>
                                <IonLabel color={'medium'} className='line-height-none font-300'>{detailData?.desc}</IonLabel>
                                <div className='mt-4'>
                                    <IonButton size="small" color={'dark'}>
                                        <IonIcon icon={play} />
                                        <IonLabel className='ml-1'>阅读</IonLabel>
                                    </IonButton>
                                    <IonButton size="small" color={'tertiary'}>
                                        <IonIcon icon={bookmarkOutline} />
                                        <IonLabel className='ml-1'>收藏</IonLabel>
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                        <p className='m-0 p-2 pt0 text-6 font_mbz' style={{ color: 'var(--ion-color-primary)' }}>{detail?.module_0?.title}</p>
                        <div className={detail_size ? 'overflow-y-auto max-h4/10' : ''} style={{ position: 'relative' }}>
                            <div className='w-full p-2 pt-1 pt-0 grid grid-cols-3 gap-1'>
                                {detail?.module_0?.arr.map(item => {
                                    return <IonCard className='!m-0 p-2' key={item.href}>
                                        <IonLabel color={'medium'}>
                                            <span className='text-3'>{item.label}</span>
                                        </IonLabel>
                                    </IonCard>
                                })}
                            </div>
                            <div className='w-full pos-sticky pos-bottom-0 text-center' onClick={() => setDetailSize(!detail_size)}>
                                <IonIcon color={'primary'} size={'large'} icon={detail_size ? caretDownCircleOutline : caretUpCircleOutline} />
                            </div>
                        </div>
                        <p className='m-0 px-2 text-6 font_mbz' style={{ color: 'var(--ion-color-primary)' }}>{detail?.module_1?.title}</p>
                        <div className='overflow-x-auto'>
                            <div className='flex'>
                                {
                                    detail?.module_1?.arr.map((item, idx) => {
                                        return <div key={item.img} onClick={() => item.href != detailData.href && goTo(nav, '/detail', item)}>
                                            <IonCard className={`min-w-30 ${(detail.module_1!.arr.length - 1) == idx ? '' : 'mr-1'} cursor-pointer`}>
                                                <IonImg class='' src={item.img} />
                                            </IonCard>
                                            <div className='px-2'>
                                                <IonLabel color={'primary'}>
                                                    <span>{item.label}</span>
                                                </IonLabel>
                                                <IonLabel color={'medium'}>
                                                    <div className='text-3'>{item.desc}</div>
                                                </IonLabel>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </JLFetchData>
                }
            </IonContent>
        </IonPage>
    );
};

export default JLDetail;