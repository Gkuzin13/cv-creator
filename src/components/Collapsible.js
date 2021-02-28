import React, { useState } from 'react'
import './Collapsible.css';

const Collapsible = ({ content, title }) => {
    const [ toggle, setToggle ] = useState();
   

    function toggleCollapsible() {
      toggle ? setToggle(false) : setToggle(true);
      
    };

    return (
      <div>
          <button type='button' 
          className='collapsible'
          onClick={toggleCollapsible}>
          <label>{title}</label>
          <i className={toggle ? 'fas fa-chevron-down rotate' : 
            'fas fa-chevron-down'}></i>
          </button>  
          <div className=
            {toggle ? 'content content_active' : 'content'}>
            {content}
          </div>
      </div>
    );
};

export default Collapsible
