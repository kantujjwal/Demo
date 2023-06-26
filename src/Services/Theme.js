import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Switch } from 'antd';

const Theme = () => {
   const [theme, setTheme] = useState('default-theme');
   const [themes, setThemes] = useState('default-theme');

   const changeTheme = () => {
      setTheme(prevTheme => prevTheme === 'default-theme' ? 'alternate-theme' : 'default-theme');

   };

   const onChange = (checked) => {
      setThemes(checked => checked === 'default-theme' ? 'alternate-theme' : 'default-theme');
      changeTheme()
   }

   const appThemes = (setThemes) => {
      localStorage.setItem('theme', setThemes);
   }
   return (
      <div className='pt-3 pb-3'>
         <Container className='pb-5 mb-2'>
            <div className={`app ${theme}`}>
               <h1>Hello, World!</h1>
               <button className='btn btn-dark' onClick={changeTheme}>Change Theme</button>
            </div>
            <div className={`app ${themes}`}>
               <Switch className='mt-3'
                  onClick={onChange}
                  onChange={appThemes}
               />
            </div>
         </Container>
      </div>
   )
}

export default Theme;
