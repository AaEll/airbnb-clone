import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
//border-bottom : none;

import "../src/styles/Tabs.css"
import Tab1 from './components/Tab1'
import Tab2 from "./components/Tab2"
import Tab3 from "./components/Tab3"
import Tab4 from "./components/Tab4"
import Tab5 from "./components/Tab5"
import Tab6 from "./components/Tab6"
import Tab7 from "./components/Tab7"
import Tab8 from "./components/Tab8"
import Tab9 from "./components/Tab9"
import Tab10 from "./components/Tab10"

const TabsComp = ({ toggle, setToggle }) => {




  return (
    <>

      <Tabs>

        <TabPanels>
          <TabPanel className="tab-content"> <Tab1 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab2 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab10 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab4 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab5 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab6 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab7 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab8 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab9 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab3 pushDown={toggle} />  </TabPanel>
        </TabPanels>

      </Tabs >

    </>
  )
}

export default TabsComp
//         <TabList className={toggle === true? "tabs-hold-pushDown" : "tabs-hold"}>

