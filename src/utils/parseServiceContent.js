import Image from "next/image";
import parse from "html-react-parser";
import clsx from "clsx";

export function parseServiceContent(htmlString) {
  let elements = parse(htmlString);
  console.log(elements);
  if (!Array.isArray(elements)) {
    elements = [elements];
  }

  let parsedData = [];
  let hasQuote = false;
  let hasStrong = false;

  elements.forEach((element) => {
    let imgSrcs = [];

    if (element?.type === "p") {
      const children = Array.isArray(element.props.children)
        ? [...element.props.children]
        : [element.props.children];
      const filteredChildren = [];

      children.forEach((child) => {
        if (child?.type === "img") {
          imgSrcs.push(child.props.src);
        } else if (!(child?.type === "strong" || child?.type === "em")) {
          filteredChildren.push(child);
        }
      });

      if (filteredChildren.length > 0) {
        parsedData.push({ type: "p", content: filteredChildren });
      }
    }

    if (element?.type === "h2") {
      parsedData.push({ type: "h4", content: element.props.children });
    } else if (
      element?.type === "p" &&
      element.props.children?.type === "strong" &&
      !hasStrong
    ) {
      parsedData.push({
        type: "p-strong",
        content: element.props.children.props.children,
      });
      hasStrong = true;
    } else if (
      element?.type === "p" &&
      element.props.children?.type === "em" &&
      !hasQuote
    ) {
      parsedData.push({
        type: "quote",
        content: element.props.children.props.children,
      });
      hasQuote = true;
    }

    if (imgSrcs.length) {
      parsedData.push({ type: "imageBlock", content: imgSrcs });
    }
  });

  return parsedData;
}
