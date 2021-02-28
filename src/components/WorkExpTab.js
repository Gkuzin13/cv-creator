import React from 'react';
import uuid from 'react-uuid';
import format from 'date-fns/format';


const WorkExpTab = ({ removeWorkExpTab, editWorkExpTab, cvData }) => {

  const data = [...cvData].filter(item => 
    item.work).map(work => work.work);

  if (data.length === 0) {
    return null
  }

    return (
      <div>
        {data.map((item) => {
          return (
            <div key={uuid()} className='work-exp-tab-ctn'>
              <div className='work-exp-tab-info'>
                <p><b>{item.jobTitle}</b><br/>
                {item.workStartDate === "" ? "" : format(new Date(item.workStartDate), 'MM/yyyy')}
                {' - '} 
                {item.workEndDate === "" ? "" : format(new Date(item.workEndDate), 'MM/yyyy')}
                </p>
              </div>
              <div className='work-exp-tab-actions' >
                <i className="fas fa-trash-alt"
                style={{ fontSize: '1.2rem'}}
                onClick={() => removeWorkExpTab(item?.workId)} />
                <i className="fas fa-pen"
                onClick={() => editWorkExpTab(item?.workId)} />
              </div>
            </div>
            )
        })}
      </div>
    );
};

export default WorkExpTab;
