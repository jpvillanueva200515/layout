import "./App.css";

function App() {
  return (
    <div className="page">

      <header className="header">
        Juan Paulo Villanueva - 3ADA
      </header>


      <div className="content">

        {/* LEFT COLUMN */}

        <div className="left-column">

          <section className="hero">
            Hero
          </section>

          <aside className="sidebar">
            Sidebar
          </aside>

        </div>


        {/* RIGHT COLUMN */}

        <main className="main-column">

          <section className="main-content">
            <h3>Main Content</h3>
          </section>


          <section className="extra-content">
            Extra Content
          </section>

        </main>

      </div>


      {/* RELATED CONTENT */}

      <div className="bottom-content">

        <section className="related-images">
          Related Images
        </section>

        <section className="related-posts">
          Related
          <br />
          Posts
        </section>

      </div>


      {/* FOOTER */}

      <footer className="footer">
        Footer
      </footer>

    </div>
  );
}

export default App;