
import './App.css';
import images from '../src/images/vibe vault.png'
import { Button } from '@mui/material';




function App() {
  return (
   
     <div id='main'>
      
      <div id='nav1'>
        <div id='block1' style={{textAlign:"center"}}>
            <img  src={images} alt='vibeVault logo' style={{width:'100px', height:'100px',margin:'10px'}}/><br></br>
            <div className="home-icon">
            <span className="material-symbols-outlined">home</span>
            <span className="icon-text">Home</span>
          </div>

          <div className="icon-with-text">
              <span className="material-symbols-outlined">search</span>
              <span className="icon-text">Search</span>
            </div>
        </div>
       
        <div id='lib'>
          <span className="material-symbols-outlined">library_books</span>
          <span className='your-library'>Your Library</span>
          <span className="material-symbols-outlined">add</span>
        </div>
        
        <div id='lib1'>
          <div className='block1'>
           <span className='sub-block1'>Create your first playlist </span>
           <span className='sub-block2'>it's easy we'll help you</span>
           <button className='sub-block3'>Create playlist</button>
          </div>
       
       
        <div id='lib2'>
        <div className='block2'>
           <span className='sub-block4' >Let's Follow some podcast to follow</span>
           <span className='sub-block5'>We'll keep you updated on new episodes</span>
           <button className='sub-block6' >Browse Podcasts</button>
        </div>
        </div>
        </div>
          
      <div id='lib3'>
        <div className='block3'>
          <span>Legal</span>
          <span>Safety & privacy center</span>
          <span>Privacy policy</span>
        </div>
        <div className='block4'>
           <span>cookies</span>
           <span>About ads</span>
           <span>Accessbility</span>
        </div>
        <div className='block5'>
           <span>cookies</span>
        </div>
        <div className='block6'>
           <button>English</button>
        </div>
      </div>
        
      </div>
{/* 1st nav complited here */}

      <div id='nav2'>
         <div id='sub-nav1'>
         <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
        <button className="navbar-nav-button l">{"<"}</button>
        <button className="navbar-nav-button r">{">"}</button>
        </div>
        <div className="navbar-right">
          <button className="navbar-button signup">Sign up </button>
          <button className="navbar-button login">Log in</button>
        </div>
      </div>
    </nav>
         </div>

         <div id='landing1'>
          
         </div>

         <div id='landing2'>
          
          </div>

          <div id='landing3'>
          
          </div>

          <div id='landing4'>
          
          </div>

          <div id='landing5'>
          
          </div>

          <div id='landing6'>
          
          </div>
      </div>
       
       
     </div>
    
  );
}

export default App;
