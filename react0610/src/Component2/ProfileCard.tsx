
import React from "react"
import Info from "./Info"


const ProfileCard: React.FC = () => {
    const name = "윤희상"

    return (
        <Info title="My Profile" name={name} tel="010-2734-8281" img="logo192.png" backgroundColor="magenta">
            <p> 안녕하세요 {name}. 님</p>
            <p> 리액트 프로필 페이지 입니다.</p>
        </Info>
    )

}

export default ProfileCard