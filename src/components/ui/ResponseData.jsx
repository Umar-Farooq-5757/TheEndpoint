import ReactJson from "@microlink/react-json-view";

const ResponseData = ({ resData,theme }) => {
  return (
    <>
    <p className="text-sm font-semibold mt-4">Response Body:</p>
    <div
      className={`my-2 rounded-md max-h-[70vh] min-h-[40vh] overflow-auto overflow-x-auto w-full ${
        theme == "monokai" ? "bg-[#272822]" : "bg-gray-100 border border-gray-200"
      } p-3`}
    >
      <ReactJson
      className="json-body"
        src={resData}
        name={false}
        theme={theme}
        enableClipboard={false}
        displayObjectSize={false}
        indentWidth={6}
        displayDataTypes={false}
      />
    </div>
    </>
  );
};

export default ResponseData;
