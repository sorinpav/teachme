import React from 'react';
import './SignupItem.scss';
const SignupItem = ({ logo, signupMethod }) => {
  return (
    <div className='signup-item'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='text'>Sign up with {signupMethod}</div>
      </div>
    </div>
  );
};

export default SignupItem;
