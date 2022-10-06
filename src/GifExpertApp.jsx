import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories] = useState([ ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory )) return;

        setCategories(current => [newCategory,...current]);
    }

    console.log( categories );
    return (
        <>
            <h1> Gif Cristian </h1>

            < AddCategory 
                //setCategories = { setCategories }
                onNewCategories = { (value) => { onAddCategory(value)}}    
            />
            
                { categories.map( ( category ) => 
                     (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
        </>
    )

}