import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Button } from "../components/button";

const text = "lorem ipsum";

describe(`button`, () => {
  test("accepts children", () => {
    render(<Button>{text}</Button>);
    const lorem = screen.getByText(text);
    expect(lorem).toBeInTheDocument();
  });
});
