import React, { useState } from 'react';
import EducationTab from './EducationTab';

const EducationForm = ({ value, 
                         dataFromInput, 
                         addEduTab,
                         removeEduTab,
                         editEduTab, 
                         cvData }) => {
  
    return (
      <div className='form-ctn'>
        <EducationTab cvData={cvData} 
                      removeEduTab={removeEduTab}
                      editEduTab={editEduTab}
                       />
        <div className='input-ctn'>
            <div>
              <label>Degree </label>
              <input type='text' 
              name='degree'
              value={value.degree}
              onChange={(e) => dataFromInput(e)} />
            </div>
            <div>
              <label>City/Town </label>
              <input type='text' 
              name='eduCity'
              value={value.eduCity}
              onChange={(e) => dataFromInput(e)} />
            </div>  
        </div>
            
        <div>
           <label>Institution </label>
            <input type='text'
            name='institution'
            value={value.institution}
            onChange={(e) => dataFromInput(e)} />
        </div>    

        <div className='input-ctn'>
            <div>   
              <label htmlFor='start-date-edu'>Start date</label>
              <input type='date' id='start-date-edu'
              name='eduStartDate'
              value={value.eduStartDate}
              onChange={(e) => dataFromInput(e)} />
            </div>
            <div>
              <label htmlFor='end-date-edu'>End date</label>
              <input type='date' id='end-date-edu'
              name='eduEndDate'
              value={value.eduEndDate} 
              onChange={(e) => dataFromInput(e)} />
          </div>
        </div>   
 
        <div>
            <button className='add-btn'
            onClick={addEduTab}
            type='button'>Add education</button>
        </div> 
      
      </div>
    );
};

export default EducationForm;