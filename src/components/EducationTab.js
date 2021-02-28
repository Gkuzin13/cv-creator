import React from 'react';
import uuid from 'react-uuid';
import format from 'date-fns/format'

const EducationTab = ({ removeEduTab, editEduTab, cvData }) => {
    const data = [...cvData].filter(item => 
      item.education).map(edu => edu.education);

    if(data.length === 0) {
      return null;
    }

    return (
      <div>
        {data.map((item) => {
           return (
            <div key={uuid()} className='work-exp-tab-ctn'>
              <div className='work-exp-tab-info'>
                <p><b>{item.degree}</b><br/>
                {item.eduStartDate === '' ? '' : format(new Date(item.eduStartDate), 'MM/yyyy')}
                {' - '} 
                {item.eduEndDate === '' ? '' : format(new Date(item.eduEndDate), 'MM/yyyy')}
                </p>
              </div>
              <div className='work-exp-tab-actions' >
                <i className="fas fa-trash-alt"
                style={{ fontSize: '1.2rem'}}
                onClick={() => removeEduTab(item.eduId)}
                />
                <i className="fas fa-pen"
                onClick={() => editEduTab(item.eduId)} />
              </div>
            </div>
            )
        })}
      </div>
    );
};

export default EducationTab;
