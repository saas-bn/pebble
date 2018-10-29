import * as React from "react";
import { storiesOf } from "@storybook/react";
import Search from "../src/components/Search";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs";
import { SearchProps } from "../src/components/typings/Search";

const type = ["small", "large", "table"] as SearchProps["type"][];

storiesOf("Search", module).add("Default", () => (
  <Search
    placeholder={text("placeholder", "Search")}
    onChange={action("change")}
    type={select("type", type, "small")}
    showSearchIcon={boolean("showSearchIcon", true)}
    clearable={boolean("showClearButton", true)}
    onClear={() => {}}
  />
));
