import React from "react";
import RedirectIcon from "../../resources/icons/rule-icons/redirect.svg";
import CancelIcon from "../../resources/icons/rule-icons/cancel.svg";
import ReplaceIcon from "../../resources/icons/rule-icons/replace.svg";
import HeadersIcon from "../../resources/icons/rule-icons/headers.svg";
import UserAgentIcon from "../../resources/icons/rule-icons/useragent.svg";
import ScriptIcon from "../../resources/icons/rule-icons/script.svg";
import QueryParamIcon from "../../resources/icons/rule-icons/queryparam.svg";
import ResponseIcon from "../../resources/icons/rule-icons/response.svg";
import RequestIcon from "../../resources/icons/rule-icons/request.svg";
import DelayIcon from "../../resources/icons/rule-icons/delay.svg";
export const icons = {
    Redirect: React.createElement(RedirectIcon, null),
    Cancel: React.createElement(CancelIcon, null),
    Replace: React.createElement(ReplaceIcon, null),
    Headers: React.createElement(HeadersIcon, null),
    UserAgent: React.createElement(UserAgentIcon, null),
    Script: React.createElement(ScriptIcon, null),
    QueryParam: React.createElement(QueryParamIcon, null),
    Response: React.createElement(ResponseIcon, null),
    Request: React.createElement(RequestIcon, null),
    Delay: React.createElement(DelayIcon, null),
};
