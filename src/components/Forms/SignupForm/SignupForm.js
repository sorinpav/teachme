import React from 'react';
import './SignupForm.scss';

const SignupForm = () => {
  return (
    <div className='SignupForm'>
      <div className='center-container'>
        <div className='grid-container'>
          <div className='left-side'>
            <div className='sign-up-intro'>
              <span className='sign-up-to-teach-or-learn'>
                Sign up to teach or learn a new skill
              </span>
              <span className='make-money-online'>
                Make money by showcasing your skills and teaching people
              </span>
              <span className='copyright'>
                Made with love by Sorin Pavelescu
              </span>
            </div>
          </div>
          <div className='right-side'>
            <div className='sign-up-form'>
              <div className='get-started'>
                <span className='get-started-text'>Get Started</span>
                <span className='login-methods'></span>
                <span className='already-registered'>
                  Already have an account? <a href='#'>Login</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
