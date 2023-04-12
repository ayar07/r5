


export function User ({userInfo, getOneUser}) {

    return (
        <div>
            <span>{userInfo.name}</span>
            <button onClick={() => getOneUser(userInfo)}>more info</button>
            <p>---------------------------------</p>
        </div>
    )
}