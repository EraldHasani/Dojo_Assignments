import React,{useState} from "react";

const Display =(props) => {
    const { tab, tabCont, } = props

    return ( 

        <>
        
        <div className="Content">
        <p>{tab[tabCont].content}</p>
        </div>
      
        </>


    )


}

export default Display;