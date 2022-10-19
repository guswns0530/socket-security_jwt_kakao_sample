import React from "react";
import style from '../../css/LoginPage.module.css'

const AuthLoginForm = ({form, onSubmit, onChange, authError, onClick, popup, authLoading}) => {
    return (
        <>
            {popup ? <div>소셜 로그인 중입니다.</div> :
                <form id={style.lp_form} onSubmit={onSubmit}>
                    <div className={style.input_box}>
                        <input
                            type="text"
                            name="email"
                            id="lp_id"
                            placeholder="아이디"
                            onChange={onChange}
                            value={form.email}
                        />
                        <input
                            type="password"
                            name="password"
                            id="lp_pwd"
                            placeholder="비밀번호"
                            onChange={onChange}
                            value={form.password}
                        />
                    </div>
                    {authError &&
                        <div id={style.errorAlert}>
                            <p className={style.desc_error}>{authError.toString()}</p>
                        </div>
                    }
                    <input type="submit" value="로그인" id={style.lp_submit} className={authLoading ? style.lp_submit_disable : ''} />
                    <div className={style.line_or}>
                        <div>또는</div>
                    </div>
                    <div onClick={onClick} className={style.login_kakao}>
                        kakao 계정으로 로그인
                    </div>
                </form>
            }
        </>
    )
}

export default AuthLoginForm