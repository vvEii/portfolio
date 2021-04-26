import React from 'react';
import ResumeFrame from '../components/ResumeFrame';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='px-8 flex items-center w-screen'>
      <ResumeFrame />
      <Link to='/Resume.pdf' target='_blank' download>
        Download
      </Link>
    </div>
  );
};

export default Resume;
