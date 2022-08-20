import React, {} from 'react';
import GiftGridItem from "./GiftGridItem";

import {useFetchGifs} from "../hooks/useFetchGifs";

function GifGrid({ category }) {

    const { data: images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className={ "animate__animated animate__bounce animate__fadeInDown" }>{category}</h3>
            { loading && <p className={ " animate__animated animate__bounce animate__flash "}>Loading </p> }
            {/*operador ternario rapido, solo evalua el true */}
            <div className={"card-grid"}>
                {
                    images.map(img => (
                        <GiftGridItem
                            key={img.id}
                            {...img} // le envia los paramentros por separado
                        />
                    ))
                }
            </div>
        </>
    );
}

export default GifGrid;