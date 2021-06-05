import React from 'react'
import "../styling/styling.scss"

const TSNameOnHover = ({id, title, active, setSelected}) => {
    return(
        <h1 className={active ? "portfolio-list active" : "portfolio-list"} onHover={() => setSelected(id)}>
            {title}
        </h1>
    )
}

export default TSNameOnHover
