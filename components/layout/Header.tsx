export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold text-slate-800">
        Dashboard výroby
      </h1>

      <div className="flex items-center gap-4">

        <button className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200">
          🔔
        </button>

        <button className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200">
          ⚙️
        </button>

        <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">
          I
        </div>

      </div>

    </header>
  );
}