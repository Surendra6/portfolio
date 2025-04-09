import React from "react";
import { render, screen } from "@testing-library/react";
import WorkExperience from "./WorkExperience";
import { ThemeProvider } from "../../ThemeContext";
import "@testing-library/jest-dom";

const mockWorkExperience = [
  {
    company: "Acme Corp",
    title: "Senior Front-end Engineer",
    startDate: "2020-05-01",
    endDate: null,
    description: "Led the development of a new e-commerce platform.",
    responsibilities: ["Developed key features", "Mentored junior developers"],
  },
];

test("renders work experience section", () => {
  render(
    <ThemeProvider>
      <WorkExperience workExperience={mockWorkExperience} />
    </ThemeProvider>
  );
  expect(screen.getByText("Work Experience")).toBeInTheDocument();
  expect(
    screen.getByText("Senior Front-end Engineer at Acme Corp")
  ).toBeInTheDocument();
  expect(screen.getByText("2020-05-01 - Present")).toBeInTheDocument();
  expect(
    screen.getByText("Led the development of a new e-commerce platform.")
  ).toBeInTheDocument();
  expect(screen.getByText("Developed key features")).toBeInTheDocument();
  expect(screen.getByText("Mentored junior developers")).toBeInTheDocument();
});
