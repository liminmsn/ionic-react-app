import React, { Dispatch, SetStateAction, useEffect } from "react";
import JLLoding from "./JL_Loding";

type JLFetchDataType<T> = {
    fetch: () => Promise<T>;
    end?: () => void;
    label?: string;
    state: [T | undefined, Dispatch<SetStateAction<T | undefined>>];
    children: React.ReactNode;
};
let id: NodeJS.Timeout;
function JLFetchData<T>({ end, fetch, label, state, children }: JLFetchDataType<T>) {
    useEffect(() => {
        if (id != undefined) clearTimeout(id);
        (async function () {
            const res = await fetch();
            id = setTimeout(() => {
                state[1](res);
                if (end) end();
            }, 1000);
        })()
    }, [label])

    return <React.Fragment>
        {state[0] == null ?
            <JLLoding label={label} /> :
            children
        }
    </React.Fragment>
}
export default JLFetchData;