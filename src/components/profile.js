import styled from 'styled-components'
// import props from './profile-data'
import Button from './button'
import Icon from './icon'

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
        color: var(--grey);
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

    .custom svg{
        transition: .2s ease-in-out;
    }
    .custom:hover svg{
        fill: var(--pink);
    }
    @media screen and (max-width: 768px){
        max-inline-size: 100vw;
        .avatar{
            inline-size: 6rem;
            block-size: 6rem;
        }
        .user-info{
            display: flex;
            gap: 1rem;
            align-items: center
        }
    }
`

function Profile(props) {
    const { name, login, avatar_url, bio, followers, following, location, blog } = props
    return (
        <ProfileStyled>
            <div className='user-info'>
                <img src={avatar_url} className="avatar" width="278" height="278" alt="" />
                <div className='user-data'>
                    <p className="name">{name}</p>
                    <p className="username">{login}</p>
                </div>
            </div>
            <div className="buttons">
                <Button 
                    text="Follow"
                    link="#"
                />
                <Button 
                    className="custom"
                    text="Sponsor"
                    icon={<Icon 
                        name="heart"
                        size={24}
                        color="white"
                    />}
                />
            </div>
            <p className="bio info">
                {bio}
            </p>
            <p className="followers info">
            <Icon name="user" color="var(--white)"/> {followers} <span>followers</span> <span>•</span> {following} <span>following</span>
            </p>
            <p className="location info">
            <Icon name="location" color="var(--white)"/> {location}
            </p>
        </ProfileStyled>
    )
}

export default Profile
