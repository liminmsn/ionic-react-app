import React, { useEffect, useState } from "react";
import { FourSquare } from "react-loading-indicators";

function JLLoding({ label = '加载中' }: { label?: string }) {
    const [_label, setLabel] = useState(label);
    useEffect(() => {
        let _label_end: string[] = [];
        const id = setInterval(() => {
            if (_label_end.length > 2) {
                _label_end = []
            }
            _label_end.push('.');
            setLabel(_label + _label_end.join(''));
        }, 250);
        return function () {
            clearInterval(id);
        }
    }, [])
    return <div className="w-full text-center" style={{ marginTop: '80%' }}>
        <FourSquare size="small" text={_label} color="var(--ion-color-primary)" />
    </div>
}

export default JLLoding;