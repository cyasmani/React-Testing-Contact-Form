import React from "react";
import { render, getByPlaceholderText, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { Simulate } from "react-dom/test-utils";

// test("renders App without crashing", () => {
//   render(<App />);
// })


test("Tests contact form", async () => {

  const { getByPlaceholderText, getByLabelText , getByText} = render(<ContactForm />);
  const firstName = getByPlaceholderText("Edd");
  const lastName = getByPlaceholderText("Burke");
  const email = getByText("Email*");
  const message = getByText("Message");
  
    
  fireEvent.change(firstName, {
    target: {value: "Yasmani"},

  })

  fireEvent.change(lastName, {
    target: {value: "Castaneda"},

  })

  fireEvent.change(email, {
    target: "yasmanicastaneda@yahoo.com"},
    //Why cant I use value in this field?

  )

  fireEvent.change(message, {
    target: "message"
  })
})

  
  

