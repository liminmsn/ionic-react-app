import { IonCard, IonContent, IonImg, IonPage, NavContext } from '@ionic/react';
import './index.css';
import { useContext, useEffect, useState } from 'react';
import { home_list, HomeList, HomeListItem } from '@/net/api/home';
import JLFetchData from '@/components/JLFetchData';
import JLTopBarHeight from '@/components/JL_TopBarHeight';

const Home: React.FC = () => {
    const [list, setList] = useState<HomeList | undefined>()

    useEffect(() => {
        console.log(list);
    }, [])

    const nav = useContext(NavContext); // 获取全局导航实例
    // 跳转详情页逻辑
    const goToDetail = (item: HomeListItem) => {
        nav.navigate(
            '/detail',
            'forward',
            'push',
            undefined,
            { item }
        );
    };
    return (
        <IonPage>
            <IonContent fullscreen onScroll={(e) => {
                console.log(e);
            }}>
                <JLTopBarHeight />
                <JLFetchData<HomeList> fetch={home_list} state={[list, setList]}>
                    {list && list.map(item => {
                        return <div className='p-2' key={item.title}>
                            <h5 className='my-0 mb-2 font_dlxt' style={{ color: 'var(--ion-color-primary)' }}>{item.title}</h5>
                            <div className='grid grid-cols-3 gap-2'>
                                {item.list.map(item_card =>
                                    <div className='' key={item_card.href} onClick={() => goToDetail(item_card)}>
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
                </JLFetchData>
            </IonContent>
        </IonPage>
    );
};

export default Home;
