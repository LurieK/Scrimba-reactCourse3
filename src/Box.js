import React from 'react';

function Box(props){
    // const [color, setColor] = React.useState(props.on)
    console.log(props.id)
    const styles={
        backgroundColor: props.on ? '#222222' : 'transparent'
   }

//    function changeColor(){
//         setColor(prevColor => !prevColor)
//    }

    return (
        <div 
            onClick={props.handleClick}
            // onClick={changeColor}
            className="boxes"
            style={styles}
        ></div>
    )

}

export default Box