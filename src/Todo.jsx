import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin4Fill } from "react-icons/ri";

const Todo = () => {
    const [data, setData] = useState('');
    const [todo, setTodo] = useState([]);

    const add = () => {
        if (data.trim() === '') return;
        setTodo(old => [...old, data]);
        setData('');
    };

    const get = (e) => {
        setData(e.target.value);
    };

    const deleteItem = (index) => {
        setTodo(old => old.filter((_, i) => i !== index));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-slate-300 rounded-xl h-[70vh] w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] p-6 shadow-lg">
                <div className="flex justify-center items-center">
                    <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl mt-6 text-gray-500'>TODO'S</h1>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
                    <input
                        className='h-10 pl-6 w-full sm:w-[70%] mb-3 sm:mb-0 rounded-xl'
                        type="text"
                        placeholder='Enter todo'
                        onChange={get}
                        value={data}
                    />
                    <button
                        onClick={add}
                        className="flex justify-center items-center bg-blue-500 sm:ml-4 hover:bg-blue-600 text-white font-bold h-10 w-full sm:w-auto px-4 rounded-lg"
                    >
                        <IoMdAddCircle className="mr-2" /> Add
                    </button>
                </div>
                <div className="mt-10 max-h-[40vh] overflow-y-auto">
                    {todo.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li className="flex justify-between items-center bg-slate-200 rounded-2xl px-4 py-2 mt-3">
                                    <span className="flex-grow text-gray-700">{item}</span>
                                    <button
                                        onClick={() => deleteItem(index)}
                                        className="bg-gray-500 flex justify-center items-center hover:bg-gray-600 text-white font-bold h-8 w-[80px] rounded-lg ml-4"
                                    >
                                        <RiDeleteBin4Fill className="mr-1" /> Delete
                                    </button>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Todo;
