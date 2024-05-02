/* No se debe colocar la ejecucion de una funcion directamnete en un funcionar component */

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}

            <div className="card-grid">
                {images.map((image) => (
                    // <li key={id}>{title}</li>

                    // <GifItem
                    //   key={image.id}
                    //   image={image}
                    //   title={image.title}
                    //   url={image.url}
                    // />

                    <GifItem
                        key={image.id}
                        {...image} // de esta forma puedo exparcir todos los elementos del objeto como prop
                    />
                ))}
            </div>
        </>
    );
};
