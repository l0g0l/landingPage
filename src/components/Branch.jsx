import React from 'react'

const Branch = ({ display, position, top, left }) => {
    return (
        <>
            <div className="branch-dev">
                <div className="commit-main" style={{ display: display, position: position, top: top, left: left }}>
                </div>
            </div>
        </>
    )
}

export default Branch
