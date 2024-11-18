import React from 'react'
import './Salesreport.css'


const Salesreport = () => {
    return (
    
        <div className='sales-report-container'>

            <div className="text-content">
                <p><strong>Hey Mariana</strong> - here’s what’s happening with your store today</p>
            </div>

            <div className="chart-container">
                <div className="card-container">

                    <div className="card">
                        <div className="title">
                            <p>TODAY'S SALES</p>
                        </div>
                        <div className="rate">
                            <h3>$12,426</h3>
                            <p>+36%&#8593;</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                        <p> TODAY'S SALES</p>
                        </div>
                        <div className="rate">
                            <h3>$2,38,485</h3>
                            <p id="loss">+14%&#8595;</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                        <p> TODAY'S ORDERS</p>
                        </div>
                        <div className="rate">
                            <h3>84,382</h3>
                            <p >+36%&#8593;</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                        <p>TODAY'S CUSTOMERS</p>
                        </div>
                        <div className="rate">
                            <h3>33,439</h3>
                            <p>+36%&#8593;</p>
                        </div>  
                    </div>



                </div>
            </div>


            
           

            </div>
           
            
       
        
    )
}

export default Salesreport