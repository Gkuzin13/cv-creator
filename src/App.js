import React, { useState } from 'react';
import EducationForm from './components/EducationForm';
import GeneralInfoForm from './components/GeneralInfoForm'
import PreviewCV from './components/PreviewCV';
import SubmitButton from './components/SubmitButton'
import WorkHistoryForm from './components/WorkHistoryForm';
import Collapsible from './components/Collapsible';
import uuid from 'react-uuid';

function App() {
  const [ cvData, setCvData ] = useState([])
  const [ showPreview, setShowPreview ] = useState(false);
  const [ generalInfo, setGeneralInfo ] = useState({
    profile: {
      fname: '',
      lname: '',
      profession: '',
      address: '',
      stateProvince: '',
      email: ''
    }
  });

  const [ workInfo, setWorkInfo ] = useState({
    work: {
      workId: uuid(),
      jobTitle: '',
      jobCity: '',
      companyName: '',
      workStartDate: '',
      workEndDate: '',
      jobDescription: ''
    }
  });

  const [ eduInfo, setEduInfo ] = useState({
    education: {
      eduId: uuid(),
      degree: '',
      institution: '',
      eduCity: '',
      eduStartDate: '',
      eduEndDate: '',
    }
  });

  const addWorkExp = () => {
    setCvData(cvData => [ ...cvData, workInfo ]);

    setWorkInfo({
      work: {
        workId: uuid(),
        jobTitle: '',
        jobCity: '',
        companyName: '',
        workStartDate: '',
        workEndDate: '',
        jobDescription: ''
      }
    });
  };

  const removeWorkExpTab = (id) => {

    const filteredData = cvData.map(item => item).filter(work => {
      // Checks if the array has an work Object, if yes filters
      // the matched id else keeps it as is 
      return work.work ? work.work.workId !== id : work;
    });

    setCvData(filteredData)

    console.log(cvData);
  };

  const editWorkExpTab = (id) => {
    const filteredData = cvData.map(item => item).filter(work => {
      // Checks if the array has an work Object, if yes filters
      // the matched id else keeps it as is 
      return work.work ? work.work.workId === id : null;
    });

    removeWorkExpTab(id);
    
    setWorkInfo( ...filteredData );
    console.log(cvData);
  };

  const addEduTab = () => {
    setCvData(cvData => [ ...cvData, eduInfo ]);
    
    setEduInfo({
      education: {
        eduId: uuid(),
        degree: '',
        institution: '',
        eduCity: '',
        eduStartDate: '',
        eduEndDate: '',
      }
    });

    console.log(cvData)
  };

  const editEduTab = (id) => {
    const filteredData = cvData.map(item => item).filter(edu => {
      // Checks if the array has an education Object, if yes filters
      // the matched id else keeps it as is 
      return edu.education ? edu.education.eduId === id : null;
    });

    removeEduTab(id);

    setEduInfo( ...filteredData )
    console.log(cvData);
  };
  
  const removeEduTab = (id) => {
    const filteredData = cvData.map(item => item).filter(edu => {
      // Checks if the array has an education Object, if yes filters
      // the matched id else keeps it as is 
      return edu.education ? edu.education.eduId !== id : edu;
    });

    setCvData(filteredData);

    console.log(filteredData)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCvData = cvData.filter(item => !item.profile).concat(
      {
        ...generalInfo,
        profile: generalInfo.profile
      }
    );
    
    setCvData(newCvData);
    
    setEduInfo({
      education: {
        eduId: uuid(),
        degree: '',
        institution: '',
        eduCity: '',
        eduStartDate: '',
        eduEndDate: '',
      }
    });

    setWorkInfo({
      work: {
        workId: uuid(),
        jobTitle: '',
        jobCity: '',
        companyName: '',
        workStartDate: '',
        workEndDate: '',
        jobDescription: ''
      }
    });

    togglePreview();
  };
  
  const handleFormChange = (e) => {
      const { name, value } = e.target

      setGeneralInfo({
        ...generalInfo,
        profile: {
          ...generalInfo.profile,
          [name]: value
        }
      });

      setWorkInfo({
        ...workInfo,
        work: {
          ...workInfo.work,
          [name]: value
        }
        
      });

      setEduInfo({
        ...eduInfo,
        education: {
          ...eduInfo.education,
          [name]: value
        }
      });
  };

  const togglePreview = () => {
    showPreview ? setShowPreview(false) : setShowPreview(true);
  };
  return (
    <div>
      <svg className='svg-gradient' 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="rgb(77, 101, 240)" fill-opacity="1" 
      d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,122.7C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <PreviewCV cvData={cvData}
                 togglePreview={togglePreview} 
                 showPreview={showPreview} />
    
      <form onSubmit={handleSubmit} className='forms-ctn'
      style={{ display: showPreview ? 'none' : 'flex'}}>

        <SubmitButton />

        <Collapsible title='Profile' 
        content={<GeneralInfoForm dataFromInput={handleFormChange}
        value={generalInfo.profile} />}
        />
        <Collapsible title='Work Experience'
        content={<WorkHistoryForm 
                 dataFromInput={handleFormChange}
                 addWorkExp={addWorkExp}
                 value={workInfo.work}
                 cvData={cvData}
                 removeWorkExpTab={removeWorkExpTab}
                 editWorkExpTab={editWorkExpTab} />}
        />
        <Collapsible title='Education' 
        content={<EducationForm 
                 dataFromInput={handleFormChange}
                 value={eduInfo.education}
                 cvData={cvData}
                 addEduTab={addEduTab}
                 removeEduTab={removeEduTab}
                 editEduTab={editEduTab} />}
        />
      </form>
    </div>
  );
};

export default App;
