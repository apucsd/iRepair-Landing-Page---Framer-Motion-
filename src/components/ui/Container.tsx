import { ReactNode } from "react";
const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={` w-full max-w-[1220px] px-[20px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
