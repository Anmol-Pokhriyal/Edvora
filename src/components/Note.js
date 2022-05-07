import React from "react";

function Note(){

    return (
        <div>

        <div>
<p className="near" >Nearest Point</p>
<p className="up" >Upcomming rides(4)</p>
<p className="past" >Past rides(2)</p>
 </div>


<div className="first">
<img className="p1" src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="geolocation" />
  <p className="ride">Ride id : 22</p>
  <p className="origin">Origin Station : 20</p>
  <p className="path">station_path : [20, 39, 40, 42, 54, 63, 72, 88, 98]</p>
  <p className="date">Date : 15th Feb 2022 16:33</p>
  <p className="distance">Distance : 0</p>
</div>

<div className="second">
<img className="p2" src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="geolocation" />
  <p className="ride2">Ride id : 003</p>
  <p className="origin2">Origin Station : 13</p>
  <p className="path2">station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91]</p>
  <p className="date2">Date: 15th Feb 2022 16:33</p>
  <p className="distance2">Distance: 1</p>
</div>

<div className="third">
<img className="p2" src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="geolocation" />
  <p className="ride2">Ride id : 001</p>
  <p className="origin2">Origin Station : 23</p>
  <p className="path2">station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93]</p>
  <p className="date2">Date: 15th Feb 2022 16:33</p>
  <p className="distance2">Distance: 2</p>
</div>


</div>


)
};

export default Note;
