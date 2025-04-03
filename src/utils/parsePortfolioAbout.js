import parse from "html-react-parser";

export function parsePortfolioAbout(htmlString) {
  const elements = parse(htmlString);
  let parsedData = [];

  for (let i = 0; i < elements.length; i++) {
    if (
      elements[i]?.type === "p" &&
      elements[i + 1]?.type === "p" &&
      elements[i + 1].props.children?.type === "strong"
    ) {
      parsedData.push({ type: "h3", content: elements[i].props.children });
      parsedData.push({
        type: "p",
        content: elements[i + 1].props.children.props.children,
      });
      i++;
    }
  }

  return parsedData;
}
