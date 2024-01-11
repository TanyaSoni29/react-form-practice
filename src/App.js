
import { useState } from 'react';
import './App.css';

function App() {
 
//   const[firstName, setFirstName] = useState("")
//   const[lastName, setLastName] = useState("")

// function firstChangehandler(event){
//   setFirstName(event.target.value);
// }

// function lastChangehandler(event){
//   setLastName(event.target.value);
// }

const[formData, setFormData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  comments: "",
  isVisible: false,
  mode:"",
  favChoc:""
});

console.log(formData)

function changeHandler(event){
  const{name, value, checked, type} = event.target
setFormData( (prevState) => {
  return {
    ...prevState,
    [name] : type ==="checkbox" ? checked: value 
  }
})
}

function submitHandler(event){
event.preventDefault();
console.log("printing of form data")
console.log(formData)
}

  return (
    <div className="App">
     <form onSubmit={submitHandler}>

      <input type='text' name="firstName" placeholder='First Name' onChange={changeHandler} value={formData.firstName} />
      <br></br>
      <br></br>

      <input type='text' name='lastName' placeholder='last Name' onChange={changeHandler} value={formData.lastName} />

      <br></br>
      <br></br>
      <input type='email' name='email' placeholder='Enter Your email' onChange={changeHandler} value={formData.email}/>

      <br />
      <br />
      <textarea placeholder='write your comments' name='comments' value={formData.comments} onChange={changeHandler}></textarea>

      <br />
      <br />
      <input type='checkbox' onChange={changeHandler} name='isVisible' checked={formData.isVisible} id='isVisible'></input> 
      <label htmlFor='isVisible'> Am i visible </label>

      <br />
      <br />
      <input type='radio' onChange={changeHandler} name='mode' value="Online-Mode" id='Online-Mode' checked={formData.mode === "Online-Mode"}></input> 
      <label htmlFor='Online-Mode'>Online Mode </label>
      
      <br />
      <br />
      <input type='radio' onChange={changeHandler} name='mode' value="Offline-Mode" id='Offline-Mode' checked={formData.mode === "Offline-Mode"}></input> 
      <label htmlFor='Offline-Mode'>Offline Mode </label>

      <br />
      <br />
      <select onChange={changeHandler} name='favChoc' id='favChoc' value={formData.favChoc}>
        <option value="DarryMilk">DarryMilk</option>
        <option value="Silk">Silk</option>
        <option value="KitKat">KitKat</option>
        <option value="Hunger">Hunger</option>
        <option value="5Star">5Star</option>
      </select>
      <label htmlFor='favChoc'>Tell me Your favChocklate? </label>

      <br />
      <br />
      {/* <input type="submit" value="submit" />  */}
      <button>Submit</button>
     </form>
   
    </div>
  );
}

export default App;
 
// when we are using name tag then the whole formData is tracked inside this varible but we want individual tracking inside the each input tag this can be done using value tag...
 
// checkbox me hum checked field ko check karte hai na ki value vali field ko use karte hai state maintain karne ke liye...


//in radio buttons if we don't use checked line and compare it then we doesn't have proper tracking of radio button. uss line ka mtlb hai ki agar mode me online mode hai toh checked kr do uss radio button ko nhi toh dusarra vala chek karo ....

 // for grouping of radio button we use feildset tag and for label that group we use legend tag. 