import React from "react"
import ReactDOM from "react-dom"

export default function Entry (props) {
    return (
        <>
            <entry className='entry flex row ai'>
                <div className='entry--img'>
                    <img src={`./images/${props.locationImg}`}
                    className='entry--img' alt='location-pic'
                     />
                </div>
                <div className="entry--text flex col">
                    <div className="entry--location flex row ac">
                        <p className="entry--country">{props.location}</p>
                            <a href={props.googleMapsUrl}>View on Google Maps</a>
                        </div>

                     <p className="entry--title">{props.title}</p>

                     <div className="entry--dates flex row">
                        <p>{props.startDate}-</p>
                        <p>{props.endDate}</p>
                     </div>
                     
                     <p>{props.description}</p>
                </div>
            </entry>
        </>
    )
}