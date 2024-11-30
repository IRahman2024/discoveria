import React from 'react';
import Image from 'next/image';

const UserProfile = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl w-1/2">
            <figure>
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                    // layout="responsive" 
                    height={350}
                    width={250}
                    />
                    
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;