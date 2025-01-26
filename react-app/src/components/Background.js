import React from 'react'

const Background = ({ children }) => {
    return (
        <div style={{
            backgroundColor: "#141414",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {children}
        </div>
    )
}

export default Background