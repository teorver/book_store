import { useState } from "react";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
    const [buttonText, setButtonText] = useState('RESET');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (buttonText === 'GO TO HOME') {
            navigate('/');
        } else {
            setButtonText('GO TO HOME');
            showMessage();
        }
    };

    const showMessage = () => {
        message.success(`You will receive an email on ${email} with a link to reset your password!`);
    };

    const handleInputChange = (event: any) => {
        setEmail(event.target.value);
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
                }}
            >
                <h2>Reset password</h2>
                <span
                    style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "32px",
                        fontFamily: "Helios"
                    }}>
                    Email
                </span>
                <input
                    type="text"
                    style={{width: "100%", padding: "14px 20px 10px 20px"}}
                    placeholder="Your email"
                    value={email}
                    onChange={handleInputChange}
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
                >{buttonText}
                </button>
            </div>
        </section>
    );
}

export default ResetPasswordForm;
