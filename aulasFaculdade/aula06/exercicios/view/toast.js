const toastContainerStyle = {
  position: "fixed",
  bottom: "20px",
  left: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: "9999"
};

const toastBaseStyle = {
  color: "#fff",
  padding: "10px 15px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  fontSize: "14px",
  opacity: "0",
  transform: "translateX(-20px)",
  transition: "opacity 0.3s ease, transform 0.3s ease"
};

const toastColors = {
  default: "#b83564",
  success: "#4CAF50",
  error: "#f44336"
};

export function showToast(message, type = "default", duration = 3000) {
  let toastContainer = document.getElementById("toast-container");

  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
    Object.assign(toastContainer.style, toastContainerStyle);
  }

  const toast = document.createElement("div");
  toast.innerText = message;

  Object.assign(toast.style, toastBaseStyle, { background: toastColors[type] || toastColors.default });

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";
  }, 10);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
