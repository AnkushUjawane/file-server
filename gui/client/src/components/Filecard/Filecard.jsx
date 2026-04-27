import "./Filecard.css";
import api from "../../services/api";


export default function FileCard({ file, refreshFiles }) {
  const downloadFile = async () => {
    const res = await api.get(`/files/${file.id}/download`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download",file.filename);
    document.body.appendChild(link);
    link.click();
  };

  const deleteFile = async () => {
    await api.delete(`/files/${file.id}`);
    refreshFiles();
  }

  const shareFile = async() => {
    const res = await api.post(`/files/${file.id}/share`);
    alert("Share Link: " + res.data.link);
  }

  return (
    <div className="file-card">
      <p>{file.filename}</p>
      <small>{(file.size / 1024).toFixed(2)} KB</small>

      <div className="actions">
        <button onClick={downloadFile}>Download</button>
        <button onClick={deleteFile}>Delete</button>
        <button onClick={shareFile}>Share</button>
      </div>
    </div>
  );
}