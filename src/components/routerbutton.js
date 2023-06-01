import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import LayerMagic from "../JavaScripts/TransitLayerLogic";

export default function RouterButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  function routeTo(){

    if(props.allowClick===false) return;
    console.log(props.path);
    var layerClass = ".right-layer";
    var layer = document.querySelector(layerClass);
    layer.classList.toggle("active");
  setTimeout(function(){
    navigate(`${props.path}`, {replace:true});
    layer.classList.toggle("active");
    },900);
  }
  return (
    <div className="router-Button">
      <button
        className="router-button"
        onClick={()=>{routeTo()}}>

        {props.title}
      </button>
    </div>
  );
}
