/**
 * @Context_API React տալիս է հնարավորություն ստեղծել գլոբալ "օբեկտ կոմպոնենտ" որը հասանելի կլինի յուրաքանչյուր կոմպոնենտի համար։
 * Շատ դեպքերում կարելի է օգտագործել @Context_API , @Redux -ի և @MobX -ի փոխարեն(թեպետ իրենց նշանակություններով սրանք տաբեր են*)
 * @Provider @Consumer
 */

import React, {createContext, useContext} from 'react'
const IsContext = createContext('Valodik');

const Context = () => {
    const valodik = 'Valodik_2';
    return (
        <IsContext.Provider value ={valodik}>
            <div>
                {/* ... */}
            </div>
        </IsContext.Provider>
    );
}

/**
 * @Hooks @useContext
 */

const val = useContext(IsContext);