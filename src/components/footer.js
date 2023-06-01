import React from 'react'
import '../styleSheets/footer.css';
import { useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate=useNavigate();
  return (
    <div
    className="icons">
    <i
      className="fa fa-envelope"
      onClick={()=>{
        window.open('mailto:shuklakanishkaditya12@gmail.com?subject=Subject&body=Body%20goes%20here')
       }}
    ></i>
    <i
      className="fa fa-github"
      onClick={()=>{window.location.href='https://github.com/kanishkaditya';}}
    ></i>
    <i
      className="fa fa-linkedin"
       onClick={()=>{window.location.href = 'https://linkedin.com/in/kanishkaditya-shukla-8031221ba';}}
    ></i>
  </div>
  )
}
