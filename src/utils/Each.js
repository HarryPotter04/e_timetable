import { Children } from "react";

export const EachElement = ({ render, of }) =>
    Children.toArray(of.map((item, index) => render(item, index, `element-${index}`)));
