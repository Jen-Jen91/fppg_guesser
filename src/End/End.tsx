import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

export interface ExtendedProps extends RouteComponentProps {}

function End(props: ExtendedProps) {
  return (
    <main>
      <h1>Congratulations - you won!</h1>
      <button onClick={() => props.history.push("/")} className="replay-button">
        Replay
      </button>
    </main>
  );
}

export default withRouter(End);
