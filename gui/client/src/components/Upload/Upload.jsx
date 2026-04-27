import { useState } from "react";
import "./Upload.css";
import api from "../../services/api";

export default function Upload({refreshFiles}) {
    const [file, setFile] = useState(null);
    const handleUpload = async(e) => {
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
            alert("Upload Successful");
            refreshFiles();
        } catch(err){
            console.log(err);
            console.log(err.response);
            console.log(err.response?.data?.message || err.message);
            alert("Upload Failed");
        }
    };

    return (
        <div className="upload-box">
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}