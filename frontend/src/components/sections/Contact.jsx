import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    background: hsla(271, 100%, 50%, 0.5);
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();

    // Rate Limiting: Prevent more than 1 email every 5 minutes
    const lastSentStr = localStorage.getItem("lastEmailSent");
    if (lastSentStr) {
      const lastSentTime = new Date(lastSentStr).getTime();
      const now = new Date().getTime();
      const minutesPassed = (now - lastSentTime) / (1000 * 60);

      if (minutesPassed < 5) {
        const minutesLeft = Math.ceil(5 - minutesPassed);
        alert(`For spam prevention, please wait ${minutesLeft} minute(s) before sending another message.`);
        return;
      }
    }

    setIsSending(true);

    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      
      localStorage.setItem("lastEmailSent", new Date().toISOString());
      alert("Message Sent Successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message: " + (error.text || error.message || JSON.stringify(error)));
    } finally {
      setIsSending(false);
    }
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handelSubmit}>
          <ContactTitle>Let's Connect</ContactTitle>
          <ContactInput type="email" placeholder="Your Email Address" name="from_email" required />
          <ContactInput placeholder="Your Full Name" name="from_name" required />
          <ContactInput placeholder="Company / Organization (Optional)" name="company" />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="How can I help you?" name="message" rows={5} required />
          <ContactButton 
            type="submit" 
            value={isSending ? "Sending..." : "Send Message"} 
            disabled={isSending} 
          />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
