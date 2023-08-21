import { useState } from "react"
import moduleCss from './user.module.css'
import './user.scss'
import styled from 'styled-components'

const Avatar2 = styled.img`
    border: 2px solid blue;
`

function User({ name, avatar, counter, color }) {
    const [calculatedName, setCalculatedName] = useState(name)


    const newName = calculatedName

    function HandleClick() {
        setCalculatedName('Mauricio Laratro')
    }

    return (
        <div style={{
            borderBottom: `4px solid ${color}`,
            borderLeft: '4px solid blue'
        }} className="User" onClick={HandleClick}>
            <img className={moduleCss.avatar} src={avatar} alt={newName} title={newName} height={100} />
            <Avatar2 src={avatar} alt={newName} title={newName} height={100} />
                <p className="counter">{counter} Clicks realizados en {newName}</p>
        </div>
    )
}

export default User