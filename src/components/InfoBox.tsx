import type { ReactNode } from "react";


type HintBoxProp = {
    mode : 'hint';
    children : ReactNode
}

type WarningBoxProp = {
    mode : 'warning';
    severity?: 'low' | 'medium' | 'high'
    children : ReactNode;
}

type InfoBoxProp = HintBoxProp | WarningBoxProp

export default function InfoBox(prop : InfoBoxProp){
    const {mode, children} = prop;

    if(mode === 'hint'){
        return(
            <aside className="infobox infobox-hint">
                <p className="infobox-text">{children}</p>
            </aside>
        )
    }

    const {severity} = prop;

    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2 className="infobox-warning-text">Warning</h2>
            <p className="infobox-warning-text">{children}</p>
        </aside>
    )
}
