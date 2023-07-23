import React from 'react'
import "./style.css";
import Myimg from "./image/img4.jpg";
const Myonlineimg = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000";

function Mygallery() {
  return (
   <div>
    <h1>mygallery page</h1>
    <section className='myrow'>
        <div>
            <h1>src folder source</h1>
            <img src={Myimg} alt="sdkfhsd"/>
        </div>
        <div>
            <h1>public folder soruce</h1>
            <img src='myphoto/img3.jpg' alt='jsjfhsdjf'/>
        </div>
        <div>
            <h1>online image source</h1>
            <img src={Myonlineimg} alt='ppppppp'/>
        </div>
    </section>
   </div>
  )
}

export default Mygallery