import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section">
            <div className="section-header">
                <h2>Contact Us</h2>
            </div>

            <div className="row">
                <div className="contact-info">
                    <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="contact-info-content">
                            <h4>Address</h4>
                            <p>
                                house # 123, Model colony
                                <br />
                                Karachi, Pakistan
                            </p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-info-content">
                            <h4>Phone</h4>
                            <p>0317-8924982</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="contact-info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-info-content">
                            <h4>Email</h4>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <h2>Send Message</h2>
                        <div className="input-box">
                            <input type="text" required />
                            <span>Full Name</span>
                        </div>
                        <div className="input-box">
                            <input type="email" required />
                            <span>Email</span>
                        </div>
                        <div className="input-box">
                            <textarea required></textarea>
                            <span>Type your message here...</span>
                        </div>
                        <div className="input-box">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;




