import React from "react";

interface StateProps {
  toDos: any[];
  completed: any[];
}

interface ActionProps {
  type: string;
  payload: string;
  id: string;
}

const reducer = (state: StateProps, action: ActionProps): any => {};

export default reducer;
