import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "../../ThemeContext";
import "@testing-library/jest-dom";

const mockProfile = {
  image: "/path/to/image.jpg",
  name: "John Doe",
  title: "Senior Front-end Developer",
};

test("renders header component", () => {
  render(
    <ThemeProvider>
      <Header profile={mockProfile} />
    </ThemeProvider>
  );
  expect(screen.getByAltText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Senior Front-end Developer")).toBeInTheDocument();
  expect(screen.getByText("Download CV")).toBeInTheDocument();
  expect(screen.getByText("Toggle Theme")).toBeInTheDocument();
});
