import React from 'react'

const ProImg = (props) => {
    return (
        <>
         <section className="img-wide">
                <img src={props.imglink} alt="banner-thumbnail" className="wide"/>
          </section>  
        </>
    )
}

export default ProImg
