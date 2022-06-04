import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react"
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

test("popover responds to hover",async()=>{
    render(<SummaryForm />);

    //popover starts out hidden
     const nullPopover=screen.queryByText(/no ice cream actually be delivered/i);
     expect(nullPopover).not.toBeInTheDocument();   


    //popover appears when mouseover of checkbox label
    const termsAndConditions=screen.getByText(/terms and conditions/i);        
    userEvent.hover(termsAndConditions);

    const popover=screen.getByText(/no ice cream actually be delivered/i);
    expect(popover).toBeInTheDocument();

    //popover disappears when mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(()=>
   screen.queryByText(/no ice cream actually be delivered/i)

    )
})
