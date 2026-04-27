import "./Dashboard.css";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar/Navbar";
import FileCard from "../components/Filecard/Filecard";
import Upload from "../components/Upload/Upload";

export default function Dashboard() {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    try {
      const res = await api.get("/files");
      setFiles(res.data.data);
    } catch (err) {
      alert("Error fetching files");
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <Upload refreshFiles={fetchFiles} />
      <div className="file-list">
        {files.length === 0 ? (
          <p>No files found</p>
        ) : (
          files.map((f) => (<FileCard key={f.id} file={f} refreshFiles={fetchFiles} />))
        )}
      </div>
    </div>
  );
}