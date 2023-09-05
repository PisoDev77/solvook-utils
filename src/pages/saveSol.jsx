import { useState } from "react"

/**
 * 쏠북 스튜디오 컴포넌트(문제) 저장을 위한 페이지 컴포넌트입니다.
 * 
 * @component
 * @description 페이지이며, 저장 기능을 위한 곳입니다.
 * @returns {JSX.Element}
 */
export default function saveSol(){

    cosnt [str, steStr] = useState('None');

    return (
        <>
            <h1>Save Sol</h1>
            <button onClick={handleBtn}>GET</button>
            <div>{str}</div>
        </>
    )
}