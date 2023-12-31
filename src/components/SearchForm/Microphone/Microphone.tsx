export const Microphone = () => {
  return (
    <button
      type="button"
      className="bg-transparent flex items-center justify-center text-blue-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-microphone"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
        <path d="M5 10a7 7 0 0 0 14 0"></path>
        <path d="M8 21l8 0"></path>
        <path d="M12 17l0 4"></path>
      </svg>
    </button>
  );
};
