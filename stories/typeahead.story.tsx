import * as React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead from "../src/components/TypeAhead";
import { action } from "@storybook/addon-actions";
import { css } from "emotion";
import Option from "../src/components/Option";
import { withState } from "@dump247/storybook-state";
import { boolean } from "@storybook/addon-knobs";

interface State {
  selected?: number;
  value: string;
}

storiesOf("Typeahead", module).add(
  "simple",
  withState<State>({ selected: undefined, value: "" })(({ store }) => (
    <>
      <TypeAhead
        className={css({
          width: 400
        })}
        placeholder="Typeahead"
        onChange={() => {
          action("change")();
        }}
        inputProps={{
          value: store.state.value,
          onChange: value => {
            store.set({ value });
            action("inputProps.onChange")();
          }
        }}
        onSelect={val => {
          action("onSelect")(val);
          store.set({ selected: val as number });
        }}
        valueExtractor={value =>
          store.set({ value: `${value} is the best option` })
        }
        selected={store.state.selected}
        onClear={action("clear")}
        disabled={boolean("disabled", false)}
        initialValue={store.state.value}
      >
        {new Array(25).fill(1).map((_x, i) => (
          <Option
            key={i + 1}
            value={i + 1}
            label={`I am an option - ${i + 1}`}
          />
        ))}
      </TypeAhead>
      <div
        onClick={() => {
          action("clear")();
          store.set({ selected: undefined, value: "" });
        }}
      >
        CLEAR
      </div>
    </>
  ))
);
