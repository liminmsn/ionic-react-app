import { IonCard, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';
import { useEffect, useState } from 'react';
import { home_list, HomeList } from '../../net/api/home';

const Home: React.FC = () => {
    const [list, setList] = useState<HomeList>([]);

    useEffect(() => {
        home_list().then(setList);
    }, [])
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className='flex px-2'>
                        <IonImg className='h-8' src='/favicon.png' />
                        <IonTitle className='!px-2 font_dingliexida'>{import.meta.env['VITE_NAME']}</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {list.map(item => {
                    return <div className='p-2' key={item.title}>
                        <h6 className='my-0 mb-2' style={{ color: 'var(--ion-color-primary)' }}>{item.title}</h6>
                        <div className='grid grid-cols-3 gap-2'>
                            {item.list.map(item_card =>
                                <div className='' key={item_card.href}>
                                    <IonCard className='m-0' style={{ background: 'var(--ion-color-primary)' }}>
                                        <IonImg className='w-full' src={item_card.img!} />
                                    </IonCard>
                                    <div className='my3 mb1 text-3 text-ellipsis text-nowrap overflow-hidden font-bold'>{item_card.label}</div>
                                    <div className='text-3 font-300'>{item_card.desc}</div>
                                </div>
                            )}
                        </div>
                    </div>
                })}
            </IonContent>
        </IonPage>
    );
};

export default Home;
