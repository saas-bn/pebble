import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import x from "../src/index";
import Button from "../src/components/Button";
console.log(x)

const t = ["primary", "secondary", "link", "dropdown"];

storiesOf("Button", module).add("test", () => (
  <Button
    large={boolean("Large")}
    disabled={boolean("Disabled")}
    type={select("Type", t, "primary")}
    showShadow={boolean("Box Shadow")}
    isOpen={boolean("Dropdown open")}
    onClick={action("click")}
    isSelected={boolean("isSelected")}
    showRipple={boolean("showRipple")}
  >
    Hello 😀 😎 👍 💯
  </Button>
));
