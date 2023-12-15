export default function TextArea() {
  return (
    <div className="m-5 p-4 flex flex-wrap items-center">
      <textarea className="w-full h-screen max-h-[50vh] p-3 text-white bg-neutral-700 rounded-md focus:outline-none resize-none bg-contentBackground" />
    </div>
  );
}
