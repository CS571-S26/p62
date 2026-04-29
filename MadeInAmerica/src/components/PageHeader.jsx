function PageHeader({ title, subtitle, titleClassName = "" }) {
  return (
    <header className="text-center my-4">
      <h1 className={titleClassName}>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default PageHeader;