import {useNavigate} from "react-router-dom";
import {message} from "antd";

const NewPasswordForm = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/sign-in');
        message.success('Your password has been changed!')
    };

    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                padding: '72px 0',
                margin: '0 auto',
                width: '544px',
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    border: "1px solid lightgrey",
                    padding: '32px 32px 40px 32px',
                    gap: '20px'
                }}
            >
                <h2>NEW PASSWORD</h2>
                <span
                    style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "32px",
                        fontFamily: "Helios"
                    }}>
                    Password
                </span>
                <input
                    type="text"
                    style={{width: "100%", padding: "14px 20px 10px 20px"}}
                    placeholder="Your email"
                />
                <span
                    style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "32px",
                        fontFamily: "Helios"
                    }}>
                    Confirm Password
                </span>
                <input
                    type="text"
                    style={{width: "100%", padding: "14px 20px 10px 20px"}}
                    placeholder="Confirm your password"
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: 'rgba(49, 48, 55, 1)',
                        color: 'white',
                        textAlign: 'center',
                        padding: '18px 0',
                        width: '100%',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: "24px",
                        lineHeight: "24px",
                        fontFamily: "Bebas Neue",
                        fontWeight: "700",
                        marginTop: '40px'
                    }}
                    onClick={handleButtonClick}
                >SET PASSWORD
                </button>
            </div>
        </section>
    );
}

export default NewPasswordForm;
