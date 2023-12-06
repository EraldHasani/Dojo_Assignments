import React, { useState } from "react";

const Tabs = (props) => {

    const { tab, tabCont, setTabCont } = props
    console.log(setTabCont);
    return (

    <>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",

            }}>

                <div className="App">
                    <div className="tab-list">
                        {
                            tab.map((tab, index) =>
                                <button onClick={(e) => setTabCont(index)} key={index}>{tab.tittle}</button>
                            )
                        }

                    </div>
                    </div>
                    
                    </div>
                </>


                )


}

                export default Tabs;