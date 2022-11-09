import React from 'react';
import toast from 'react-hot-toast';


const HomeSubscribe = () => {
    const handleSubscribe = event => {
      event.target.email.value = "";
        event.preventDefault();
        toast.success(`Thank you for subscribing.`);
        
      }
    return (
        <div className="bg-base-200 py-20 rounded-xl my-10">
        <h2 className='text-3xl mb-9'> Subscribe for more updates</h2>
        <div className=" mx-auto">
          <form onSubmit={handleSubscribe} className="flex items-center justify-center">
            <input type="email" name='email' className=" rounded-l-xl py-3 px-4" required></input>
            <button className="btn btn-primary rounded-l-none rounded-r-xl">Subscribe</button>
          </form>
        </div>
      </div>
    );
};

export default HomeSubscribe;