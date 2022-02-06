import moment from "moment";
import { useState } from "react";
import { SingleDatePicker } from "react-dates";
import { CalendarIcon } from "@chakra-ui/icons";

import "moment/locale/ja"; // 日本語ローカライズ
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import SubTitle from "../atoms/text/SubTitle";
import { Box, HStack } from "@chakra-ui/react";

// react-dates
const DatePicker = () => {
  const [date, setDate] = useState(moment);
  const [focused, setFocused] = useState(false);
  return (
    <>
      <Box width="50%">
        <SubTitle children="期限" />
        <HStack align="center">
          <CalendarIcon color="gray.400" fontSize="1.5rem" marginRight="10px" />
          <SingleDatePicker
            date={date}
            onDateChange={(date) => setDate(date)}
            focused={focused}
            onFocusChange={(focused) => setFocused(focused)}
            displayFormat="YYYY-MM-DD"
            onClose={(focused) => setFocused(false)}
          />
        </HStack>
      </Box>
    </>
  );
};

export default DatePicker;
