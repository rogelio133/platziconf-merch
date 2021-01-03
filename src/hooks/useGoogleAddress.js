import axios from 'axios';
import {useState,useEffect} from 'react'

const useGoogleAddress = (address, city, province, country) =>{
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${province}${country}&key=AIzaSyCz0A_3MLTaqvVELt6Ep8T8K8uVml8uzIg`;

    useEffect(async () =>{
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    },[]);
    return map;
};



export default useGoogleAddress;
