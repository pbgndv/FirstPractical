import { useMemo, useState } from 'react';
import {
     Header,
     Tabs,
     BannerBlock,
     Modal,
     FirstBlock,
     SecondBlock,
     ThirdBlock,
     Cookie,
} from './components';
import { ModalContext } from './contexts/ModalContext';

const TabsConfigs = {
	'Business': 'For Business',
	'Customers': 'For Customers',
}

function App() {
     const [activeTab, setActiveTab] = useState(TabsConfigs.Business);
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [showCookie, setShowCookie] = useState(false);

     const contextValue = useMemo(() => ({ setModalIsOpen }), [setModalIsOpen]);

     return (
          <main className="budss">
               <Tabs currentTab={activeTab} setCurrentTab={setActiveTab} />
               <ModalContext.Provider value={contextValue}>
                    <Header />
                    <FirstBlock />
               </ModalContext.Provider>
               <SecondBlock />
               <ThirdBlock />
               <BannerBlock />
               {showCookie && <Cookie setShow={setShowCookie} />}
               <Modal
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
               />
          </main>
     );
}

export default App;
