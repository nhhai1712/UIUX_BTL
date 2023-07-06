function SearchBar(props) {
    function handleSearchTermChange(event) {
      const searchTerm = event.target.value;
      props.onChange(searchTerm);
    }
  
    return (
      <div>
        <label>
          <input type="text" onChange={handleSearchTermChange} value={props.searchTerm} className="w-60 h-10 border-gray-200  border-2 mr-2 rounded-md" placeholder="    Search"/>
        </label>
      </div>
    );
}
export default SearchBar;