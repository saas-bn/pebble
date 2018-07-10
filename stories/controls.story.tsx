import * as React from "react";
import { storiesOf } from "@storybook/react";
import Controls, { ControlView } from "../src/components/Controls";

type Id = string | number;

class Container extends React.PureComponent<{}, { selected: Id | Id[] }> {
  state = {
    selected: []
  };

  render() {
    return (
      <Controls
        className="controls"
        type="checkbox"
        onChange={({ selected }) => this.setState({ selected })}
        selected={this.state.selected}
        data={[{ x: "Ongoing" }, { x: "Done" }]}
        keyExtractor={item => item.x}
        renderElement={({ item, isSelected }, { type }) => (
          <ControlView isSelected={isSelected} label={item.x} type={type} />
        )}
      />
    );
  }
}

storiesOf("Controls", module).add("simple", () => <Container />);
