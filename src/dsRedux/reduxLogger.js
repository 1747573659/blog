const reduxLogger =
  ({ getState }) =>
  next =>
  action => {
    const returnVal = next(action);
    console.log("------------");
    console.log("prev state ", getState);
    console.log(action.type + "执行了 ");
    console.log("next state " + returnVal);
    console.log("------------");
    return returnVal;
  };

export default reduxLogger;
