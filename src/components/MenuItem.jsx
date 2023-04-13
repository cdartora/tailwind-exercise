import { useState } from "react";

export default function MenuItem({
  label,
  hasSubmenuItems,
  mobile,
  closeMenu,
  isSubmenuItem,
}) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  function toggleSubmenu() {
    setIsSubmenuOpen(!isSubmenuOpen);
    if (!hasSubmenuItems) {
      closeMenu();
    }
  }
  if (mobile) {
    return (
      <>
        <a
          onClick={toggleSubmenu}
          className={`flex flex-col items-center relative cursor-pointer hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out 
          ${hasSubmenuItems ? "" : "p-4"}
          ${isSubmenuItem ? "font-normal" : "font-bold"}
          `}
          href={`#${label.split(" ").join("-").toLowerCase()}`}
        >
          <span className={`${hasSubmenuItems ? "p-4 font-bold" : ""}`}>
            {label}
          </span>
          {hasSubmenuItems && isSubmenuOpen && (
            <div className="top-full right-0 text-center w-full">
              <MenuItem
                label="Single day ticket"
                mobile={true}
                closeMenu={closeMenu}
                isSubmenuItem={true}
              />
              <MenuItem
                label="7 day ticket"
                mobile={true}
                closeMenu={closeMenu}
                isSubmenuItem={true}
              />
            </div>
          )}
        </a>
      </>
    );
  }
  return (
    <div className="group relative h-full flex items-center justify-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
      <a href={`#${label.toLowerCase()}`}>
        <span>{label}</span>
      </a>
      {hasSubmenuItems && (
        <div className="group-hover:block hidden absolute top-full right-0 bg-pink-500 whitespace-nowrap rounded-b-md text-right">
          <MenuItem label="Single day ticket" />
          <MenuItem label="7 day ticket" />
        </div>
      )}
    </div>
  );
}
