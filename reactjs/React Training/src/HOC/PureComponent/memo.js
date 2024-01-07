import { useState } from "react";
import { DisplayFE } from "./DisplayFe";
import DisplayFEWithMemo from "./DisplayFEWithMemo";
export const FunctionalPureComponent = () => {
    const frontends = ['react', 'angular', 'vue'];
    const [frontendName, setFrontEndName] = useState('');
    const [searchedFrontend, setSearchFrontEnd] = useState('search your favorite frontend')
    const [count, setCount] = useState(0);
    const searchFrontendName = () => {
        if (frontends.includes(frontendName)) {
            setSearchFrontEnd(frontendName)
        }
        else {
            setSearchFrontEnd('No fornt End is Selected');
        }
        setCount(count + 1)
    }
    const showAllFrontends = () => {
        return frontends.map((fe, index) => {
            return (
                <span key={index}>{fe}  &nbsp;</span>
            )
        })

    }
    return (
        <div>
            <h2> Count : {count}</h2>
            {showAllFrontends()}
            <div>
                <input type="text" placeholder="Enter Frontend Name"
                    onChange={e => setFrontEndName(e.target.value)}
                    value={frontendName} />
                <button type="button" onClick={searchFrontendName}>Search</button>
            </div>
            <DisplayFE searchedFrontend={searchedFrontend} />
            <DisplayFEWithMemo searchedFrontend={searchedFrontend} />
        </div>
    )
}
