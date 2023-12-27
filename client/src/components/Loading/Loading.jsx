const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status" />
    </div>
  );
};

export default Loading;
