import React from 'react';
import './Trafficchart.css'
function Trafficchart() {
    return (
        <div className="traffic-sources">
            <div className="title">
                <div className="title-content">
            <h2>Traffic Sources</h2>
            <p className="time-period">Last 7 Days</p>
            </div>
            <div className="source">
                <div className="span-content">
                <p>Direct</p>
                <p>1,43,382</p>
                </div>
                    
            <div className="bar">
                    <div className="fill" style={{ width: '80%' }}></div>
                </div>
            </div>
          
            <div className="source">

                <div className="span-content">
                <p>Referral</p>
                <p>87,974</p>
                </div>

                <div className="bar">
                    <div className="fill" style={{ width: '60%' }}></div>
                </div>
                
            </div>




            <div className="source">

                <div className="span-content">
                <p>Social Media</p>
                <p>45,211</p>
                </div>

                <div className="bar">
                    <div className="fill" style={{ width: '40%' }}></div>
                </div>

            </div>


            <div className="source">

                <div className="span-content">
                <p>Twitter</p>
                <p>21,893</p>
                </div>

                <div className="bar">
                    <div className="fill" style={{ width: '20%' }}></div>
                </div>
            </div>

            </div>
            
        </div>
    
    );
}

export default Trafficchart;
