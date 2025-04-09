import { render, screen } from "@testing-library/react";
import Skills from "./AboutMe";
import { ThemeProvider } from "../../ThemeContext";
import "@testing-library/jest-dom";

test("renders skills list", () => {
  const skills = ["React", "JavaScript", "TypeScript"];
  render(
    <ThemeProvider>
      <Skills skills={skills} />
    </ThemeProvider>
  );
  expect(screen.getByText("Skills")).toBeInTheDocument();
  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
  expect(screen.getByText("TypeScript")).toBeInTheDocument();
});
