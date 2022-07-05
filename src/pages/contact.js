import { Button, Grid, AlertTitle, Alert, Container } from "@mui/material";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [missingFields, setMissingFields] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //Checks to send email
    if (missingFields) return;
    emailjs
      .sendForm(
        "service_v8v30vs",
        "template_3vug7el",
        form.current,
        "WMsgG0jLIMnGyIb7l"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.replace("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function CheckBoolean() {
    if (name === "" || email === "" || question === "") {
      setMissingFields(true);
    } else {
      setMissingFields(false);
    }
  }
  return (
    <Container maxWidth="sm" id="contactPage">
      <h1>Have some questions?</h1>

      <form ref={form} onSubmit={sendEmail}>
        <Grid container>
          <Grid item xs={12}>
            <input
              onChange={(e) => setName(e.target.value)}
              className="contactInput"
              type="text"
              placeholder="Your name"
              name="name"
            ></input>
          </Grid>
          <Grid item xs={12}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="contactInput"
              type="email"
              placeholder="What's your email?"
              name="user_email"
            ></input>
          </Grid>
          <Grid item xs={12}>
            <textarea
              onChange={(e) => setQuestion(e.target.value)}
              id="questionBox"
              placeholder="Your questions..."
              name="message"
            ></textarea>
          </Grid>
          <Grid item xs={12}>
            {/* Conditional rendering only if client missingFields */}
            {missingFields && (
              <Alert sx={{ width: "100%", textAlign: "left" }} severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>Missing fields!</strong>
              </Alert>
            )}
            <Button
              id="sendButton"
              variant="contained"
              type="submit"
              value="Send"
              onClick={CheckBoolean}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};