type T = {
  children: React.ReactNode;
};

const MainLayouts = (p: T) => {
  return (
    <section className="flex items-center gap-y-6 flex-col h-screen w-auto p-6 justify-center">
      {p.children}
    </section>
  );
};

export default MainLayouts;
