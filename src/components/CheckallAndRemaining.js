import React from 'react'

export default function CheckallAndRemaining({remainCount ,chechAll}) {
    return (
        <div className="check-all-container">
            <div>
                <div className="button" onClick={()=>chechAll()}>Check All</div>
            </div>

            <span>{remainCount} item{remainCount > 1?'s':''} remaining</span>
        </div>
    )
}
