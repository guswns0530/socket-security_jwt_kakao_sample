import React, {useCallback} from "react";

import style from "../../../css/MainPage.module.css"
import {API_BASE_URL} from "../../../constants";
import ProfilePng from "../../../assets/profile.png"

import Svg from "../../util/Svg";

const Profile = ({user}) => {
    const {message, name, profile_image_url} = user

    const checkUrl = useCallback(() => {
        if (isValidHttpUrl(profile_image_url)) {
            return profile_image_url
        }

        if(!isNaN(profile_image_url * 1)) {
            return ProfilePng
        }

        if (profile_image_url) {
            return `${API_BASE_URL}/file/${profile_image_url}`
        }

        return ProfilePng
    }, [profile_image_url])

    const backgroundColor = ['#7289da', '#747f8d', '#43b581', '#faa61a', '#f04747', '#ffffff']
    const num = !isNaN(profile_image_url) * 1 ? profile_image_url * 1 : 5;
    const src = checkUrl();


    return (<>
        <div className={style.profile}>
            <div className={style.image}>
                <Svg backgroundColor={backgroundColor[num]}>
                    <img src={src} alt="img"/>
                </Svg>
            </div>
            <div className={style.context}>
                <div className={style.name}>{name}</div>
                <div className={style.msg}>
                    {message}
                </div>
            </div>
        </div>
    </>)
}

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export default Profile