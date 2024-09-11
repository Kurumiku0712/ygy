import React from "react";
import './ContactForm.css';

function ContactForm() {

    return (
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="姓" />
                    <input type="text" name="lastname" placeholder="名" />
                </div>
                <input type="text" name="email" placeholder="邮箱" />
                <textarea type="text" name="message" placeholder="内容" />

                <button>发送</button>
            </form>
        </div>
    )
}

export default ContactForm;
