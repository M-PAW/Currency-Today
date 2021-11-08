import React from 'react'
import Assets from '../assets/Assets';

const Loading = () => {
    return (
        <div className='loading-container'>
            <div className='img-container'>
                <img src={Assets.doggo} alt="Loading" />
                <img src={Assets.loading} alt="Loading" />
            </div>
        </div>
    )
}

export default Loading
