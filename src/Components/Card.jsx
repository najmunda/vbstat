export default function Card({className, children}) {
  const componentStyle = "p-2 bg-slate-50 dark:bg-slate-900 border border-slate-400 dark:border-slate-500 text-black dark:text-white rounded"
  className = className ?  className + " " + componentStyle : componentStyle;
  return (
    <div className={className}>
      {children}
    </div>
  );
}
