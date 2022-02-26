import React, { useState , useEffect } from 'react'

import Sidebar from './sidebar'
import Mainsection from './Mainsection'
import Customlink from './customlink'
import Maindata from './maindata'


function App() {
 
  


  

  return (
    <div className="App">

      <div className="header">Lorem Ipsum is simply dummy text of the printing</div>
      

      <div className='section-flex'>


          <Sidebar />

        <Mainsection />

        <Customlink />

      </div>

          </div>
    // end of App container
  );
}

export default App;
