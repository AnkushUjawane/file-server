import { useState } from "react";
import "./Upload.css";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function Upload({refreshFiles}) {
    const [dragging, setdragging] = useState(null);
    const handleUpload = async(file) => {
        if(!file) {
            return alert("Select a file");
        }
        const formData = new FormData();
        formData.append("file", file);
        try{
            await api.post("/files/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Upload Successful");
            refreshFiles();
        } catch(err){
            console.log(err);
            console.log(err.response);
            console.log(err.response?.data?.message || err.message);
            toast.error("Upload Failed");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setdragging(false);
        const file = e.dataTransfer.files[0];
        if(file){
            handleUpload(file);
        }
    }

    return (
        <div className={`upload-box ${dragging ? "dragging" : ""}`}
            onDragOver={(e) => {
                e.preventDefault();
                setdragging(true);
            }}
            onDragLeave={() => setdragging(false)}
            onDrop={handleDrop}
        >
            <p>Drag & Drop file here</p>
            <input type="file" onChange={(e) => handleUpload(e.target.files[0])}/>
        </div>
    )
}