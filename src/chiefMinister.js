import React, { useState } from 'react'

const ChiefMinister = () => {
    const [show , setShow] = useState(false)
    return ( 
        <>
        <div class="chiefMinister">
        <button className='button' onClick={() => setShow(!show)}>Show Chief Minister</button><br/><br/>
        {
            show &&    <div className='row'>
                <div class="column">
                    <div class="card">
                        <h3>Andhra Pradesh</h3>
                        <p>Jagan Mohan Reddy</p>
                        <p>30 May 2019</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Arunachal Pradesh</h3>
                        <p>Pema Khandu</p>
                        <p>13 July 2016</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Assam</h3>
                        <p>Himanta Biswa Sarma</p>
                        <p>10 May 2021</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Bihar</h3>
                        <p>Nitish Kumar</p>
                        <p>22 Feb 2015</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Chhatisgarh</h3>
                        <p>Bhupesh Baghel</p>
                        <p>17 Dec 2018</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Delhi</h3>
                        <p>Arvind Kejriwal</p>
                        <p>14 Feb 2015</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Goa</h3>
                        <p>Pramod Sawant</p>
                        <p>19 Mar 2019</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Gujarat</h3>
                        <p>Bhupendrabhai Patel</p>
                        <p>13 Sep 2021</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Haryana</h3>
                        <p>Manohar Lal Khattar</p>
                        <p>26 Oct 2014</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Himachal Pradesh</h3>
                        <p>Jai Ram Thakur</p>
                        <p>27 Dec 2017</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Jharkhand</h3>
                        <p>Hemant Soren</p>
                        <p>29 Dec 2019</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Karnataka</h3>
                        <p>Basavaraj Bommai</p>
                        <p>28 Jul 2021</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Kerala</h3>
                        <p>Pinarayi Vijayan</p>
                        <p>25 May 2016</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Madhya Pradesh</h3>
                        <p>Shivraj Singh Chouhan</p>
                        <p>23 Mar 2020</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Maharashtra</h3>
                        <p>Eknath Shinde</p>
                        <p>30 Jun 2022</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Manipur</h3>
                        <p>Nongthombam Biren Singh</p>
                        <p>15 Mar 2017</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Meghalaya</h3>
                        <p>Conrad Sangma</p>
                        <p>06 Mar 2018</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Mizoram</h3>
                        <p>Zoramthanga</p>
                        <p>15 Dec 2018</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Nagaland</h3>
                        <p>Neiphiu Rio</p>
                        <p>08 Mar 2018</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Odisha</h3>
                        <p>Naveen Patnaik</p>
                        <p>05 Mar 2000</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Puducherry</h3>
                        <p>N. Rangaswamy</p>
                        <p>07 May 2021</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Punjab</h3>
                        <p>Bhagwant Mann</p>
                        <p>16 Mar 2022</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Rajasthan</h3>
                        <p>Ashok Gehlot</p>
                        <p>17 Dec 2018</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Rajasthan</h3>
                        <p>Ashok Gehlot</p>
                        <p>17 Dec 2018</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Sikkim</h3>
                        <p>Prem Singh Tamang</p>
                        <p>27 May 2019</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Tamil Nadu</h3>
                        <p>M. K. Stalin</p>
                        <p>07 May 2021</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Telangana</h3>
                        <p>Chandrasekhar Rao</p>
                        <p>02 Jun 2014</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Tripura</h3>
                        <p>Manik Saha</p>
                        <p>15 May 2022</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Uttar Pradesh</h3>
                        <p>Yogi Adityanath</p>
                        <p>19 Mar 2017</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>Uttarakhand</h3>
                        <p>Pushkar Singh Dhami</p>
                        <p>04 Jul 2021</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h3>West Bengal</h3>
                        <p>Mamata Banerjee</p>
                        <p>20 May 2011</p>
                    </div>
                </div>
            </div> 
        }
        </div>
        </>
     );
}
 
export default ChiefMinister;