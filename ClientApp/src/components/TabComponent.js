import React, { useState } from 'react';
import './Tabs.css';
import RecBuyEquity from './RecBuyEquity';
import RecBuyEquity2 from './RecBuyEquity2';


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
        <ul className="tabs">
            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1) }>ซื้อตราสารหนี้</li>
            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2) }>ซื้อหุ้นทุน</li>
            <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3) }>ซื้อหน่วยลงทุน</li>
            <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4) }>ซื้อตราสารอนุพันธ์</li>
            <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5) }>เงินฝากสถาบันการเงิน</li>
            
        </ul>

        <div className="tab_content">
            { activeTab === 1 && <div className="tab_panel">ซื้อตราสารหนี้<div><RecBuyEquity2 /></div></div> }
            { activeTab === 2 && <div className="tab_panel">ซื้อหุ้นทุน<div><RecBuyEquity /></div></div> }
            { activeTab === 3 && <div className="tab_panel">ซื้อหน่วยลงทุน</div> }
            { activeTab === 4 && <div className="tab_panel">ซื้อตราสารอนุพันธ์</div> }
            { activeTab === 5 && <div className="tab_panel">เงินฝากสถาบันการเงิน</div> }
        </div>
    </div>
  );
};

export default TabComponent;