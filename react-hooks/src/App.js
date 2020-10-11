import React, {useState, useEffect} from 'react';
import './App.css';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}

const App = () => {
const[count, setCount] = useState(0);
const[isOn, setIsOn] = useState(false);
const[mousePosition, setmousePosition] = useState({x:null, y:null});
const[status, setStatus] = useState(navigator.onLine);
const[{latitude,longitude,speed}, setLocation] = useState(initialLocationState);
let mounted = true;

useEffect(()=>{
  document.title = `You have clicked ${count} times`;
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('onLine', handleOnLine);
  window.addEventListener('offLine', handleOffLine);
  navigator.geolocation.getCurrentPosition(hanndleGeoLocation);
  const watchId = navigator.geolocation.watchPosition(hanndleGeoLocation);
  return () => {
    window.removeEventListener('onLine', handleOnLine);
    window.removeEventListener('offLine', handleOffLine);
    window.removeEventListener('mousemove', handleMouseMove);
    mounted = false;
    navigator.geolocation.clearWatch(watchId);
    };
},[count])

const handleOnLine = () => {
  setStatus(true)
}

const handleOffLine = () => {
  setStatus(false)
}

const handleMouseMove = event => {
  setmousePosition({
    x: event.pageX,
    y: event.pageY
  })
}

const hanndleGeoLocation = event => {
  if(mounted){
    setLocation({
      latitude: event.coords.latitude,
      longitude: event.coords.longitude,
      speed: event.coords.speed
    })
  }
}


const incrementCount = () =>{
  setCount(prevCount=> prevCount +1)
}

const toggleLight = () =>{
  setIsOn(prevIsOn => !prevIsOn)
}

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>
    I was clicked {count} times
    </button>
    <h2>Toggle Light</h2>
    <img
    onClick={toggleLight}
    style={{
    height:'50px',
    width:'50px',
    background: isOn? 'yellow' : 'grey'}}></img>
    <h2>Network Status</h2>
    {JSON.stringify(mousePosition,null,2)}
    <br/>
    <p>You are <strong>{status? 'OnLine' : 'Offline'}</strong></p>
    <h2>GeoLocation</h2>
    <p>Latitude is {latitude}</p>
    <p>Longitude is {longitude}</p>
    <p>Your Speed is {speed ? speed : '0' }</p>
    </>
  );
}

export default App;
