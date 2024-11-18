import React from 'react'
import './Sidebar.css'
import chartbar from '../assets/chartbar.png';
import home from '../assets/home.png'
import cursor from '../assets/cursor.png'
import user from '../assets/USER1.png'
import users from '../assets/users.png'
import folder from '../assets/folder.png'
import bell from '../assets/bell.png'
import cog from '../assets/cog.png'
import logout from '../assets/logout.png'
import Salesreport from './Salesreport';
import Saleschart from './Saleschart'
import Trafficchart from './Trafficchart'
import Transaction from './Transaction';




const Sidebar = () => {
    return (
        <div className='sidebar-container'>



            <div className="left-content">
                <div className="btn-content">
                    <button type="button"><span id="plus-icon"><i class="fa-light fa-plus" /></span>Connect New Account</button>
                </div>

                <div className="dashboard">
                    <div className="dashboard-icons">
                        <span><img src={home} alt="home" />Dashboard</span>
                    </div>

                    <div className="analytics">
                        <p>ANALYTICS</p>
                        <div className="analytics-icons">
                            <span><img src={chartbar} alt="performance" />Performance</span>
                            <span><img src={cursor} alt="cursor" />Hotjar</span>
                        </div>
                    </div>

                    <div className="support">
                        <p>SUPPORT</p>
                        <div className="support-icons">
                            <span><img src={chartbar} alt="tickets" />Tickets</span>
                            <span><img src={user} alt="agents" />Agents</span>
                            <span><img src={users} alt="customers" />Customers</span>
                        </div>
                    </div>
                    <div className="shop">
                        <p>SHOP</p>
                        <div className="support-icons">
                            <span><img src={folder} alt="products" />Products</span>
                            <span><img src={bell} alt="orders" />Orders</span>
                            <span><img src={chartbar} alt="reports" />Reports</span>
                        </div>
                    </div>
                </div>
                <div className="bottom-content">
                    <div className="bottom-icons">
                        <span><img src={cog} alt="cog" />Settings</span>
                        <span><img src={logout} alt="logout" />logout</span>
                    </div>
                </div>
            </div>







            <div className="right-content">
                    <Salesreport/>
                   
                    <div className="chart-lists">
                        <Saleschart/>
                        <Trafficchart/>
                    </div>
                    <Transaction/>
            </div>
           








        </div>
    )
}

export default Sidebar