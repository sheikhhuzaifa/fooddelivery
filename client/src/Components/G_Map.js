import React from 'react'


const G_Map = () => {
    return (
        <div>
           
           <a  href="G_MAP" id="link">Direction</a>
           <br/>
           <a  href="G_MAP" id="link1">Current position</a>
        </div>
    )
}
window.onload=()=>{
var y=document.getElementById("link");
var y1=document.getElementById("link1");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
let res_name="Pizza And Grill";

function showPosition(position) {
  y1.href="https://www.google.com/maps"+"/@"+position.coords.latitude+","+position.coords.longitude+",15z";
  y.href="https://www.google.com/maps/dir/"+res_name+"/"+position.coords.latitude+","+position.coords.longitude;
}
};
export default G_Map
