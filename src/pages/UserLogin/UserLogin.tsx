import './UserLogin.css';
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa6";
import { Tabs } from 'antd';
import SignInTab from "../../components/UserLoginTabs/SignInTab/SignInTab.tsx";
import SignUpTab from "../../components/UserLoginTabs/SignUpTab/SignUpTab.tsx";
import {useState} from "react";

const { TabPane } = Tabs;

const UserLogin = () => {
    const [selectedTab, setSelectedTab] = useState("1");

    const handleTabChange = (key: string) => {
        setSelectedTab(key);
    }

    return (
        <section className="login_wrapper">
            <Link to="/">
                <FaArrowLeft />
            </Link>
            <Tabs
                defaultActiveKey={selectedTab}
                onChange={handleTabChange}
                centered
                tabBarStyle={{
                    fontSize: "24px",
                    lineHeight: "24px",
                    textAlign: "center",
                    display: 'flex',
                    alignItems: 'center',
                }}
                style={{
                    display: "flex",
                    border: "1px solid lightgrey",
                    padding: '32px 32px 40px 32px',
                }}

            >
                <TabPane
                    tab="Sign In"
                    key="1"
                >
                    <SignInTab />
                </TabPane>
                <TabPane
                    tab="Sign Up"
                    key="2"
                >
                    <SignUpTab />
                </TabPane>
            </Tabs>
        </section>
    );
};

export default UserLogin;
