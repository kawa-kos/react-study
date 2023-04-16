import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compornents/ColorfulMessage";

const App = () => {
  // console.log("最初");
  const [num, setNum] = useState(0);
  const [visible, setVisible] = useState(false);
  const onclickButton = () => {
    setNum(num + 1);
  };
  const onclickVisible = () => {
    setVisible(!visible);
  };

  //空の配列を渡すと最初の一回のみ、指定をすると指定した変数が変更された時に反応する
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      visible || setVisible(true);
    } else {
      visible && setVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>ちはー</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onclickButton}>ボタン</button>
      <button onClick={onclickVisible}>on/off</button>
      <p>{num}</p>
      {visible && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
