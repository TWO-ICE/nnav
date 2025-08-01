export const HeartIcon = ({
  isFavorite,
  onClick,
  className = "",
}: {
  isFavorite: boolean;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={isFavorite ? "white" : "none"}
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer hover:scale-110 transition-transform ${className}`}
      onClick={onClick}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};
