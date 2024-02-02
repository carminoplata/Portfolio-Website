import React from "react";
import styles from '../../styles/Preloader.module.css'

export default function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}