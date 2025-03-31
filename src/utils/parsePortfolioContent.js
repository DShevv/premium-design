import parse from "html-react-parser";

export function parsePortfolioContent(htmlString) {
  const elements = parse(htmlString);
  let parsedData = [];

  for (let i = 0; i < elements.length; i++) {
    if (elements[i]?.type === "h4" && elements[i + 1]?.type === "p") {
      let imgSrc = null;

      if (
        elements[i - 1]?.type === "p" &&
        elements[i - 1]?.props?.children?.type === "img"
      ) {
        imgSrc = elements[i - 1].props.children.props.src;
      }

      parsedData.push({
        img: imgSrc,
        title: elements[i].props.children,
        text: elements[i + 1].props.children,
      });
      i += 1;
    }
  }
  return parsedData;
}
