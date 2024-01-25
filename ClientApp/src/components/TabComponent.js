import React, { useState } from 'react';
import './Tabs.css';
import RecBuyEquity from './RecBuyEquity';
import RecBuyBond from './RecBuyBond';
import FetchData from './FetchData';


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  }; //

  return (
    <div>
        <ul className="tabs">
            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1) }>ซื้อตราสารหนี้</li>
            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2) }>ซื้อหุ้นทุน</li>
            <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3) }>ซื้อหน่วยลงทุน</li>
            <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4) }>ซื้อตราสารอนุพันธ์</li>
            <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5) }>เงินฝากสถาบันการเงิน</li>
            <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(6) }>ดึงข้อมูล</li>
            
        </ul>

        <div className="tab_content">
            { activeTab === 1 && <div className="tab_panel"><div><RecBuyBond /></div></div> /* ซื้อตราสารหนี้ */  }  
            { activeTab === 2 && <div className="tab_panel"><div><RecBuyEquity /></div></div> /* ซื้อหุ้นทุน */  } 
            { activeTab === 3 && <div className="tab_panel"></div> /* ซื้อหน่วยลงทุน */  } 
            { activeTab === 4 && <div className="tab_panel"></div> /* ซื้อตราสารอนุพันธ์ */  } 
            { activeTab === 5 && <div className="tab_panel"></div> /* เงินฝากสถาบันการเงิน */  } 
            { activeTab === 6 && <div className="tab_panel"><div><FetchData /></div></div> /* ดึงข้อมูล */  } 

        </div>
    </div>
  );
};

export default TabComponent;