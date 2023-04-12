import React from "react";

import Mine from "../../hoc/Mine";

import Mystyles from "./Layout.css";

const layout = (props) => (
  <Mine>
    <div>Toolbar , Sidedrawer , Backdrop</div>

    <main className={Mystyles.Content}>{props.children}</main>
  </Mine>
);

export default layout;
