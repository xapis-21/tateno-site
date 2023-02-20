export default function PhotoLayout({ children }) {
    return (
        <section>
            <header className="text-wood/80 z-50 font-bold text-6xl fixed top-32 py-8 px-20 uppercase w-screen">Film</header>
            <main>
            {children}
            </main>
        </section>
    )
  }