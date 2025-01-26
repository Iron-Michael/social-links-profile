import React from 'react'

const CardProfile = () => {
    return (
        <div className='card-bg'>
            <div style={{ width: "300px", display: "flex", justifyContent: "center" }}>
                <img src='avatar-jessica.jpeg' style={{ width: "70px", marginTop: "50px", borderRadius: "50px" }} />
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "20px", }}>
                <label style={{ color: "white", fontSize: "20px" }}>Jessica Randell</label>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "10px", }}>
                <label style={{ fontSize: "12px", color: "#C5E352", fontWeight: "bold" }}>London, United Kingdom</label>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "20px", }}>
                <label style={{ color: "white", fontSize: "12px" }}>"Front-end developer and avid reader."</label>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "20px", }}>
                <button className='button-social'>Github</button>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "10px", }}>
                <button className='button-social'>Frontend mentor</button>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "10px", }}>
                <button className='button-social' >Linkedin</button>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "10px", }}>
                <button className='button-social'>x</button>
            </div>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", marginTop: "10px", }}>
                <button className='button-social'>Instragram</button>
            </div>
        </div>
    )
}

export default CardProfile