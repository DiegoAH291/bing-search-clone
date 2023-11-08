type Props = {
  menu: boolean;
};

export const Menu = ({ menu }: Props) => {
  return (
    <div
      className={`w-80 rounded-md bg-neutral-800 h-40 absolute right-5 top-20 shadow-md z-10 max-nav:left-5 max-nav:top-40 ${
        menu === true ? "flex" : "hidden"
      }`}
    ></div>
  );
};
