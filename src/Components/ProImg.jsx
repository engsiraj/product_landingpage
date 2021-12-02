import React from 'react'

const ProImg = (props) => {
    return (
        <>
         <section className="img-wide">
                <img src={props.imglink} alt="banner-image" className="wide"/>
          </section>  
        </>
    )
}

export default ProImg
