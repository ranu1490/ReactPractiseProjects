import React from 'react'

export default class Conrenderingcls extends React.Component
{
    render()
    {
        let flag=true;
        return(
            <div>
                {flag && <p>I am conditionally rendered</p>}
                {flag?<h1>h1 Flag is true</h1>:<h1>h1 Flag is false</h1>}
            </div>
        )
    }
}