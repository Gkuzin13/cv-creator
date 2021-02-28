import React, { useState } from 'react';
import WorkExpTab from './WorkExpTab';


const WorkHistoryForm = ({ value, 
                           cvData, 
                           addWorkExp, 
                           dataFromInput, 
                           removeWorkExpTab,
                           editWorkExpTab }) => {

    return (
        <div className='form-ctn'>
        <WorkExpTab cvData={cvData} 
                    removeWorkExpTab={removeWorkExpTab}
                    editWorkExpTab={editWorkExpTab} />
          <div className='input-ctn'>
            <div>
              <label htmlFor='job-title'>Job Title</label>
              <input type='text'
              value={value.jobTitle}
              name='jobTitle'
              onChange={(e) => dataFromInput(e)} />
            </div>
            <div>  
              <label htmlFor='job-city'>City/Town</label>
              <input type='text'
              value={value.jobCity}
              name='jobCity'
              onChange={(e) => dataFromInput(e)} />
            </div> 
          </div>

          <div>
            <label htmlFor='company-name'>Company name</label>
            <input type='text'
            value={value.companyName}
            name='companyName'            
            onChange={(e) => dataFromInput(e)} />
          </div>    
        
          <div className='input-ctn'>
            <div> 
              <label htmlFor='start-date'>Start date</label>
              <input type='date' id='start-date'
              name='workStartDate'
              value= {value.workStartDate}
              onChange={(e) => dataFromInput(e)} />
            </div>
            <div> 
              <label htmlFor='end-date'>End date</label>
              <input type='date' id='end-date'
              name='workEndDate'
              value={value.workEndDate} 
              onChange={(e) => dataFromInput(e)} />
            </div>
          </div>

          <div className='textarea-ctn'>
            <textarea rows='4' wrap='soft'
            style={{ resize: 'none', marginTop: '0.5rem', width: '100%' }}
            name='jobDescription'
            value={value.jobDescription}
            placeholder='Type your responsibilities and achievments here.'
            onChange={(e) => dataFromInput(e)} />
          </div>

          <div>
            <button className='add-btn'
            type='button'
            onClick={addWorkExp}
            >Add work experience</button>
          </div> 
        </div>
    );
};

export default WorkHistoryForm;
