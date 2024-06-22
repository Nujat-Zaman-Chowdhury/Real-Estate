import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabContents = ({ onTabSelect }) => {
    return (
        <Tabs onSelect={(index) => onTabSelect(index)}>
            <TabList >
                <Tab>All</Tab>
                <Tab>Sale</Tab>
                <Tab>Rent</Tab>
            </TabList>
        </Tabs>
    );
};

export default TabContents;
