import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
const Text = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text] = useTypewriter({
        words:['New Fashion','Designs','more..'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
    });
    return(
        <div className="flex justify-center items-center mt-5 mb-8" >
            <div>            
                <h1 style={{fontSize:'50px'}}>
                    Explore {" "}
                    <span style={{fontWeight:'bold',color:'red'}}>
                        {text}
                    </span>
                    <span style={{color:'red'}}>
                    <Cursor cursorStyle='❤️'/>
                    </span>
                </h1>
            </div>
        </div>
        
    );
}

export default Text