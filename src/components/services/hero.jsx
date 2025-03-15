export function ServiceHero({ backgroundImage }) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage || "assets/PWS.jpg"})`,
      }}
    >

    </section>
  );
}
