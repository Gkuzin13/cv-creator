import React, { useState } from 'react'

const GeneralInfoForm = ({ value, dataFromInput }) => {
    
    return (
      <div className='form-ctn'>
        <div className='input-ctn'>
          <div>      
            <label>First name </label>
            <input type='text' 
            name='fname'
            value={value.fname} 
            onChange={(e) => dataFromInput(e)} />
          </div>
          <div>
            <label>Last name </label>
            <input type='text' 
            name='lname'
            value={value.lname} 
            onChange={(e) => dataFromInput(e)} />
          </div>
        </div>
        
        <div>
           <label>Profession </label>
           <input type='text' 
            name='profession'
            value={value.profession}
            onChange={(e) => dataFromInput(e)} />
        </div>

        <div className='input-ctn'>
          <div>     
            <label>City</label>
            <input type='text' 
            name='address'
            value={value.address}
            onChange={(e) => dataFromInput(e)} />
          </div>
          <div>
            <label>State/Province</label>
            <input type='text' 
            name='stateProvince'
            value={value.stateProvince}
            onChange={(e) => dataFromInput(e)} />
          </div>  
        </div>

        <div>
          <label>Email</label> 
          <input type='email'
          name='email'
          value={value.email} 
          onChange={(e) => dataFromInput(e)} />
        </div>
      </div>
    );
};

export default GeneralInfoForm
