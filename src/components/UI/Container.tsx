import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("max-w-7xl mx-auto w-full h-auto", className)}>
      {children}
    </div>
  );
};
