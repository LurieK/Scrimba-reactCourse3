import React from 'react';

function Box(props){
    const [color, setColor] = React.useState(props.on)
    
    const styles={
        backgroundColor: color ? '#222222' : 'transparent'
   }

   function changeColor(){
        setColor(!color)
   }

    return (
        <div 
            onClick={changeColor}
            className="boxes"
            style={styles}
        ></div>
    )

}

export default Box