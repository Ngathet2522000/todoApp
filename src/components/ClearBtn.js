import React from 'react'

export default function ClearBtn({clearComplete}) {
    return (
        <div>
            <button className="button" onClick={clearComplete}>Clear completed</button>
        </div>
    )
}
