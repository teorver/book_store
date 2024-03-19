import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom";
import { signIn } from "../../../store/slices/auth/authActions";

const SignInTab = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        dispatch(signIn(email, password)).then(() => {
            history("/user-account");
        });
    };

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: '20px',
        }}>
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
                style={{ width: "100%", padding: "14px 20px 10px 20px" }}
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
            />
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
                type="password"
                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/reset-password">
                <span
                    style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                    }}
                >Forgot password?</span>
            </Link>
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
                onClick={handleSignIn}
            >SIGN IN</button>
        </section>
    );
};

export default SignInTab;
