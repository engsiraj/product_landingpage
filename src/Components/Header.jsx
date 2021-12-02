import React from 'react'

const Header = (props) => {
    return (
        <>
            <header>
                <div className="main-header">
                    <p className="small">{props.first}</p>
                    <h1 className="large">{props.sec}</h1>
                    <p className="header-text">{props.third}</p>
                </div>
            </header>
            
        </>
    )
}

export default Header
