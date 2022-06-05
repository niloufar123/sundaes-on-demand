import { render,screen } from "@testing-library/react";

import Options from "../options";


test('displays image for each scoop option from Server',async()=>{
    render (<Options  optionType="scoops"/>);

    //find images
    const scoopImages=await screen.findAllByRole('img',{name:/scoop$/i});
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of Images
    const altText=scoopImages.map(item=>item.alt);
    expect(altText).toEqual(['Chocolate scoop','Vanilla scoop']);
})