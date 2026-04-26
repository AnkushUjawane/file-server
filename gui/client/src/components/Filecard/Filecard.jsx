import "./Filecard.css"

export default function FileCard({ file }) {
  return (
    <div className="file-card">
      <p>{file.filename}</p>
      <small>{(file.size / 1024).toFixed(2)} KB</small>
    </div>
  );
}