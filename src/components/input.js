function Input(props){
    const {placeholder,onChange,type,value}= props;
    return(
        <input
        value={value}
        style={{padding:"20px", fontSize:"2em"}}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        />
    )
}

export default Input;