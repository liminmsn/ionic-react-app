import { useContext } from "react";
import { DeviceContext } from "./JL_DevicInfoProvider";

function useJLDevicInfo() {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error("useThemeData must be used within a ThemeProvider");
    }
    return context
}

export default useJLDevicInfo;