import useJLDevicInfo from "../context/useJLDevicInfo";

function JLTopBarHeight() {
    const [{ deviceInfo }] = useJLDevicInfo();
    return <div style={{ height: deviceInfo.height, position: 'sticky', top: '0', zIndex: 1, backdropFilter: 'blur(2px)', background: 'linear-gradient(rgba(0,0,0,0.4) 10%,transparent)' }}></div>
}

export default JLTopBarHeight;