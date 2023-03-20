import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const WvCalendar = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>Schedule on {format(selected, "PP")}.</p>;
    }
    return (
        <>
            <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />
        </>
    );
};

export default WvCalendar;
