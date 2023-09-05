import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const ThemeSwitchStyled = styled.div`
    position: absolute;
    inset-block-start: 4rem;
    inset-inline-end: 1.5rem;

    .switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  --background: #28096b;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: .5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #fff000;
  background: var(--background);
  transition: .5s;
}

input:checked + .slider {
  background-color: #522ba7;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}
`

function ThemeSwitch() {
    // Agrega un estado para el estado del interruptor
    const [isChecked, setIsChecked] = useState(false);
    // Usa useEffect para cambiar las variables CSS al cambiar el estado del interruptor
    useEffect(() => {
      // Cambia las variables CSS personalizadas según el estado del interruptor
      document.documentElement.style.setProperty('--bg', isChecked ? '#fff' : '#0d1117');
      document.documentElement.style.setProperty('--white', isChecked ? '#0d1117' : '#fff');
      document.documentElement.style.setProperty('--bg-button', isChecked ? '#c5ced7' : '#22262c');
      document.documentElement.style.setProperty('--grey', isChecked ? '#171b21' : '#8b949e');
      document.documentElement.style.setProperty('--primary', isChecked ? '#030057' : '#57a6ff');
      document.documentElement.style.setProperty('--bg-topic', isChecked ? '#57a6ff' : '#15223A');
      document.documentElement.style.setProperty('--bg-selector', isChecked ? '#8b949e' : '#4F545A');
    }, [isChecked]);
  
    const toggleSwitch = () => {
        setIsChecked(!isChecked);
      };

    return (
        <ThemeSwitchStyled>
            <label className='switch'>
                <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
                <span className="slider"></span>
            </label>
        </ThemeSwitchStyled>
    )
}

export default ThemeSwitch
