import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import AlertBanner from "../../common/AlertBanner";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError]= useState(false);

  //optionType is 'scoop' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        // todo:handle error response
        setError(true)
      });
  }, [optionType]);

  if(error){
      return <AlertBanner />
  }
  //todo: replace 'null' with ToppingOption
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const OptionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{OptionItems}</Row>;
}
