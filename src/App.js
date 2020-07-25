import React from 'react';
import './App.css';
import Person from './Person.js';


const App = ()=> <PersonList/>

const PersonList = () =>{
  const People = [
    {
      img:22,
      job: 'Smeg Head',
      name:'Tessa'
    },
    {
      img:56,
      job: 'developer',
      name:'Tony'
    },
    {
      img:32,
      job: 'Food Op',
      name:'Tammy'
    }
  ];

return (<section>
<Person person={People[0]}/>
<Person person={People[1]}>
<p>App.js is the beat for heat blah blag blah blahhh</p>
</Person>;
<Person person={People[2]}/>
</section>
);
}


export default App;
