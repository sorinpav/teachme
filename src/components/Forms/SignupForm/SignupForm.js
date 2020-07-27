import React from 'react';
import './SignupForm.scss';
import SignupList from './SignupList';
/*
This is the whole sign up form, it has 2 sides, .left-side and .right-side. 
Left side contains some marketing text and the logo, right side contains a form that is 
animated and lets the user sign in via Twitter / Facebook / Email and password. 
It currently has no input validation. 
TODO: Add input validation
3 steps mentioned on issue 10
*/
const SignupForm = () => {
  return (
    <div className='SignupForm'>
      <div className='grid-container'>
        <div className='left-side'>
          <div className='company-logo'>
            <span>Company Logo Placeholder</span>
          </div>
          <div className='sign-up-intro'>
            <span className='sign-up-to-teach-or-learn'>
              Sign up to teach or learn a new skill
            </span>
            <span className='make-money-online'>
              Make money by showcasing your skills and teaching people
            </span>
            <span className='copyright'>Made with love by Sorin Pavelescu</span>
          </div>
        </div>
        <div className='right-side'>
          <div className='sign-up-form'>
            <div className='get-started'>
              <span className='get-started-text'>Get Started</span>
              <span className='login-methods'>
                <SignupList />
              </span>
              <span className='already-registered'>
                Already have an account? <a href='#'>Login</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
