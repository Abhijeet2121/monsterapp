


function SearchBox({className, placeHolder, onChangeHandler}){
    return (
    <input 
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
    />)
}

export default SearchBox;