import { Device } from "@capacitor/device";
import { StatusBar, StatusBarInfo, Style } from "@capacitor/status-bar";
import React, { createContext, useEffect, useState } from "react";
type ContextProviderType = [ContextType, React.Dispatch<React.SetStateAction<ContextType>>];
type ContextType = {
    deviceInfo: StatusBarInfo & { height?: number };
}

const _context: ContextType = {
    deviceInfo: {
        color: '',
        overlays: false,
        visible: false,
        style: Style.Default,
        height: 30
    }
}

const DeviceContext = createContext<ContextProviderType | null>(null);
function JLDevicInfoProvider({ children }: { children: React.ReactNode }) {
    const [context, setContext] = useState(_context);
    async function initData() {
        const info = await Device.getInfo();
        if (info.platform != 'web') {
            StatusBar.getInfo().then(info => setContext({ ...context, deviceInfo: info }));
        }
    }
    useEffect(() => { initData() });
    return <DeviceContext.Provider value={[context, setContext]}>
        {children}
    </DeviceContext.Provider>
}

export { DeviceContext };
export default JLDevicInfoProvider;