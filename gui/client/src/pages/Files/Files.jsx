import Upload from "../../components/Upload/Upload";
import Filecard from "../../components/Filecard/Filecard";
import Preview from "../../components/Preview/Preview";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function Files() {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState(null);

  const fetchFiles = async () => {
    const res = await api.get("/files");
    setFiles(res.data.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>My Files</h2>

      <Upload refreshFiles={fetchFiles} />

      {files.map((f) => (
        <Filecard
          key={f.id}
          file={f}
          refreshFiles={fetchFiles}
          onPreview={setPreview}
        />
      ))}

      {preview && (
        <Preview file={preview} onClose={() => setPreview(null)} />
      )}
    </div>
  );
}