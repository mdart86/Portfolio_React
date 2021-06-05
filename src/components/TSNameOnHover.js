import React from 'react'
import "../styling/styling.scss"

const TSNameOnHover = ({id, title, active, setSelected}) => {
    return(
        <li className={active ? "portfolio-list active" : "portfolio-list"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default TSNameOnHover
