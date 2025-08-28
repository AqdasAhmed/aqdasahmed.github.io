import React, { useState } from "react";
import { BsSendFill, BsSendCheckFill } from 'react-icons/bs'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSdRdTfotIe1eeFFX6C8eedpbFaLHixIl2Ko0NruZWd6hSh6Nw/formResponse";

        const formDataToSend = new FormData();
        formDataToSend.append("entry.1434245794", formData.name);
        formDataToSend.append("entry.1453745820", formData.email);
        formDataToSend.append("entry.1226451069", formData.message);

        fetch(formURL, {
            method: "POST",
            body: formDataToSend,
            mode: "no-cors",
        })
            .then(() => {
                setIsSent(true); // show modal
                setFormData({ email: "", name: "", message: "" }); // reset
                setTimeout(() => {
                    setIsSent(false);
                }, 3000);
            })
            .catch(() => {
                alert("❌ Something went wrong, try again.");
            });
    };

    return (
        <div id="emailForm">
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows='5'
                    required
                />
                <button
                    type="submit"
                >
                    {isSent ? (
                        <>
                            <BsSendCheckFill style={{ marginRight: "5px" }} /> Sent
                        </>
                    ) : (
                        <>
                            <BsSendFill style={{ marginRight: "5px" }} /> Send
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
