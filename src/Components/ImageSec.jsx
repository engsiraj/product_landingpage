import React from 'react'

const ImageSec = (props) => {
    return (
        <>
            <section className="images">
            <img className="left-img" src={props.link1} alt="left-thumbnail"/>
            <img className="right-img" src={props.link2} alt="Right-thumbnail"/>
            </section>
        </>
    )
}

export default ImageSec
