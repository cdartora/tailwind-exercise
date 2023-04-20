import { Sun, Moon } from "@phosphor-icons/react";

function ThemeButton({ toggleTheme }) {
  return (
    <div
      onClick={toggleTheme}
      className={`bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 fixed cursor-pointer rounded-l-lg w-12 shadow-md top-24 right-0 inline-block p-2 text-3xl`}
    >
      <Sun size={32} className="hidden dark:block" />
      <Moon size={32} className="dark:hidden" />
    </div>
  );
}

export default ThemeButton;
