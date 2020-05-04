import * as React from "react";
import { SearchProps } from "./Search";
import { Omit } from "utility-types";
import { Interpolation } from "./emotionCustom";

export interface CommonProps {
  styles?: Interpolation;
  searchBox?: boolean;
  children?: React.ReactNode;
  searchBoxProps?: Omit<SearchProps, "type">;
  advancedOptions?: boolean;
  advancedOptionsProps?: {
    className?: string;
    selectVisible?: () => void;
    clearVisible?: () => void;
  };
}

export interface OptionGroupProps<OptionType> extends CommonProps {
  isSelected: (value: OptionType) => boolean;
  handleChange: (
    args: { value: OptionType; checked: boolean },
    e: React.SyntheticEvent | Event
  ) => void;
  multiSelect?: boolean;
}

export interface Extras {
  props: CommonProps;
  event?: React.SyntheticEvent | Event;
}

export interface OptionGroupState {
  highlighted: number;
  isScrolled: boolean;
}
