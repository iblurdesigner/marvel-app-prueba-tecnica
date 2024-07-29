import React from "react";
import Home from "../components/home/Home";

export {Home}

export const Detail = React.lazy( () => import('../components/detail/Detail'))

export const History = React.lazy( () => import('../components/history/History'))