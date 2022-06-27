import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../daterange/date-range.scss";

import { DateRangePicker, createStaticRanges } from "react-date-range";
import {
    subDays,
    addDays,
    endOfDay,
    startOfDay,
    startOfMonth,
    endOfMonth,
    addMonths,
    startOfWeek,
    endOfWeek,
    startOfYear,
    endOfYear,
    addYears
} from "date-fns";

const DateRangeFilter = ({ onChange }) => {

    const defineds = {
        startOfWeek: startOfWeek(new Date()),
        endOfWeek: endOfWeek(new Date()),
        startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
        endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
        startOfToday: startOfDay(new Date()),
        startOfLastSevenDay: startOfDay(addDays(new Date(), -7)),
        startOfLastThirtyDay: startOfDay(addDays(new Date(), -30)),
        startOfLastNintyDay: startOfDay(addDays(new Date(), -90)),
        endOfToday: endOfDay(new Date()),
        startOfYesterday: startOfDay(addDays(new Date(), -1)),
        endOfYesterday: endOfDay(addDays(new Date(), -1)),
        startOfMonth: startOfMonth(new Date()),
        endOfMonth: endOfMonth(new Date()),
        startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
        endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
        startOfYear: startOfYear(new Date()),
        endOfYear: endOfYear(new Date()),
        startOflastYear: startOfYear(addYears(new Date(), -1)),
        endOflastYear: endOfYear(addYears(new Date(), -1))
    };

    const [state, setState] = useState([
        {
            startDate: subDays(new Date(), 7),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    const sideBarOptions = () => {
        const customDateObjects = [
            {
                label: "Today",
                range: () => ({
                    startDate: defineds.startOfToday,
                    endDate: defineds.endOfToday
                })
            },
            {
                label: "Yesterday",
                range: () => ({
                    startDate: defineds.startOfYesterday,
                    endDate: defineds.endOfYesterday
                })
            },
            {
                label: "Last 7 Days",
                range: () => ({
                    startDate: defineds.startOfLastSevenDay,
                    endDate: defineds.endOfToday
                })
            },
            {
                label: "Last 30 Days",
                range: () => ({
                    startDate: defineds.startOfLastThirtyDay,
                    endDate: defineds.endOfToday
                })
            },
            {
                label: "This Month",
                range: () => ({
                    startDate: defineds.startOfMonth,
                    endDate: defineds.endOfMonth
                })
            },
            {
                label: "Last Month",
                range: () => ({
                    startDate: defineds.startOfLastMonth,
                    endDate: defineds.endOfLastMonth
                })
            },
        ];

        return customDateObjects;
    };

    const sideBar = sideBarOptions();
    const staticRanges = [
        // ...defaultStaticRanges,
        ...createStaticRanges(sideBar)
    ];

    const handleOnChange = ranges => {
        const { selection } = ranges;
        onChange(selection);
        setState([selection]);
    };

    return (
        <DateRangePicker
            onChange={handleOnChange}
            rangeColors={'rgba(55, 176, 76, 1)'}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            staticRanges={staticRanges}
            direction="horizontal"
        />
    );
};

DateRangeFilter.propTypes = {
    onChange: PropTypes.func
};

export default DateRangeFilter;
