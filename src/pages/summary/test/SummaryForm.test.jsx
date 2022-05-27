import { render, screen } from "@testing-library/react"
import SummaryForm from "../SummaryForm";

test("check default checkBox value",()=>{
    render(<SummaryForm/>);

    const checkBox=screen.getByRole('checkbox',{name:/Check me out/i});
    // expect(checkBox).not.toBeChecked
    expect(checkBox).toHaveProperty('checked',false)
})