import { useEffect, useState } from "react";

const Form = ({ initialTask, onSubmit }) => {
  const [task, setTask] = useState({
    title: initialTask.title,
    content: initialTask.content,
  });

  useEffect(() => {
    if (initialTask) {
      setTask(initialTask);
    }
  }, [initialTask]);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setTask({ ...task, [id]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Submit", task);

    onSubmit(task);
  };

  return (
    <div className="container py-10">
      <div className="w-full">
        <form
          className="w-full bg-white shadow-md p-6"
          onSubmit={submitHandler}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                type="text"
                name="title"
                value={task.title}
                id="title"
                placeholder="Title"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                rows="4"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                type="text"
                id="description"
                name="description"
                value={task.content}
                onChange={changeHandler}
              ></textarea>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500">
                Add Task
              </button>
            </div>

            {/* <div className="w-full px-3 mb-8">
                <label
                  className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center"
                  htmlFor="dropzone-file"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                    Task image
                  </h2>

                  <p className="mt-2 text-gray-500 tracking-wide">
                    Upload or drag & drop your file SVG, PNG, JPG or GIF.{" "}
                  </p>

                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    value={task.image}
                    name="image"
                    accept="image/png, image/jpeg, image/webp"
                  />
                </label>
              </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
