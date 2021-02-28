import React, { useState } from 'react';
import uuid from 'react-uuid';
import format from 'date-fns/format';
import './PreviewCV.css';

const PreviewCV = ({ cvData,
                     togglePreview, 
                     showPreview }) => {
    
    const profile = [...cvData].filter(item => 
      item.profile).map(prof => prof.profile);

    const work = [...cvData].filter(item => item.work)
      .map(item => item.work);

    const education = [...cvData].filter(item => item.education)
      .map(item => item.education);
    
    return (
        <div style={{ display: showPreview ? 'block' : 'none'}} >
          
          <div className='preview-ctn'>

          {profile?.map(info => {
            return (
              <div className='general-info-preview' key={uuid()}>
                 
                <div className='edit-cv-ctn'
                onClick={togglePreview}>
                  <i className="fas fa-pen-square"></i>
                </div>

                <div className='profile-info-ctn'>
                  <h1>{info.fname} {info.lname}</h1>
                  <p>{info.profession}</p>
                  <p><b>Address: </b>{info.address}, {info.stateProvince}</p>
                  <p><b>Email: </b> {info.email}</p>
                </div>  
              </div>
            )
          })}
          
          <div className='info-preview-ctn'>
            <h2>Work History</h2>
            <span className='preview-border'></span>

            {work?.map(info => {
              return (
                <div className='info-ctn' key={uuid()}>
                  <div className='date-info-ctn'>
                    <p>
                      <b>
                      {info.workStartDate === "" ? "" : format(new Date(info.workStartDate), 'MM/yyyy')}
                      {' - '} 
                      {info.workEndDate === "" ? "" : format(new Date(info.workEndDate), 'MM/yyyy')}
                      </b>
                    </p>
                  </div>

                  <div className='info-desc'>
                    <h2>{info.jobTitle}</h2>
                    <p><i>{info.companyName}, {info.jobCity}</i></p>
                    <p>{info.jobDescription}</p>
                  </div>
                </div>
              )
            })}

          </div>

          <div className='info-preview-ctn'>
            <h2>Education</h2>
            <span className='preview-border'></span>

            {education?.map(info => {
              return (
                <div className='info-ctn' key={uuid()}>
                  <div className='date-info-ctn'>
                    <p>
                      <b>
                      {info.eduStartDate === "" ? "" : format(new Date(info.eduStartDate), 'MM/yyyy')}
                      {' - '} 
                      {info.eduEndDate === "" ? "" : format(new Date(info.eduEndDate), 'MM/yyyy')}
                      </b>
                    </p>
                  </div>

                  <div className='info-desc'>
                    <h2>{info.degree}</h2>
                    <p><i>{info.institution}, {info.eduCity}</i></p>
                  </div>
                </div>
              )
            })}
            
          </div>  
          </div>
        </div>
    );
};

export default PreviewCV
