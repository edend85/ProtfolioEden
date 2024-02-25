import React, { useEffect, useState } from 'react'
export default function Bubbels() {
    const [displayImage, setDisplayimage] = useState();

    const data = [
        <img src="/src/assets/Images/mongodb.svg" />,
        <img src="/src/assets/Images/github_icon.svg" />,
        <img src="/src/assets/Images/c.svg" />,
        <img src="/src/assets/Images/css.svg" />,
        <img src="/src/assets/Images/javascript.svg" />,
        <img src="/src/assets/Images/react.svg" />
    ]



    return (
        <>
            {
                displayImage
            }
        </>

    )
}
