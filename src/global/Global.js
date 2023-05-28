import { toast } from "react-toastify";

export const Title = () => {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come Back ;)";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
};
window.toastify = (msg, type) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "error":
      toast.error(msg);
      break;

    default:
      toast.info(msg);
      break;
  }
};
