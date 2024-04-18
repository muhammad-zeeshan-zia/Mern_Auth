import "./Write.css";
import React, { useEffect, useState } from 'react'
import { useLogin } from "../Login/LoginContext";
import axios from "axios";
import data from './category.json';
import { useNavigate } from "react-router-dom";
export default function Write() {
  const [options, setOptions] = useState(data)
  const [optionsarray, setOptionsArray] = useState([])
  const [image, setImage] = useState('');
  const [postTitle, setPostTitle] = useState("");
  const [desc, setDesc] = useState('');
  const {  username } = useLogin();
  const [showConfirm, setShowConfirm] = useState(false);
  const [carError, setcatError] = useState(false);
  const [titleReq,setTitleReq]=useState(true);
  const [storyReq,setStoryReq]=useState(true);
  const [categoryReq,setCategoryReq]=useState(true);
  const [imageReq,setImageReq]=useState(true);

  const url = 'https://api.cloudinary.com/v1_1/doeykzpxv/image/upload';
  const preset = 'te8sgyea';
  const navigate=useNavigate();
  const handlefileupload = async (e) => {
    setImage(e.target.files[0]);
    setImageReq(false)
  }

  const handleOptionChange = (option) => {
    if (optionsarray.length< 3)  {
      {
        
        setOptionsArray([...optionsarray, option])
    
        setOptions(options.filter((item) => {
          return (item !== option)
        }))
      }

    }
    else {
      setcatError(true)
    }

    if(optionsarray.length===-1)
    {
      setCategoryReq(true);
    }
    else{
      setCategoryReq(false)
    }
  };
  const handlePublish = async (e) => {
    e.preventDefault();
    setShowConfirm(false)
    setTimeout(()=>{
      navigate('/dashboard')
    },500)
      try{

          const formData=new FormData();
          formData.append('file',image);
          formData.append('upload_preset', preset);
          const response = await axios.post(url, formData);
          const imageUrl = response.data.secure_url;
          
          
    try {
      const res = await axios.post('http://localhost:5000/api/post/', {
        title: postTitle,
        desc,
        photo: imageUrl,
        username,
        categories: optionsarray

      })
      console.log("done")
    }
    catch (error) {
      console.error('Error uploading image:', error);
    }

      }
      catch(error)
      {
        console.error('Error uploading image:', error);
      }
    }
  const removeOption = (option) => {
    setOptionsArray(optionsarray.filter((item) => {
      return (item !== option)
    }
    ))
    setOptions([...options, option]);
    setcatError(false)
   
    if(optionsarray.length-1>0)
    {
      setCategoryReq(false);
      
    }
    else{
      setCategoryReq(true)
    }
  }
  return (
    <>
      <div className="write">
        <img
          className="writeImg"
          src={image ? URL.createObjectURL(image) : "https://wallpaperaccess.com/full/170249.jpg"}
          alt=""
          
        />
       
       {imageReq &&  <div className="image-req">*Image Required</div>}
       
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} onChange={handlefileupload} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value)
                if(e.target.value==="")
                {
                setTitleReq(true)}
                else{
                  setTitleReq(false);
                }
                
                
              }}/>
            </div>
         {titleReq && <div className="title-req"> *Title required</div>}
          <h2 className="catLabel" >Select Only Three Categories:</h2>
        {categoryReq &&  <div className="category-req"> *Category Required</div> }
            <select className="dropdown-select">
            {options.map((option, index) => (
              <option className="dropdown-items" key={index} value={option} onClick={() => handleOptionChange(option)}>
                {option}
              </option>
            ))}
          </select>
            <div className="options-array">
            {
              optionsarray.map((elem, index) => {
                return (
                  <li key={index} className="array-items" value={elem} onClick={() => {
                    removeOption(elem)
                  }}>{elem}</li>
                )
              })
            }
            {
              carError && <div className="error">Choose Only 3 Categories</div>
            }
          </div>
          
          <div className="writeFormGroup">
         {storyReq && <div className="story-req">*Story Required</div>}
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value)
                if(e.target.value==="")
                {
                  setStoryReq(true);
                }
                else{
                  setStoryReq(false)
                }

              }}
            />
          </div>
          <button className="writeSubmit" type="submit" onClick={(e) => {
            e.preventDefault();
                if(titleReq==true && storyReq===true && imageReq===true && categoryReq===true)
            {
                setShowConfirm(false)
            }
            else
            {
              setShowConfirm(true)
            }
          }}>
            Publish
          </button>
        </form>
      </div>
      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>Are you sure you want to publish?</p>
            <div className="confirm-buttons">
              <button className="confirm" onClick={handlePublish}>
                Confirm
              </button>
              <button className="cancel" onClick={() => 
                setShowConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
   </>
  )
}