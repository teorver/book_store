import { FaArrowLeft } from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom";
import './UserAccountForm.css';
import { Form, Row, Col } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { updateSignUpData } from "../../store/slices/signUp/signUpReducer.ts";
import { RootState } from "../../store/store.ts";

const UserAccountForm = () => {
    const navigate = useNavigate();
    const userInfo = useSelector((state: RootState) => state.signUp);
    const dispatch = useDispatch();

    const handlePasswordChange = (e: any) => {
        const { name, value } = e.target;
        dispatch(updateSignUpData({ [name]: value }));
    };

    const handleSaveChanges = () => {
        dispatch(updateSignUpData(userInfo));
    };

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <section className="account-wrapper">
            <Link to="/">
                <FaArrowLeft />
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
                                style={{ width: "100%", padding: "14px 20px 10px 20px" }}
                                name="name"
                                placeholder="Your user name"
                                value={userInfo.name}
                                onChange={handlePasswordChange}
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
                                style={{ width: "100%", padding: "14px 20px 10px 20px" }}
                                placeholder="Your user email"
                                name="email"
                                value={userInfo.email}
                                onChange={handlePasswordChange}
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
                                type="password"
                                style={{ width: "100%", padding: "14px 20px 10px 20px" }}
                                placeholder="Your current password"
                                name="password"
                                value={userInfo.password}
                                onChange={handlePasswordChange}
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
                                type="password"
                                style={{ width: "100%", padding: "14px 20px 10px 20px" }}
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
                                type="password"
                                style={{ width: "100%", padding: "14px 20px 10px 20px" }}
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
                                    type="button"
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
                                    onClick={handleSaveChanges}
                                >
                                    SAVE CHANGES
                                </button>
                            </Col>
                            <Col span={9}>
                                <button
                                    type="button"
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
                                    onClick={handleCancel}
                                >
                                    CANCEL
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
