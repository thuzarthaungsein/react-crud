import axios from "axios";
import { useEffect, useState } from "react";
import Task from "../../components/Task";

const PostLilst = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        console.log(response.data);
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.log("Error ", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.content}
            media={task.media}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default PostLilst;
