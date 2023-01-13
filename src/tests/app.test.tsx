import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  it("should pass the test", () => {
    render(<App />);
    const helloWorld_element = screen.getByTestId("hello-world");
    expect(helloWorld_element).toBeInTheDocument();
    expect(helloWorld_element).toHaveTextContent("Hello");
  });
});
