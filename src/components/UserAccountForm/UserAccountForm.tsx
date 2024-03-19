import {FaArrowLeft} from "react-icons/fa6";
import { Link } from "react-router-dom";
import './UserAccountForm.css';
import {Form, Row, Col} from 'antd';

const UserAccountForm = () => {

    return (
        <section className="account-wrapper">
            <Link to="/">
                <FaArrowLeft/>
            </Link>
            <h1 className="account-title">ACCOUNT</h1>
            <Form>
                <Form.Item>
                    <Row>
                        <Col>
                            <span style={{
                                color: 'rgba(49, 48, 55, 1)',
                                fontSize: '24px',
                                lineHeight: '32px',
                                fontWeight: '700',
                            }}
                            >PROFILE</span>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Col span={9} >
                            <span
                                style={{
                                    color: 'rgba(49, 48, 55, 1)',
                                    fontSize: '16px',
                                    lineHeight: '32px',
                                    fontWeight: '700',
                                }}
                            >Name</span>
                            <input
                                type="text"
                                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                                placeholder="Your user name"
                            />
                        </Col>
                        <Col span={9}>
                            <span
                                style={{
                                    color: 'rgba(49, 48, 55, 1)',
                                    fontSize: '16px',
                                    lineHeight: '32px',
                                    fontWeight: '700',
                                }}
                            >Email</span>
                            <input
                                type="text"
                                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                                placeholder="Your user email"
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item style={{ padding: '48px 0 0 0' }} >
                    <Row>
                        <Col>
                            <span style={{
                                color: 'rgba(49, 48, 55, 1)',
                                fontSize: '24px',
                                lineHeight: '32px',
                                fontWeight: '700',
                            }} >PASSWORD</span>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <Row>
                        <Col span={9}>
                            <span style={{
                                color: 'rgba(49, 48, 55, 1)',
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '700',
                            }} >Password</span>
                            <input
                                type="text"
                                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                                placeholder="Your current password"
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Row style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Col span={9}>
                            <span style={{
                                color: 'rgba(49, 48, 55, 1)',
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '700',
                            }} >New Password</span>
                            <input
                                type="text"
                                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                                placeholder="Your new password"
                            />
                        </Col>
                        <Col span={9}>
                            <span style={{
                                color: 'rgba(49, 48, 55, 1)',
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '700',
                            }}>Confirm New Password</span>
                            <input
                                type="text"
                                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                                placeholder="Confirm your new password"
                            />
                        </Col>
                    </Row>
                    <Form.Item>
                        <Row style={{
                                display: 'flex',
                                margin: '0 0 0 536px',
                                justifyContent: 'space-between',
                        }}>
                            <Col span={9}>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: 'rgba(49, 48, 55, 1)',
                                        color: 'white',
                                        textAlign: 'center',
                                        padding: '18px 0',
                                        width: '257px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: "24px",
                                        lineHeight: "24px",
                                        fontFamily: "Bebas Neue",
                                        fontWeight: "700",
                                        marginTop: '40px'
                                    }}
                                >SET PASSWORD
                                </button>
                            </Col>
                            <Col span={9}>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'rgba(49, 48, 55, 1)',
                                        textAlign: 'center',
                                        padding: '18px 0',
                                        width: '257px',
                                        border: '1px solid lightgrey',
                                        cursor: 'pointer',
                                        fontSize: "24px",
                                        lineHeight: "24px",
                                        fontFamily: "Bebas Neue",
                                        fontWeight: "700",
                                        marginTop: '40px'
                                    }}
                                >SET PASSWORD
                                </button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form.Item>
            </Form>
        </section>
    );
};

export default UserAccountForm;
