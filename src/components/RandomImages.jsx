import React, { useEffect, useState } from "react";
import "./randomImages.css";

const RandomImages = () => {
    const [images, setImages] = useState([]);
    const [search, setSearch] = useState("");

    function getImages(target) {
        fetch(`https://api.unsplash.com/photos/random?query=${target}&count=16`, {
            method: "GET",
            headers: {
                Authorization: `Client-ID 5-sYIFigG2GxEMMK3BBFDHo4pTGIxDnUApvnpBWaty8`,
            },
        }).then((res) => res.json().then((data) => setImages(data)));
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
                    setSearch("");
                }}
            >
                <input
                    className="search"
                    type="search"
                    placeholder="Любые фото по желанию"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn">Поиск</button>
            </form>

            <div className="gallery">
                {images.map((i, inx) => {
                    return (
                        <div className="box">
                            <img className="img" key={inx} src={i.urls["small"]} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RandomImages;
