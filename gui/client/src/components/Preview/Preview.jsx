import "./Preview.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function PreviewModal({ file, onClose }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchFile = async () => {
      const res = await api.get(`/files/${file.id}/download`, {
        responseType: "blob",
      });

      const fileURL = URL.createObjectURL(res.data);
      setUrl(fileURL);
    };

    fetchFile();
  }, [file]);

  const isImage = file.filename.match(/\.(jpg|jpeg|png|gif)$/i);
  const isPDF = file.filename.match(/\.pdf$/i);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>

        <h3>{file.filename}</h3>

        {isImage && <img src={url} alt="preview" />}
        {isPDF && <iframe src={url} title="pdf" />}

        {!isImage && !isPDF && (
          <p>No preview available for this file</p>
        )}
      </div>
    </div>
  );
}