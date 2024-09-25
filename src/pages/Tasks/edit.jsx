import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/Form";

const EditTask = () => {
  const [task, setTask] = useState({ title: "", content: "" });
  const { id } = useParams();

  const submitHandler = (newTask) => {
    // e.preventDefault();

    console.log("Submitted", newTask);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/posts/${id}`);
      // console.log("Response", data);
      setTask(data);
    };
    fetchData();
  }, [id]);

  // return <>{task && <Form title={task.title} content={task.content} />}</>;
  return (
    <>
      <Form initialTask={task} onSubmit={submitHandler} />
    </>
  );
};

export default EditTask;
