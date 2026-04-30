import "./Dashboard.css";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar/Navbar";
import FileCard from "../components/Filecard/Filecard";
import Upload from "../components/Upload/Upload";
import PreviewModal from "../components/Preview/Preview";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [previewFile, setpreviewFile] = useState(null);

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

  const filteredFiles = files.filter((f) =>
    f.filename.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Navbar />

      <input
        className="search-bar"
        placeholder="Search files..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <Upload refreshFiles={fetchFiles} />

       <div className="file-list">
        {filteredFiles.map((f) => (
          <FileCard
            key={f.id}
            file={f}
            refreshFiles={fetchFiles}
            onPreview={setpreviewFile}
          />
        ))}
      </div>

      {previewFile && (
        <PreviewModal
          file={previewFile}
          onClose={() => setpreviewFile(null)}
        />
      )}

    </div>
  );
}