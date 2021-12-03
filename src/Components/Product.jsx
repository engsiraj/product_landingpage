import React from 'react'

const Product = (props) => {
    return (
        <>
            <section className="buy">
                <div className="buymain">
                    <img  className="buyimg" src={props.primg} alt="buy-thumbnail"/>
                    <div className="content-buy">
                        <h1 className="proname">{props.name}</h1>
                        <h2 className="proprice">{props.price}</h2>
                        <p className="prodes">{props.des}</p>
                        <p className="lastline">{props.lastline}</p>
                        <a className="link lastline" href={props.olink}>{props.otxt}</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
