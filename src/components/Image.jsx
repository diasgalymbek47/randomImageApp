import React, { useState } from "react";
import "./image.css";

const Image = ({ i }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="box" onClick={() => setOpen(!isOpen)}>
                <img className="img" src={i.urls["small"]} />
            </div>

            <div
                className={isOpen ? "box-full visible" : "box-full"}
                onClick={() => setOpen(!isOpen)}
            >
                <img
                    className="img-full"
                    src={i.urls["regular"]}
                    onClick={(e) => e.stopPropagation()}
                />
                <p className="desc" onClick={(e) => e.stopPropagation()}>
                    {i.description ? i.description : "There is no description"}
                </p>
            </div>
        </>
    );
};

export default Image;
