import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";



function GitExpertApp( xp = 'test') {

    const [categories,setCategories] = useState( ["One piece" ]);

    // const handleAdd = () => {
    //     //setCategories([...categories,'Hunter Hunter'] ); /// aregando al conjunto de array una hunter hunter --- form 1
    //    // setCategories(['Hunter Hunter', ...categories] ); /// aregando al conjunto de array una hunter hunter --- form 2
    //     setCategories( cats => [...categories,'Jsx jxs'] ); /// aregando al conjunto de array una hunter hunter --- form 3
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }  />
            {/*<AddCategory   />*/}
            {/*<button onClick={ handleAdd }>Agregar</button>*/}
            <hr/>
            <ol>
                {/*{categories.map( (category,index) =>  <li key={index}> {category}  </li>  )}*/}
                {categories.map( (category,index) =>  ( <GifGrid
                                                                    key = { category }
                                                                    category = { category } />
                    )
                )}
            </ol>
        </>
    );
}

export default GitExpertApp;


