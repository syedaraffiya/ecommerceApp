function Button(props){
    const{value ,onClick}= props
    return(
        <button style={{padding:"20px", fontSize:"2em"}}onClick={onClick}>
            {value}
        </button>
    )
}
export default Button;