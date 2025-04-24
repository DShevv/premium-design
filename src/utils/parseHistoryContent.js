import parse from "html-react-parser";

export function parseHistoryContent(htmlString) {
  const elements = parse(htmlString);
  let parsedData = [];

  elements.forEach((element) => {
    if (element?.type === "p") {
      const strongContent =
        element.props.children?.type === "strong"
          ? element.props.children.props.children
          : Array.isArray(element.props.children)
          ? element.props.children.find((child) => child?.type === "strong")
              ?.props?.children
          : null;

      if (strongContent) {
        parsedData.push({
          type: "body-1-regular",
          content: strongContent,
        });
      } else {
        const content = Array.isArray(element.props.children)
          ? element.props.children.join("")
          : element.props.children;

        parsedData.push({
          type: "body-1",
          content: content,
        });
      }
    } else if (element?.type === "strong" && !element.parent) {
      parsedData.push({
        type: "body-1-regular",
        content: element.props.children,
      });
    }
  });

  return parsedData;
}
