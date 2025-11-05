import React, { Dispatch, SetStateAction, useEffect } from "react";
import JLLoding from "./JL_Loding";

type JLFetchDataType<T> = {
    fetch: () => Promise<T>;
    state: [T | undefined, Dispatch<SetStateAction<T | undefined>>];
    children: React.ReactNode
};
function JLFetchData<T>({ fetch, state, children }: JLFetchDataType<T>) {
    useEffect(() => {
        (async function () {
            const res = await fetch();
            setTimeout(() => {
                state[1](res);
            }, 1000);
        })()
    }, [])

    return <React.Fragment>
        {state[0] == null ?
            <JLLoding /> :
            children
        }
    </React.Fragment>
}
export default JLFetchData;