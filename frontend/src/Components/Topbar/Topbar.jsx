


import React from 'react'
import '../Topbar/topbar.css'
import StoryImage from "../../assets/story.jpeg";
const Topbar = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg"    
     style={{
      backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
      position: 'fixed',
      zIndex: 99
    }}
    >
    <div class="container " 
     style={{marginRight:'10%'}}
    >
        <a class="navbar-brand" href="/">
           <img class="image-logo" src={StoryImage} alt="image"/>
            <span class="boox" 
            style={{color:'white'}}
            >
              StorySphere</span>
        </a>

        <div class="d-lg-none ms-auto me-4">
            <a href="settings" class="navbar-icon bi-person smoothscroll">
                {/* <div>
                   (LD.userdata.ProfilePic != null && !string.IsNullOrWhiteSpace(LD.userdata.ProfilePic))
                    {
                        <a class="" href="settings"> <img class="topImg" src="@($"data:image/png;base64,{LD.userdata.ProfilePic}")" alt="" /></a>
                    }
                    else
                    {
                        <a class="" href="settings">  <img class="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-_JNQmC3kZdL-Pr8Y2jgScNjuLMOehuQD2oee5ScbJ1pPjZEd9Htpf882TCQsPlH3DQ&usqp=CAU" /></a>
                    }
                </div> */}
            </a>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" style={{marginLeft:'2%'}} id="navbarNav">
            <ul class="navbar-nav ms-lg-5 me-lg-auto">
                <li class="nav-item  t1">
                    <a class="nav-link click-scroll" href="/Home">Home</a>
                </li>
                    
                <li class="nav-item t1">
                    <a class="nav-link click-scroll" href="/blogs">Blogs</a>
                </li>


                <li class="nav-item t1">
                    <a class="nav-link click-scroll" href="/write">Publish</a>
                </li>

                <li class="nav-item t1">
                    <a class="nav-link click-scroll" href="/writetous">Contact</a>
                </li>

                <li class="nav-item t1">
                    <a class="nav-link click-scroll" href="/developers">Developers</a>
                </li>

                <li class="nav-item dropdown t1">
                    <div class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>
                     Categories
                    </div>

                    <ul class="dropdown-menu dropdown-menu-light">
                        <ul style={{listStyleType: 'none', padding: '0'}}>
                            <li><a class="dropdown-item" href="/Category/Travel">Travel</a></li>
                            <li><a class="dropdown-item" href="/Category/News">News</a></li>
                            <li><a class="dropdown-item" href="/Category/Technology">Technology</a></li>
                            <li><a class="dropdown-item" href="/Category/Fashion & Trends">Fashion & Trends</a></li>
                            <li><a class="dropdown-item" href="/Category/Entertainment">Entertainment</a></li>
                        </ul>
                    </ul>
                </li>


                {/* @if (LD.userdata != null && LD.userdata.isLoggedIn==true)
                { */}
                    <li class="nav-item ms-lg-5 " ></li>


                    <li class="nav-item t1 ">
                        <a class="nav-link click-scroll" style={{color:'white'}} href="myPosts">MyPosts</a>
                    </li>
                    <div class="d-none d-lg-block">
                       
                            <a class="" href="settings"> <img class="topImg"  src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'  alt="" /></a>
                        
                        {/* else
                        {
                            <a class="" href="settings">  <img class="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-_JNQmC3kZdL-Pr8Y2jgScNjuLMOehuQD2oee5ScbJ1pPjZEd9Htpf882TCQsPlH3DQ&usqp=CAU" /></a>
                        } */}
                    </div>


                    <li class="t2" style={{cursor:'default'}}>
                       Zeeshan
                    </li>
                    
                {/* }
                else
                { */}
                    <li class="nav-item-0 t1 ">
                        <a class="nav-link click-scroll" style={{color:'white',cursor:'pointer'}}>LogIn</a>
                    </li>

                

            </ul>



            
        </div>
    </div>
</nav></>
  )
}

export default Topbar