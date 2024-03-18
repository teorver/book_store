import { Link } from "react-router-dom";


const SignInTab = () => {
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
                type="text"
                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                placeholder="Your Password"
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
            >SIGN IN</button>
        </section>
    )
}

export default SignInTab;
