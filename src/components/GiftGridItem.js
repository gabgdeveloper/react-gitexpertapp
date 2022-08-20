import React from 'react';


const GiftGridItem = ({id, title, url} ) => {


    return (
            <div className = "card animate__animated animate__bounce animate__fadeInDown" >
            <img src={ url  } alt={ title } />
            <p> {title }</p>
        </div>
    );
}



GiftGridItem.propTypes = {

};

export default GiftGridItem;