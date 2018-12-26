import * as React from "react";
import DropDown from "./DropDown";
import Option from "./Option";
import OptionGroupRadio from "./OptionGroupRadio";
import { cx, css } from "emotion";
import {
  timePickerWrap,
  timePickerSelected,
  hourPicker,
  minutePicker,
  optionStyle,
  seperator
} from "./styles/TimePicker.styles";
import { TimePickerProps } from "./typings/TimePicker";
import { colors } from "../theme/colors";

const HOURS = [...Array(12)].map((_, i) => ("00" + (i + 1)).slice(-2));
const MINUTES = [...Array(4)].map((_, i) => ("00" + i * 15).slice(-2));

export const iconStyle = css({
  marginLeft: 15,
  fontWeight: "bold",
  fontSize: 8,
  transition: "transform ease-out .2s",
  willTransform: "transform",
  marginTop: 2,
  color: colors.gray.dark,
  display: "inline-block"
});

export const buttonStyle = css({
  padding: "15px 20px",
  fontSize: "12px",
  color: colors.gray.darker,
  lineHeight: "9px"
});

const TimePicker: React.FunctionComponent<TimePickerProps> = props => {
  const { selectedHour, selectedMinute, onHourChange, onMinuteChange } = props;
  const selected = !!selectedHour || selectedMinute !== undefined;

  return (
    <div
      className={cx({
        [timePickerWrap]: true,
        [timePickerSelected]: selected
      })}
    >
      <DropDown
        labelClassName={hourPicker}
        isSelected={selected}
        labelComponent={({ isOpen, toggleDropdown }) => (
          <div
            onClick={() => {
              toggleDropdown();
            }}
            className={buttonStyle}
          >
            <span className={css({ marginRight: "15px" })}>
              {selectedHour ? selectedHour : "Hrs"}
            </span>
            <span>
              <i
                className={cx("pi pi-arrow-drop-down", iconStyle)}
                style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
              />
            </span>
          </div>
        )}
      >
        {({ toggle }) => (
          <OptionGroupRadio
            onChange={(value: number) => {
              onHourChange(value);
              toggle();
            }}
            selected={selectedHour}
            className={optionStyle}
          >
            {HOURS.map(hour => (
              <Option
                key={hour}
                value={hour}
                label={hour}
                className={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
      <span className={seperator}>:</span>
      <DropDown
        labelClassName={minutePicker}
        isSelected={selected}
        labelComponent={({ isOpen, toggleDropdown }) => (
          <div
            onClick={() => {
              toggleDropdown();
            }}
            className={buttonStyle}
          >
            <span className={css({ marginRight: "15px" })}>
              {selectedMinute !== undefined ? selectedMinute : "mins"}
            </span>
            <i
              className={cx("pi pi-arrow-drop-down", iconStyle)}
              style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
            />
          </div>
        )}
      >
        {({ toggle }) => (
          <OptionGroupRadio
            onChange={(value: number) => {
              onMinuteChange(value);
              toggle();
            }}
            selected={selectedMinute}
            className={optionStyle}
          >
            {MINUTES.map(min => (
              <Option
                key={min}
                value={min}
                label={min}
                className={optionStyle}
              />
            ))}
          </OptionGroupRadio>
        )}
      </DropDown>
    </div>
  );
};

export default TimePicker;
