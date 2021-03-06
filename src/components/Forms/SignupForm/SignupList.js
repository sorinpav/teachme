import React from 'react';
import SignupItem from './SignupItem';
import './SignupList.scss';

/*
This is the full list of Signup Items from SignupItem.js. Represents all the possible sign in / sign up methods. 
*/
const SignupList = () => {
  return (
    <div className='signup-list'>
      <SignupItem
        logo={'../../../../Design/brand-assets/email-logo.png'}
        signupMethod={'Email'}
      />
      <SignupItem
        logo={'../../../../Design/brand-assets/facebook-logo.png'}
        signupMethod={'Facebook'}
      />
      <SignupItem
        logo={'../../../../Design/brand-assets/twitter-logo.png'}
        signupMethod={'Twitter'}
      />
    </div>
  );
};

export default SignupList;
