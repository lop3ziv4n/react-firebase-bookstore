import React from "react";

const Loading = () => (
    <div className="vh-100 position-relative">
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="spinner-border text-warning" style={{width: '4rem', height: '4rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

);

export default Loading;
