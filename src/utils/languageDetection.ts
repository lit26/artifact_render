export const detectLanguage = (codeString: string) => {
  // Remove whitespace and convert to lowercase
  const code = codeString.trim().toLowerCase();

  // Check for HTML
  if (
    code.includes("<!doctype html>") ||
    (code.includes("<html") && code.includes("</html>")) ||
    (code.includes("<body") && code.includes("</body>"))
  ) {
    return "HTML";
  }

  // Check for SVG
  if (code.includes("<svg") && code.includes("</svg>")) {
    return "SVG";
  }

  // Check for React
  if (
    code.includes("react") ||
    (code.includes("import") && code.includes("from")) ||
    /const\s+\w+\s*=\s*\(\s*\)\s*=>/i.test(code) ||
    code.includes("usestate") ||
    code.includes("useeffect")
  ) {
    return "React";
  }

  return null;
};
