import useReveal from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
