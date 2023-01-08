import React from "react";
import './Searchbar.css';
import {Navlink} from "react-router-dom";


function Searchbar()
{
  return(
    <div>
    <div class="conatiner_search">
            <form  class="searchbar"action="">
                <input type="text"
                    placeholder=" Search..."
                    name="search"/>
                <button type="submit"><img src="/data/searchicon.png"></img>
                    
                </button>
            </form>
        </div>
    
    
    </div>
  );


}
export default Searchbar;