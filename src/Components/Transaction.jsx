import React from 'react';
import './Transaction.css';
import Cus1 from '../assets/Cus1.png'
import Cus2 from '../assets/Cus2.png'
import Cus3 from '../assets/Cus3.png'
import Cus4 from '../assets/Cus4.png'
const Transaction = () => {
  return (
    <div className="dashboard1">
      <div class="transaction">
        <div class="title-list">
          <div class="title">
            <h2>Transactions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="all">
            <p>See All Transactions <i class="fa fa-angle-right"></i></p>
          </div>
        </div>

        <div class="list">
          <div class="status">
            <button id="completed"><span></span>Completed</button>
          </div>
          <div class="card-details">
            <p><strong>Visa Card ****4831</strong></p>
            <p>Card Payment</p>
          </div>
          <div class="dollars">
            <p>$182.94</p>
            <p>Jan 17, 2022</p>
          </div>
          <div class="website">
            <p>Amazon</p>
          </div>
          <div class="dot">
            <p>...</p>
          </div>
        </div>

        <div class="list">
          <div class="status">
            <button id="completed"><span></span>Completed</button>
          </div>
          <div class="card-details">
            <p><strong>Mastercard ****6442</strong></p>
            <p>Card Payment</p>
          </div>
          <div class="dollars">
            <p>$99.00</p>
            <p>Jan 17, 2022</p>
          </div>
          <div class="website">
            <p>Facebook</p>
          </div>
          <div class="dot">
            <p>...</p>
          </div>
        </div>

        <div class="list">
          <div class="status">
            <button id="pending"><span></span>Pending</button>
          </div>
          <div class="card-details">
            <p><strong>Account ****882</strong></p>
            <p>Bank Payment</p>
          </div>
          <div class="dollars">
            <p>$249.94</p>
            <p>Jan 17, 2022</p>
          </div>
          <div class="website">
            <p>Netflix</p>
          </div>
          <div class="dot">
            <p>...</p>
          </div>
        </div>

        <div class="list">
          <div class="status">
            <button id="canceled"><span></span>Canceled</button>
          </div>
          <div class="card-details">
            <p><strong>Amex Card ****5666</strong></p>
            <p>Card Payment</p>
          </div>
          <div class="dollars">
            <p>$199.24</p>
            <p>Jan 17, 2022</p>
          </div>
          <div class="website">
            <p>Amazon Prime</p>
          </div>
          <div class="dot">
            <p>...</p>
          </div>
        </div>
      </div>




      <div className="recent-customers">
        <div className="title">
        <h2>Recent Customers</h2>
        <p>Lorem ipsum dolor sit ametis.</p>
        </div>
        <div className="customer-list">

          <div className="customers">
            <div className="image">
              <img src={Cus1} alt="user" />
            </div>
            <div className="con">
              <p><strong>Jenny Wilson</strong></p>
              <p>w.lawson@example.com</p>
            </div>
            <div className="price">
              <p>$11,234</p>
              <p>Austin</p>
            </div>
          </div>




          <div className="customers">
            <div className="image">
              <img src={Cus2} alt="user" />
            </div>
            <div className="con">
              <p><strong>Devon Lane</strong></p>
              <p>dat.roberts@example.com</p>
            </div>
            <div className="price">
              <p>$11,119</p>
              <p>New York</p>
            </div>
          </div>



          <div className="customers">
            <div className="image">
              <img src={Cus3} alt="user" />
            </div>
            <div className="con">
              <p><strong>Jane Cooper</strong></p>
              <p>jgraham@example.com</p>
            </div>
            <div className="price">
              <p>$10,483</p>
              <p>Toledo</p>
            </div>
          </div>





          <div className="customers">
            <div className="image">
              <img src={Cus4} alt="user" />
            </div>
            <div className="con">
              <p><strong>Dianne Russell</strong></p>
              <p>curtis.d@example.com</p>
            </div>
            <div className="price">
              <p>$9,084</p>
              <p>Naperville</p>
            </div>
          </div>
        </div><br/><br/>
        <div className="all">
        <a href="/" className='customer-all'>SEE ALL CUSTOMERS <i class="fa fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  );
};



export default Transaction;
