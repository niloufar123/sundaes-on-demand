import { fireEvent, render, screen } from "@testing-library/react"
import SummaryForm from "../SummaryForm";

test("check default checkBox value and click action",()=>{
    render(<SummaryForm/>);

    const checkBox=screen.getByRole('checkbox',{name:/terms and conditions/i});
    // expect(checkBox).not.toBeChecked
    expect(checkBox).toHaveProperty('checked',false);
    fireEvent.click(checkBox);
    const button=screen.getByRole('button',{name:/confirm order/i});
    expect(button).toBeEnabled();
    fireEvent.click(checkBox);
    expect(button).toBeDisabled();


})
