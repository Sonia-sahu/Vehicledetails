import React from 'react';
import "./style.css";
import "@fontsource/open-sans";
const VehicleDetails = () => {
    return (
        <div className='vehicle'>
            <h2 className='title'>Vehicle Details</h2>
            <div className='card mt-5'>
            <section className='card-group'>
                <div className='detail flex-row-col-2'><p><b>Car-</b>Dezire</p></div>
                <div className="detail flex-row-col-2"><p><b>Source</b>-Jamshedpur</p>
                 </div>
                <div className="detail flex-row"><p><b>Destination</b>-Ranchi</p>
                </div>
                <div className="detail flex-row"><p><b>Seat</b>-4</p>
                </div>
                <div className="card-body2">
                    <div class="detail flex justify-content-between mb-2"><p><b>Type</b>-One Way</p>
                    </div>
       </div>
            </section>
    </div>
        </div>
    );
}

export default VehicleDetails;
