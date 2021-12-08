import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" style={{float: 'left'}}id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
       </ul>
     
    </div>
  
</nav>
        </>
    )
}

export default Navbar
