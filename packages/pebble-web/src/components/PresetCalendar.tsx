import * as React from "react";
import Calendar from "./Calendar";
import { cx, css } from "emotion";
import {
  PresetCalendarProps,
  PresetCalendarState
} from "./typings/PresetCalendar";
import { Tabs, TabSection } from "./Tabs";
import Button from "./Button";
import { colors } from "pebble-shared";
import { dateToEpoch } from "../utils";

export const tabsStyle = css({
  width: "100%",
  textAlign: "center",
  padding: "20px",
  color: colors.gray.dark,
  fontSize: "16px"
});

export const dateBtnsWrap = css({
  display: "flex",
  flexWrap: "wrap",
  width: "416px",
  padding: "20px 40px",
  justifyContent: "space-between"
});

export const unSelectedDateButton = css({
  marginBottom: "20px",
  border: `1px solid ${colors.gray.light}`,
  background: colors.white.base,
  color: colors.gray.darker,
  width: "158px",
  "&:not([disabled]):hover": {
    border: "none",
    background: colors.gray.light,
    color: colors.gray.darker
  }
});

export const selectedDateButton = css({
  border: "none",
  background: colors.violet.lightest,
  color: colors.violet.dark,
  "&:not([disabled]):hover": {
    border: "none",
    background: colors.violet.lightest,
    color: colors.violet.dark
  }
});

const DATE_TABS = ["Presets", "Custom"];

class PresetCalendar extends React.PureComponent<
  PresetCalendarProps,
  PresetCalendarState
> {
  state = {
    startTime: dateToEpoch(
      this.props.initialValue && this.props.initialValue[0]
    ),
    endTime: dateToEpoch(this.props.initialValue && this.props.initialValue[1])
  };

  render() {
    const { startTime, endTime } = this.state;
    const { initialValue } = this.props;

    return (
      <Tabs
        tabs={DATE_TABS}
        initialSelectedTab="Presets"
        tabClassName={tabsStyle}
      >
        <TabSection section={DATE_TABS[0]}>
          <div className={dateBtnsWrap}>
            {this.props.presetDateOptions.map((btn, index) => (
              <Button
                onClick={() => {
                  this.setState({
                    startTime: dateToEpoch(btn.dateRange[0]),
                    endTime: dateToEpoch(btn.dateRange[1])
                  });
                  if (this.props.onApply) {
                    this.props.onApply(btn.dateRange as [Date, Date]);
                  }
                }}
                type="primary"
                size="large"
                className={cx({
                  [unSelectedDateButton]: true,
                  [selectedDateButton]:
                    dateToEpoch(btn.dateRange[0]) === this.state.startTime &&
                    dateToEpoch(btn.dateRange[1]) === this.state.endTime
                })}
                key={`${btn.label}-${index}`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </TabSection>
        <TabSection section={DATE_TABS[1]}>
          <Calendar
            hideShadow
            range
            onChange={(value: Date[] | Date | undefined) => {
              if (value && Array.isArray(value)) {
              }
            }}
            selected={
              (startTime &&
                endTime && [
                  new Date(startTime * 1000),
                  new Date(endTime * 1000)
                ]) ||
              undefined
            }
            onApply={(value: Date[] | Date | undefined) => {
              if (value && Array.isArray(value)) {
                this.setState({
                  startTime: dateToEpoch(value[0]),
                  endTime: dateToEpoch(value[1])
                });
                if (this.props.onApply) {
                  this.props.onApply(value as [Date, Date]);
                }
              }
            }}
            onClear={() => {
              this.setState({
                startTime: initialValue ? dateToEpoch(initialValue[0]) : 0,
                endTime: initialValue
                  ? dateToEpoch(initialValue[1])
                  : dateToEpoch(new Date())
              });
              if (this.props.onClear) {
                this.props.onClear();
              }
            }}
          />
        </TabSection>
      </Tabs>
    );
  }
}

export default PresetCalendar;
