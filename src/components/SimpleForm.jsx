import React, { useState } from 'react';

const SimpleForm = () => {


  const [fullName, setFullName] = useState(null);


  function handleSubmit(formData) {
  
      const data = Object.fromEntries(formData);
      const skills = formData.getAll("skills");
      const allData = {
        ...data,
        skills
        // formData.getAll('skills')
      }
      console.log("The data: ",allData);
      
  
  } 
  // function handleSubmit(formData) {

  //   const firstName = formData.get('firstName');
  //   const lastName = formData.get('lastName');
  //   const gender = formData.get('gender');
  //   const skills = formData.getAll('skills');
  //   const favColor = formData.get('favColor');


  //   console.log('fav color: ',favColor);
    

  //   console.log('Skills: ',skills);
    

  //   console.log('gender: ',gender);
    


  //   setFullName(() => firstName + " " + lastName);

  // }

  // function handleSubmit(event) {

  //     event.preventDefault();

  //     const formEl = event.currentTarget;
  //     const formData = new FormData();
  //     const firstName = formData.get('firstName');
  //     const lastName = formData.get('lastName');

  //     setFullName(() => firstName + " " + lastName);


  //     formEl.reset();

  //     // fullName = firstName + " " + lastName;
  // }
  return (
    <div className="container">
      <h1>The contact name is: {fullName}</h1>
      {/* <form action="" id="my-form" onSubmit={handleSubmit}> */}
      <form action={handleSubmit} id="my-form" >
        <label htmlFor="first-name">First Name: </label>
        <input type="text" id="first-name" name="firstName" className="input" />
        <br />
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" id="last-name" name="lastName" className="input" />
        <br />

        <label htmlFor="hobbies">Hobbies</label>
        <textarea name="hobbies" id="hobbies" placeholder='Enter hobbies'></textarea>
        <br />

        <fieldset>
          <legend>Employee Gender</legend>

          <input type="radio" name="gender" value="Male" defaultChecked/>Male
          <input type="radio" name='gender' value="Female" />Female
        </fieldset>

        <br />

        <fieldset>
          <legend>Skills</legend>
          <label htmlFor="c++">
            <input type="checkbox" name='skills'  value="c++"/> C++
          </label>
          <label htmlFor="java">
            <input type="checkbox" name='skills'  value="java"/> Java
          </label>
          <label htmlFor="php">
            <input type="checkbox" name='skills'  value="php"/> Php
          </label>
        </fieldset>


<label htmlFor="favColor">What is color?</label>

    <select name="favColor" >
      <option>Select one</option>
      <option value="yello">yello</option>
      <option value="red">red</option>

      <option value="gree">green</option>

    </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;