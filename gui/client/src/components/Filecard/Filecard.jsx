import "./Filecard.css";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function FileCard({ file, refreshFiles, onPreview }) {
  const downloadFile = async () => {
    try {
      const res = await api.get(`/files/${file.id}/download`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.filename);
      document.body.appendChild(link);
      link.click();

      toast.success("Download Started");
    } catch (err) {
      toast.error("Download Failed");
    }
  };

  const deleteFile = async () => {
    try {
      await api.delete(`/files/${file.id}`);
      toast.success("File Deleted");
      refreshFiles();
    } catch (err) {
      toast.error("Delete Failed");
    }
  }

  const shareFile = async () => {
    try {
      const res = await api.post(`/share/${file.id}`);
      const link = res.data.link;
      navigator.clipboard.writeText(link);
      toast.success("Link Copied");
    } catch (err) {
      toast.error("Share Failed");
    }
  }

  return (
    <div className="file-card">
      <div className="file-info">
        <h4>{file.filename}</h4>
        <p>{(file.size / 1024).toFixed(2)} KB</p>
      </div>

      <div className="actions">
        <button onClick={() => onPreview(file)}>Preview</button>
        <button onClick={downloadFile}>Download</button>
        <button onClick={deleteFile}>Delete</button>
        <button onClick={shareFile}>Share</button>
      </div>
    </div>
  );
}