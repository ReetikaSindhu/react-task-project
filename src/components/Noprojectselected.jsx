import image from "../assets/write.png";
export default function Noprojectselected({ onstartaddproject }) {
  return (
    <div className="w-2/3 text-center mt-24">
      <img src={image} className="w-24 h-24 object-contain mx-auto"></img>
      <h2 className="text-xl font-bold text-stone-700 my-4">
        Select a Project
      </h2>
      <p className="text-stone-400">
        {" "}
        Opps you forgot to select a Project......
      </p>{" "}
      <button
        onClick={onstartaddproject}
        className="px-4 py-2 text-xs md:text-base rounded-md mt-8 bg-stone-700 
        text-stone-400 hover:text-stone-100 hover:bg-stone-600"
      >
        +Create Project
      </button>
    </div>
  );
}
