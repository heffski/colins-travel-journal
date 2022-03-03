import React from "react"
import ReactDOM from "react-dom"

export default function Nav () {
    return (
        <div className="flex row ai jc nav">
            <img className='icon' src='./images/earth-icon.png' />
            <h1 className="flex jc">my travel journal</h1>
        </div>
    )
}