import React, { useState } from "react";
import User from "../User/User";

function MiniScreen() {
  const [tab, setTab] = useState("");
  // const [text, setText] = useState("");
  const [addTab, setAddTab] = useState([]);
  const [editTab, setEditTab] = useState("");
  const [changeTab, setChangeTab] = useState("");
  // const [addText, setAddText] = useState([
  //   {
  //     text: "",
  //   },
  // ]);

  const onChangeTab = (event) => {
    setTab(event.target.value);
  };

  const onChangeChangeTab = (event) => {
    setChangeTab(event.target.value);
  };
  // const onChangeEditTab = (event) => {
  //   setEditTab(event.target.value);
  // };
  // const onChangeText = (event) => {
  //   setText(event.target.value);
  // };

  // const onClickAddText = () => {
  //   const nextText = [...addText];
  //   nextText.push({
  //     id: Date.now(),
  //     text: text,
  //   });
  //   setAddText(nextText);
  //   setText("");
  // };
  const onEditTab = (tab) => {
    setEditTab(tab.id);
    setChangeTab(tab.text);
  };

  const onClickAddTab = () => {
    let nextAddTab = [...addTab];
    nextAddTab.push({
      id: Date.now(),
      text: tab,
    });
    setAddTab(nextAddTab);
    setTab("");
  };

  // console.log("addTab", addTab);

  const onUpdateTab = () => {
    let nextAddTab = [...addTab];
    let index = addTab.findIndex((tab) => tab.id === editTab);
    if (index === -1) {
      console.log("Khong the tim thay id cua project nay");
      return;
    }
    // console.log("changeTab", changeTab);
    nextAddTab[index].text = changeTab;
    setAddTab(nextAddTab);
    setChangeTab("");
    setEditTab("");
  };

  const onClickDeleteTab = (id) => {
    let nextAddTab = [...addTab];
    let index = addTab.findIndex((tab) => tab.id === id);
    if (index === -1) {
      console.log("Khong the tim thay id cua project nay");
      return;
    }
    nextAddTab.splice(index, 1);
    setAddTab(nextAddTab);
  };

  return (
    <div>
      <input type="text" name="" onChange={onChangeTab} value={tab} />

      <button onClick={onClickAddTab}>Add</button>
      {addTab.map((addTabItem) => (
        <div>
          <div>
            {/* <input type="text" name="" onChange={onChangeText} value={text} />
              <button onClick={onClickAddText}>Done</button> */}

            {/* {addText.map((text) => (
                <div>{text.text}</div>
              ))} */}
            {editTab === addTabItem.id ? (
              <div>
                <input
                  type="text"
                  onChange={onChangeChangeTab}
                  defaultValue={changeTab}
                />
                <button onClick={onUpdateTab}>Done</button>
              </div>
            ) : (
              <>
                {addTabItem.text}
                <button onClick={() => onEditTab(addTabItem)}>Change</button>
              </>
            )}
            <button onClick={() => onClickDeleteTab(addTabItem.id)}>
              Delete
            </button>
          </div>
          <div>
            <User />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MiniScreen;
