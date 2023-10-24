import React, { useState } from "react";
import "../Home/Job.css";
import MiniScreen from "../../Components/Tag/MiniScreen";

function Job(props) {
  // const [title, setTitle] = useState(["MÃ CÔNG VIỆC", "DANH SÁCH CÔNG VIỆC"]);
  // const [job, setJob] = useState([
  //   {
  //     id: Date.now(),
  //     name: "Quét nhà",
  //   },
  // ]);
  // const [addJob, setAddJob] = useState("");
  // const [editJob, setEditJob] = useState("");

  // const onChangJob = (e) => {
  //   setAddJob(e.currentTarget.value);
  // };

  // const onClickAddJob = () => {
  //   let nextJob = [...job];
  //   nextJob.push({
  //     id: Date.now(),
  //     name: addJob,
  //   });
  //   setJob(nextJob);
  //   setAddJob("");
  // };

  // const onClickEditJob = (jobs) => {
  //   setAddJob(jobs.name);
  //   setEditJob(jobs.id);
  //   console.log("đã nhận edit");
  // };

  // const updateJob = () => {
  //   let index = job.findIndex((jobs) => jobs.id === editJob);
  //   let nextJob = [...job];
  //   nextJob[index] = {
  //     name: addJob,
  //   };
  //   setJob(nextJob);
  //   setAddJob("");
  //   setEditJob("");
  // };

  // const onClickDeleteJob = (id) => {
  //   let index = job.findIndex((jobs) => jobs.id === id);
  //   let nextJob = [...job];
  //   nextJob.splice(index, 1);
  //   setJob(nextJob);
  // };

  const onClickLogOut = () => {
    props.setScreen("LogOut");
  };
  return (
    <div className="jobForm">
      {/* <input
        type="text"
        placeholder="Nhập công việc của bạn"
        onChange={onChangJob}
        value={addJob}
      />

      <button onClick={onClickAddJob}>Thêm</button>
      <table>
        <tr className="formList">
          {title.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
        <tr className="formList">
          {job.map((jobs) => (
            <>
              <td key={jobs.id} className="name">
                {jobs.id}
              </td>
              <td key={jobs.id} className="name">
                {jobs.name}
                {editJob ? (
                  <button onClick={(e) => updateJob(jobs)}>Cập nhật</button>
                ) : (
                  <button onClick={(e) => onClickEditJob(jobs)}>
                    Chỉnh sửa
                  </button>
                )}
                <button onClick={(e) => onClickDeleteJob(jobs.id)}>
                  Xoá Công Việc
                </button>
              </td>
            </>
          ))}
        </tr>
      </table> */}
      <MiniScreen />
      <div className="">
        <button onClick={onClickLogOut}>Đăng xuất</button>
      </div>
    </div>
  );
}

export default Job;
