import { createContext, useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const DataContext = createContext(null);

const Tabs = ({ defaultTab, className = "", children }) => {
    const [currentTab, setCurrentTab] = useState(defaultTab);

    useEffect(() => setCurrentTab(defaultTab), [defaultTab]);

    return (
        <DataContext.Provider value={{ currentTab, setCurrentTab }}>
            <div className={twMerge("h-full", className)}>{children}</div>
        </DataContext.Provider>
    );
};

const Tab = ({
    tabid = "",
    className = "",
    handleDefaultTab = () => {},
    children,
}) => {
    const { currentTab, setCurrentTab } = useContext(DataContext);
    return (
        <div
            tabid={tabid}
            className={`${
                currentTab === tabid ? "active group" : ""
            } ${className}`}
            onClick={() => {
                setCurrentTab(tabid);
                handleDefaultTab(tabid);
            }}
        >
            {children}
        </div>
    );
};

const TabContainer = ({ tabref, className = "", children }) => {
    const { currentTab } = useContext(DataContext);

    return (
        <div
            tabref={tabref}
            className={`${currentTab === tabref ? "" : "hidden"} ${className}`}
        >
            {children}
        </div>
    );
};

Tabs.Button = Tab;
Tabs.Container = TabContainer;

export default Tabs;
