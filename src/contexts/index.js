import React, { useState } from "react";
import { useHistory } from "react-router";
import { Fade } from '@material-ui/core'

const TempContext = React.createContext(null);

const TempProvider = ({ children }) => {
  const history = useHistory();
  const [signin, setSignin] = useState(0);
  const [state, setState] = useState({
    open: false,
    Transition: Fade
  });
  function onChangeSign(bool) {
    setSignin(bool);
    setStateTimeout({
      open: true,
      content: bool ? '로그인 되었습니다.' : '로그이웃 되었습니다.',
      Transition: Fade,
    });
    history.push("/");
  }
  function setStateTimeout(data) {
    setState(data);
    setTimeout(() => setState({...data, open: false}), 2000)
  }
  const store = {
    signin,
    onChangeSign,
    state,
    setStateTimeout
  };
  return <TempContext.Provider value={store}>{children}</TempContext.Provider>;
};

export { TempProvider, TempContext };
