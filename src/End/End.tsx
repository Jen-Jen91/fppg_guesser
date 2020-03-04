import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import "./End.scss";
import Button from "../Common/Button/Button";

export interface ExtendedProps extends RouteComponentProps {}

const End = (props: ExtendedProps) => {
  return (
    <main className="end-container">
      <h1 className="end-title">Congratulations, you won!</h1>
      <h3 className="end-subtitle">
        You guessed 10 players correctly.
        <br /> Click below to play again.
      </h3>

      <Button
        handleClick={() => props.history.push("/")}
        buttonStyle="replay-button"
      >
        <p className="replay-text">Replay</p>
      </Button>
    </main>
  );
};

export default withRouter(End);
