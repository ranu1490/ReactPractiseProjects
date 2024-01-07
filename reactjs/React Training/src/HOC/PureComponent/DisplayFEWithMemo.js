import { memo } from "react";
//import React from 'react'
export const DisplayFEWithMemo = ({ searchedFrontend }) => {
    console.log('DisplayFEWithMemo  is rendered with ', searchedFrontend);
    return (
        <h1> Searched Frontend is {searchedFrontend}</h1>
    )
}
export default memo(DisplayFEWithMemo);
//export default React.memo(DisplayFEWithMemo);
/*React.memo is a higher order component.

If your component renders the same result given the same props,
 you can wrap it in a call to React.memo for a performance boost in 
 some cases by memoizing the result. This means that React will skip 
 rendering the component, and reuse the last rendered result.  */
 