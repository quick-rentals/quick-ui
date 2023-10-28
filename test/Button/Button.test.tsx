import React from 'react';
import { render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Button } from "../../src"
import '@testing-library/jest-dom'

describe("Button Componets testing", () => {


    it("should render without error", () => {
        const { getByText } = render(<Button label='Button' />);
        expect(getByText('Button')).toBeInTheDocument();

    });

    

    it("should call onClick on a click", async () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick} label='Button' />);
        await userEvent.click(getByText("Button"));
        expect(onClick).toHaveBeenCalledTimes(1);

    });


});