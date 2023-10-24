import React, { useState } from "react";

function Description() {
  const [description, setDescription] = useState([
    {
      descript: "Mô tả công việc 1",
    },
  ]);
  const [addDes, setAddDes] = useState("");
  const [editDes, setEditDes] = useState("");
  const [changeDes, setChangeDes] = useState("");
  const [changeTus, setChangeTus] = useState("");
  const [isEditStatus, setEditStatus] = useState("");

  const onChangeDes = (event) => {
    setAddDes(event.target.value);
  };

  const onChangeDescription = (event) => {
    setChangeDes(event.target.value);
  };

  const onAddDes = (value, index) => {
    let nextDescription = [...description];
    nextDescription.push({
      descript: addDes,
    });
    setAddDes("");
    setDescription(nextDescription);
  };

  const onEditDescriptions = (desc) => {
    setEditDes(desc.descript);
    setChangeDes(desc.descript);
  };

  const onUpdateDescripstions = () => {
    let nextDescription = [...description];
    let index = nextDescription.findIndex(
      (description) => description.descript === editDes
    );
    if (index === -1) {
      alert("Please select a description");
      return;
    }
    nextDescription[index].descript = changeDes;
    setDescription(nextDescription);
    setEditDes("");
    setChangeDes("");
  };

  const onChangeTus = (event) => {
    setChangeTus(event.target.value);
  };

  const onEditStatus = () => {
    setEditStatus(true);
  };

  const onDoneStatus = () => {
    setEditStatus(false);
  };

  return (
    <div>
      <div>Tên công việc: </div>
      <div>
        Ngày hoàn tất
        <input type="date" name="deadline" />
      </div>
      <div>
        Trạng thái
        {isEditStatus ? (
          <>
            <input type="text" name="status" onChange={onChangeTus} />
            <button onClick={onDoneStatus}>Done</button>
          </>
        ) : (
          <button onClick={onEditStatus}>{changeTus}</button>
        )}
      </div>
      <div>
        Mô tả:
        <input
          type="text"
          name="description"
          onChange={onChangeDes}
          value={addDes}
        />
        <button onClick={onAddDes}>Add</button>
        {description.map((data) => (
          <div>
            <div>
              {editDes === data.descript ? (
                <div>
                  <input
                    type="text"
                    onChange={onChangeDescription}
                    defaultValue={changeDes}
                  />
                  <button onClick={onUpdateDescripstions}>Done</button>
                </div>
              ) : (
                <div>
                  {data.descript}
                  <button onClick={() => onEditDescriptions(data)}>
                    {changeDes}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Description;
