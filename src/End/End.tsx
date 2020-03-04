import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import "./End.scss";

export interface ExtendedProps extends RouteComponentProps {}

function End(props: ExtendedProps) {
  return (
    <main className="end-container">
      <h1 className="end-title">Congratulations, you won!</h1>
      <h3 className="end-subtitle">
        You guessed 10 players correctly.
        <br /> Click below to play again.
      </h3>
      <div onClick={() => props.history.push("/")} className="replay-button">
        <p className="replay-text">Replay</p>
      </div>
    </main>
  );
}

export default withRouter(End);
