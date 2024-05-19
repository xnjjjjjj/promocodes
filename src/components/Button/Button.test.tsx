import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button onClick", () => {
  it("after click button should call function and alert correct text", () => {
    const originalAlert = window.alert;
    const alertMessages: string[] = [];
    window.alert = (message: string) => {
      alertMessages.push(message);
    };

    const ALERT_TEXT = "button clicked";
    const testClick = () => {
      alert(ALERT_TEXT);
    };
    render(<Button onClick={testClick} text={"testButton"} type={"submit"} />);

    const button = screen.getByText("testButton");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(alertMessages).toContain(ALERT_TEXT);

    window.alert = originalAlert;
  });
});