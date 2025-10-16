const ResponseBox = () => {
  return (
    <section className="bg-white mt-4 mx-3 px-8 py-4 shadow-md rounded-xl">
      <div className="flex items-center gap-3">
        <div class="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <h2 className="text-lg font-semibold">Response</h2>
      </div>
    </section>
  );
};

export default ResponseBox;
