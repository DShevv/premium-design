import Image from "next/image";
import styles from "./Marker.module.scss";

const Marker = () => {
  const container = document.createElement("div");
  container.className = styles.container;
  const image = document.createElement("img");
  image.className = styles.image;
  image.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNTAiIGZpbGw9IiNGQkY3RjQiLz4KPHBhdGggZD0iTTYzLjk1NjkgMzkuMDQwMUM2NC44NjIgMzcuMTI5NCA2Mi44NzA5IDM1LjEzODQgNjAuOTYwNCAzNi4wNDM1TDM2LjI1MjEgNDcuNzQ3NEMzNC4zNDI4IDQ4LjY1MTcgMzQuNjIgNTEuNDUxMiAzNi42Njk2IDUxLjk2MzZMNDUuNzYzMyA1NC4yMzcxTDQ4LjAzNjggNjMuMzMwOUM0OC41NDkyIDY1LjM4MDUgNTEuMzQ4NyA2NS42NTc3IDUyLjI1MyA2My43NDgzTDYzLjk1NjkgMzkuMDQwMVoiIGZpbGw9IiMwQjNEM0UiLz4KPC9zdmc+Cg==";

  container.appendChild(image);

  return container;
};

export default Marker;
