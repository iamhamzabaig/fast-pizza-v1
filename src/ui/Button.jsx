import { Link } from "react-router-dom";

export default function Button({ children, disbled, to }) {
  const className =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disbled} className={className}>
      {children}
    </button>
  );
}
