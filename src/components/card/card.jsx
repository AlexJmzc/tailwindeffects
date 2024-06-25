
export const Card = ({ imageURL, name }) => {
  return (
    <div className="relative flex items-end w-full max-w-[350px] h-[500px] p-7 bg-white shadow-lg transition-transform duration-500 ease-in-out rounded-[45px] group hover:-translate-y-5">
      <img
        src={ imageURL }
        alt="Yuji"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(208,195,195,0.5)] to-[#cc2426] transition-opacity duration-500 opacity-0 rounded-[40px] group-hover:opacity-100"></div>
      <div className="relative z-30 text-white opacity-0 transform translate-y-0 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h1 className="text-xl font-semibold">{ name }</h1>
        <p className="text-sm mt-2.5 mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias
          nam dolorum natus maiores deserunt ipsum explicabo quia dolore
          rerum modi, perferendis unde a omnis praesentium totam inventore
          eum soluta!
        </p>
        <a
          href="/#"
          className="mt-4 px-4 py-2 bg-white text-gray-700 font-bold rounded-full hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out"
        >
          Saber más
        </a>
      </div>
    </div>

  );
};
