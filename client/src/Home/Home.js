import React, { useState } from 'react'
import Delivery from '../Components/delivery/Delivery'
import Footers from '../Components/Footer/Footers'
import N_B from '../Components/NavBar/N_B'
import TabOption from '../Components/TabOption/TabOptions'

const Home = () => {
  const [activeTab, setActiveTab] = useState("Deliverys");
    return (
        <div>
            <N_B/>
            <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footers/>
        </div>
    )
}
const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      
    }
  };
export default Home;
