import React from "react";
import { Link } from "react-router-dom";

function Links() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/Components" >Components</Link>
                </li>
                <li>
                    <Link to="/Movies" >Movies</Link>
                </li>
                <li>
                    <Link to="/270922/" >270922</Link>
                </li>
            </ul>
      </nav>
    );
  }
  
  export default Links;