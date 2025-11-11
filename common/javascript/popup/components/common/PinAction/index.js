import React, { useCallback } from "react";
import { PushpinFilled, PushpinOutlined } from "@ant-design/icons";
import "./pinAction.css";
const PinAction = ({ record, updateRecord }) => {
    const handlePinClicked = useCallback(() => {
        updateRecord({ ...record, isFavourite: !record.isFavourite });
    }, [record, updateRecord]);
    return record.isFavourite ? (React.createElement(PushpinFilled, { title: "Pin rule", rotate: -45, className: "pin-icon active", onClick: handlePinClicked })) : (React.createElement(PushpinOutlined, { title: "Pin rule", rotate: -45, className: "pin-icon", onClick: handlePinClicked }));
};
export default PinAction;
