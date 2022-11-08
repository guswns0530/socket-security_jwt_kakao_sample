import React from "react";

import style from "../../../css/MainPage.module.css"
import styled from "styled-components";
import styleLoading from "../../styled/styleLoading";

const StyledDiv = styled.div`
    background-color: #ddd;
    width: 100%;
    height: 100%;
    ${styleLoading}
`
const StyleName = styled.div`
    background-color: #ddd;
    width: 100px;
    height: 16px;
    border-radius: 2px;
    ${styleLoading}
`

const StyleMsg = styled.div`
    margin-top: 4px;
    background-color: #ddd;
    width: 150px;
    height: 14px;
    border-radius: 2px;
    ${styleLoading}
  }
`

const LoadingProfile = () => {
    return (<>
        <div className={style.profile}>
            <div className={style.image}>
                <StyledDiv/>
            </div>
            <div className={style.context}>
                <StyleName/>
                <StyleMsg/>
            </div>
        </div>
    </>)
}

export default LoadingProfile