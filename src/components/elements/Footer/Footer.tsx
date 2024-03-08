import './Footer.css';

const Footer = () => {
    return (
        <footer className="wrapper">
            <div className="subscribe">
                <h3 className="footer-title">SUBSCRIBE TO NEWSLETTER</h3>
                <span className="footer-text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</span>
                <div className="footer-actions">
                    <input type="text" placeholder="Your email" className="footer-input"/>
                    <button type="button" className="footer-btn">SUBSCRIBE</button>
                </div>
            </div>
            <div className="copyright">
                <span className="copyright-text">©2024 Bookstore</span>
                <span className="copyright-text">All rights reserved</span>
            </div>
        </footer>

    );
};

export default Footer;
