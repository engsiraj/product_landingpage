import React from 'react'

const ImageSec = (props) => {
    return (
        <>
            <section className="images">
            <img className="left-img" src={props.link1} alt="header image"/>
            <img className="right-img" src={props.link2} alt="header image"/>
            </section>
        </>
    )
}

export default ImageSec
