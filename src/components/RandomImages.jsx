import React, { useEffect, useRef, useState } from "react";
import "./randomImages.css";

import Image from "./Image";

const RandomImages = () => {
    const [images, setImages] = useState([]);
    const searchRef = useRef();

    function getImages() {
        fetch(`https://api.unsplash.com/photos/random?query=${searchRef.current}&count=16`, {
            method: "GET",
            headers: {
                Authorization: `Client-ID 5-sYIFigG2GxEMMK3BBFDHo4pTGIxDnUApvnpBWaty8`,
            },
        }).then((res) => res.json().then((data) => setImages(data)));

        searchRef.current.value = "";
    }

    useEffect(getImages, []);

    if (!images) {
        return "нету ничего домой.";
    }

    return (
        <div className="container">
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    getImages();
                }}
            >
                <input
                    ref={searchRef}
                    className="search"
                    type="search"
                    placeholder="Любые фото по желанию"
                    onChange={(e) => {
                        searchRef.current.value = e.target.value;
                    }}
                />
                <button className="btn">Поиск</button>
            </form>

            <div className="gallery">
                {!images ? (
                    images.map((i, inx) => <Image key={inx} i={i} />)
                ) : (
                    <h2>There is no image yet!</h2>
                )}
            </div>
        </div>
    );
};

export default RandomImages;
