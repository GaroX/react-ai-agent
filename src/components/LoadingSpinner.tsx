const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <span className="text-xl text-indigo-700 dark:text-indigo-300 font-semibold">Loading...</span>
  </div>
);

export default LoadingSpinner;
