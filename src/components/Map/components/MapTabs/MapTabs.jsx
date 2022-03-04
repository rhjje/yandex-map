import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./MapTabs.module.scss";

export const MapTabs = ({ selectTab }) => (
  <Tabs className={styles.Tabs}>
    <TabList className={styles.TabsList}>
      <Tab
        className={styles.Tab}
        selectedClassName={styles.TabActive}
        onClick={() => selectTab(0)}
      >
        Офисы
      </Tab>

      <Tab
        className={styles.Tab}
        selectedClassName={styles.TabActive}
        onClick={() => selectTab(1)}
      >
        Банкоматы
      </Tab>
    </TabList>
    <TabPanel className={styles.TabPanel} />
    <TabPanel className={styles.TabPanel} />
  </Tabs>
);
