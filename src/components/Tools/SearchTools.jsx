import { useState, useEffect, useRef } from 'react';
import axios from '../../api/axios';
import { SEARCH_SUGGESTIONS } from '../../api/apiUrls';
import "./buy.scss"

function SearchTools({searchParam, setSearchParam}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displaySearch,setDisplaySearch]=useState("none");
  const textboxRef = useRef();
  const condRef=useRef();
  const typeRef=useRef();

  const [condition,setCondition]=useState("new");
  const [type,setType]=useState("both");

  const fetchResults = async(event) => {
        //setLoading(false);
      const delayDebounce = setTimeout(async() => {

        const query = event.target.value.trim()
        if (query.length==0){
          setDisplaySearch("none");
        }
        if (query.length > 2) { // Start searching only after 3 characters
          //setLoading(true);
          try {
            const response = await axios.get(SEARCH_SUGGESTIONS, {params: { query: query } });
            let result = response.data.result;
            result.length?setDisplaySearch("block"):setDisplaySearch("none");
            let Unique_Result=new Set(result.map((item)=>{return item.tool_name;}));
            setResults(Array.from(Unique_Result));
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        }
      }
      , 0); // Debounce API calls
      return () => clearTimeout(delayDebounce);
    
  }


  useEffect(() => {
    try {
      let currentSessionStorage = sessionStorage.getItem('searchParam') || '{"query":"","condition":"both","type":"both"}';
      setSearchParam(currentSessionStorage)
      currentSessionStorage = JSON.parse(currentSessionStorage);
      setCondition(currentSessionStorage.condition);
      setType(currentSessionStorage.type);
      sessionStorage.setItem('searchParam', JSON.stringify(currentSessionStorage));
    }
    catch (error) {
      console.log(error);
    }
  })

  const updateSessionStorage = (name, key, value) => {
    try {
      let currentSessionStorage = sessionStorage.getItem('searchParam') || '{"query":"","condition":"both",type:"both"}';
      currentSessionStorage = JSON.parse(currentSessionStorage);
      currentSessionStorage[key] = value;
      sessionStorage.setItem(name, JSON.stringify(currentSessionStorage));
    }
    catch (error) {
      console.log("Error session", error);
    }

  }
  const handleClick=(event)=>{
    let searchItem=(event.target.innerText);
    setDisplaySearch("none");
    updateSessionStorage("searchParam","query", searchItem);
    textboxRef.current.value=searchItem;
  }

  const searchClick=()=>{
    let searchItem=textboxRef.current.value;
    setDisplaySearch("none");
    updateSessionStorage("searchParam","query", searchItem);
    let searchQuery=JSON.parse(sessionStorage.getItem("searchParam"));
    setSearchParam(searchQuery);
  }

  const handleSelectclick=(event)=>{
    let value = (event.target.value);
    let key= (event.target.id);
    updateSessionStorage("searchParam",key, value);
    key=="condition"?setCondition(value):setType(value);
  }


  return (
    <div className="search_main_container">
      <div className="search_cells_container">
      <label>New/Used</label>
      <select name="tools_condition" id="condition" ref={condRef} value={condition} onChange={handleSelectclick}>
        <option value="both">Both</option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select></div>

      <div className="search_cells_container">
        <label>Buy/Rent</label><select name="tools_sellType" ref={typeRef} value={type} id="type" onChange={handleSelectclick}>
        <option value="both">Both</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select></div>

      <div className="searchbox_container">
        <div>Name</div>
        <div className="searchText_inlineblock"><input
        type="text"
        placeholder="Search tools..."
        className="search-box"
        id="searchText"
        ref={textboxRef}
        onChange={fetchResults}
        autoComplete='off'
      /></div>
      <div className="searchIcon_inlineblock" onClick={searchClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAWlBMVEUii+b///8Th+WDtO4Ag+UAgeTw9v0cieaszfMAheX4+/77/f5GmelMm+mrzPRWoOqz0fTk7/sAfeQ2k+eJue/F3PfY5/mXwfFmp+t0ru3P4vi71vXf6/qhx/IBCFp5AAACvElEQVRoge2ZYZOjIAyGMQUiorUuVdut+///5hFs91pXkK44c3NjPhr6NL4kQIRlGxrb4Tv8N3CZHxJYLufgOSpIYAqPP+HHD2RJDD+OU7jERGxLRzmB5yoVmzGVT+AHSAeHww7f4Tv8f4EDF2iMUUJFrW5vwFGxcysLrXXR3K4qgh8P53WbPdvJ8FRwwFc02ZEvBB8JVxc9umXX3trhvgnIMjz7cXBxdr7iqwJOxuqTe6DrID0KrkZ2/z2JiBxHfJAeA4cLOZrydQLFpaCXMQHdY+BIencwdYAh6RuxCs4pT5qZ10ejnVgr4FjT49m8gCsJsyZyRYH38wUjnM87pxGyUHSeV0dDinkrdREOlIZfPl3FJ0nmS5hFuJvOKvhzry6LcGHzTforpbQ/aX26LMLRlkrnVRWZ/e/Bl+qLcMrlm39x5Y19sa3gYjXcK6qtAoL/WnNlNR8Ce84qzd17M18qImWLV7XlyG/2Ye3N8956z7/Oc6TF6eSLTQzWazzOmIWL1lVP5EArpr8KIuC0n53m50x0IVVi1nNa+bLLHIGT4oG1IWYnol51bq9Ubm+9roIzTnulNFMHd+x23R5qk5nmVF/Fc/Agejc+dLaIOre4pLBBGgFjOSGIuhvH68CpK+7EBXXhnJ+HknHBWdUP2cN0tWYPdcNMc/fLpmke3wvaWgdjjz3louiL7NXkVYCbjcwXe/z5XLG+eUJ3ZzqCQaUDyrzTtgAve3t8lnK4nQ0fx0GZ+WN/rydC2xQJYaf076BQ7Ou7Oai8GZmgVbzHPlNNKfrQkT5zVk3S5I4Z+TP2NB20R/dE7fm9miaxp+r9oR513wQ+VlP7uqOk+2phdW/5VnAb+/RL7T/0vWWH7/AdvgxPeSHCpxciKa9yYHqVk+XpLqEegT9fn0GS6zM+d3227cXfBrbDd3i8/QH4myOkfCHaiAAAAABJRU5ErkJggg=="/>
      </div>
      </div>
      
      {loading && <p>Loading...</p>}
      <div className="search_results_container" style={{display:`${displaySearch}`}}>
        {results.map((tool,index) => (
          <div key={index} className="search_suggestion_item" onClick={handleClick}>{tool}</div>
          ))}
      </div>
    </div>
  );
}

export default SearchTools;
