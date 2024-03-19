import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSignUpData } from "../../../store/slices/signUp/signUpReducer";

const SignUpTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/user-account");
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name' || name === 'email' || name === 'password') {
            dispatch(updateSignUpData({ [name]: value }));
        }
    };

    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                gap: '20px',
            }}
        >
            <span
                style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "32px",
                    fontFamily: "Helios"
                }}>
                Name
            </span>
            <input
                type="text"
                style={{width: "100%", padding: "14px 20px 10px 20px"}}
                placeholder="Your name"
                onChange={handleInputChange}
                name="name"
            />
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
                name="email"
                onChange={handleInputChange}
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
                name="password"
                onChange={handleInputChange}
            />
            <span
                style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "32px",
                    fontFamily: "Helios"
                }}>
                Confirm password
            </span>
            <input
                type="password"
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
                onClick={handleSignUp}
            >SIGN UP
            </button>
        </section>
    );
}

export default SignUpTab;
