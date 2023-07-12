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
            className={twMerge(
                `${
                    currentTab === tabid
                        ? "active group text-black"
                        : "text-gray-400"
                } min-w-[100px] max-w-[130px] w-1/3 text-center p-[8px] transition-colors cursor-pointer`,
                className
            )}
            onClick={() => {
                setCurrentTab(tabid);
                handleDefaultTab(tabid);
            }}
        >
            <span
                className={`block pb-[10px] w-full border-b ${
                    currentTab === tabid ? "border-black" : "border-gray-300"
                }`}
            >
                {children}
            </span>
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
