import parse from "html-react-parser";

export function parseLegalContent(htmlString) {
  const elements = parse(htmlString);
  let parsedData = [];

  elements.forEach((element) => {
    if (element?.type === "h2") {
      parsedData.push({ type: "h4", content: element.props.children });
    } else if (element?.type === "p") {
      parsedData.push({ type: "p-regular", content: element.props.children });
    }
  });

  return parsedData;
}
