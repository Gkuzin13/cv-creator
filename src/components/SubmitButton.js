import React, { useState } from 'react';
import './SubmitButton.css'


const SubmitButton = () => {
    return (
        <div className='submit-btn-ctn'>
            <button type='submit'
            className='submit-btn'>
              <div className='btn-content'>
                <p>Preview</p>
                <i className="fas fa-check-square"aria-hidden="true">
                </i>
              </div>
            </button>
        </div>
    );
};

export default SubmitButton
