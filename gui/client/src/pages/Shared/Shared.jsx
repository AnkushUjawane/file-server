import "./Shared.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function Shared() {
  const [shares, setShares] = useState([]);

  const fetchShares = async () => {
    try {
      const res = await api.get("/share");
      setShares(res.data.data);
    } catch {
      toast.error("Failed to load shared files");
    }
  };

  useEffect(() => {
    fetchShares();
  }, []);

  const copyLink = (token) => {
    const link = `${window.location.origin}/api/share/${token}`;
    navigator.clipboard.writeText(link);
    toast.success("Link copied!");
  };

  return (
    <div className="shared-page">
      <h2>Shared Files</h2>

      {shares.length === 0 ? (
        <p>No shared files</p>
      ) : (
        <div className="shared-list">
          {shares.map((s) => (
            <div className="shared-card" key={s.id}>
              <p>File ID: {s.fileId}</p>

              <div className="actions">
                <button onClick={() => copyLink(s.shareToken)}>
                  Copy Link
                </button>

                <a
                  href={`/api/share/${s.shareToken}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}