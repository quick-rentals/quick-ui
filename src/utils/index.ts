export const hyphenize = (string: string | undefined): string => {
    const fallbackString = "nui";
  
    if (string && typeof string === "string" && string.replace) {
      return string
        .replace(/[\s_]/g, "-")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/-+/g, "-")
        .toLowerCase();
    }
  
    return fallbackString;
  };
  