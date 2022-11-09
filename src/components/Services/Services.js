import { React, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ServiceCard from "../ServiceCard/ServiceCard";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from "react-photo-view";

const Services = () => {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setLoading(false);
        })
    },[])
  return (
    <div className="min-h-screen">
      <div className={loading?'block':'hidden'}>
      <ClipLoader color="red" />
      </div>
      <PhotoProvider>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
      </PhotoProvider>
      
    </div>
  );
};

export default Services;
