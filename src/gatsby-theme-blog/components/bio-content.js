import React, { Fragment } from "react";
import { Styled } from "theme-ui";

export default () => (
  <Fragment>
    Personal website by{" "}
    <Styled.a href="https://github.com/tvetan"> Tsvetan Ivanov</Styled.a>.
    <br />
    Sharing what I have learned as a software developer.
  </Fragment>
);
