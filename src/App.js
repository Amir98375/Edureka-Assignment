import React from 'react'

import AllCollapseExample, { Accordian } from './component/Accordian';
import { Course } from './component/Course';


import { Navbar } from './component/Navbar';
import { ProductPage } from './component/ProductPage';
 const App = () => {
  return (
    <div>

<Navbar/>
<ProductPage/>
<Course/>
<Accordian/>
    </div>
  )
}
export default App;