import styled from 'styled-components'

const ProfileStyled = styled.div`
    grid-area: profile;
    .avatar{
        border-radius: 50%;
        border: 1px solid var(--grey-2);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }
    .name{
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem
    }
    .username{
        font: var(--headline2-ligth);
        margin-block-start: .5rem;
        margin-block-end: 1.5rem;
    }
    .info{
        color: var(--grey-2);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }
    a:hover{
        text-decoration: underline;
    }

    .buttons{
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }
`

function Profile() {
    return (
        <ProfileStyled>
            <img src="" className="avatar" width="278" height="278" alt="" />
            <p className="name">Mauricio Laratro</p>
            <p className="username">MauricioLaratro</p>
            <div className="buttons">
                <button>follow</button>
                <button>sponsors</button>
            </div>
            <p className="bio info">Mauricio Javier Laratro<br />Front-end Developer, 26 años<br />Posadas, Misiones, Argentina.</p>
            <p className="followers info">
            <span>•</span> 10 <span>followers</span> <span>•</span> 15 <span>following</span>
            </p>
            <p className="stars info">
                • 81
            </p>
            <p className="location info">
                • Argentina
            </p>
            <a className="info" href="https://singularityweb.net/" target="_blank" rel="noreferrer">
                singularityweb
            </a>
            <a className="info" href="https://www.linkedin.com/in/mauriciojavierlaratro" target="_blank" rel="noreferrer">
                linkedin/mauriciojavierlaratro
            </a>
        </ProfileStyled>
    )
}

export default Profile
