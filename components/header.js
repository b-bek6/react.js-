import React from "react";

export default function Header(props) {
    console.log("header -controrller");
    return <>
    <h1>Header num {props.num}</h1>
    <hr/>
    </>
}