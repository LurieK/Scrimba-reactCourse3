
function Box(props){
    console.log(props)
    const styles={
        backgroundColor: props.on ? '#222222' : 'none'
   }
    return (
        <div className="boxes"
            style={styles}
        ></div>
    )

}

export default Box