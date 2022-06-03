import { fireEvent, render, screen } from "@testing-library/react"
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event'

test("check default checkBox value and click action",()=>{
    render(<SummaryForm/>);

    const checkBox=screen.getByRole('checkbox',{name:/terms and conditions/i});
    // expect(checkBox).not.toBeChecked
    // fireEvent
    expect(checkBox).toHaveProperty('checked',false);
    userEvent.click(checkBox);
    const button=screen.getByRole('button',{name:/confirm order/i});
    expect(button).toBeEnabled();
    userEvent.click(checkBox);
    expect(button).toBeDisabled();


});

test("popover responds to hover",()=>{
    render(<SummaryForm />);
    //popover starts out hidden
     const label=screen.getByLabelText("terms and conditionst");
     const overlay=screen.getByText("Popover testing");
     
     expect(overlay).not.toBeVisible();


    //popover appears when mouseover of checkbox label

    userEvent.hover(label);
    expect(overlay).toBeVisible();

    //popover disappears when mouse out
    userEvent.unhover(label);
    expect(overlay).not.toBeVisible();
})
