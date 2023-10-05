import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputField from "./Filter";

describe("Filter", () => {
  test("renders with the correct props", () => {
    const value = "TestValue";
    const results = 10;
    const name = "TestName";
    const placeholder = "TestPlaceholder";
    const type = "text";
    const onChange = jest.fn();

    render(
      <InputField
        value={value}
        results={results}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    );

    const input = screen.getByTestId("filter");
    expect(onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
