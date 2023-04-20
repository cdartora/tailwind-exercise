function Tickets() {
  return (
    <div
      id="tickets"
      className="max-w-screen-lg p-4 mt-20 mx-auto text-zinc-900 dark:text-zinc-200"
    >
      <h2>Tickets</h2>
      <table className="mt-5 table w-full border border-zinc-500 border-collapse">
        <thead className="text-lg font-bold">
          <td className="border border-zinc-500 p-3">Tickets</td>
          <td className="border border-zinc-500 p-3">Price</td>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">
              Single day ticket
            </td>
            <td className="border border-zinc-500 py-2 px-3">$30</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">7 day ticket</td>
            <td className="border border-zinc-500 py-2 px-3">$100</td>
          </tr>
        </tbody>
        <caption className="caption-bottom mt-2">
          Once they're gone they're gone!
        </caption>
      </table>
    </div>
  );
}

export default Tickets;
