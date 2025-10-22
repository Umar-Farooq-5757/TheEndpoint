function isValidUrl(string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol (optional http:// or https://)
      "(" + // Start of domain/IP/localhost group
      "localhost|" + // explicitly allow 'localhost'
      "(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name (e.g., example.com)
      "((\\d{1,3}\\.){3}\\d{1,3})" + // OR ip (v4) address
      ")" + // End of domain/IP/localhost group
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // optional port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // optional query string
      "(\\#[-a-z\\d_]*)?$",
    "i" // ignore case
  );
  return pattern.test(string);
}

export default isValidUrl;