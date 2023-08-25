import styled from 'styled-components'
import props from './profile-data'
import Button from './button'

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

    .custom{

    }
`

function Profile() {
    const { name, login, avatar_url, bio, followers, following, location, blog, twitter_username } = props
    return (
        <ProfileStyled>
            <img src={avatar_url} className="avatar" width="278" height="278" alt="" />
            <p className="name">{name}</p>
            <p className="username">{login}</p>
            <div className="buttons">
                <Button 
                    text="Follow"
                    link="#"
                    className="custom"
                />
                <Button 
                    text="Sponsor"
                    icon={<i>♥</i>}
                    className="default"
                />
            </div>
            <p className="bio info">
                {bio}
            </p>
            <p className="followers info">
            <span>•</span> {followers} <span>followers</span> <span>•</span> {following} <span>following</span>
            </p>
            <p className="location info">
                • {location}
            </p>
            <a className="info" href={blog} target="_blank" rel="noreferrer">
                {blog}
            </a>
            <a className="info" href={`https://www.linkedin.com/in/${twitter_username}`} target="_blank" rel="noreferrer">
                linkedin/{twitter_username}
            </a>
        </ProfileStyled>
    )
}

export default Profile
