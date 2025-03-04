import { ReactSVG } from "../../../Icons"

type MobileHeaderProps = {
  onOpenSidebar: () => void
}

export function MobileHeader({ onOpenSidebar }: MobileHeaderProps) {
  return (
    <div className="bg-light-50/50 dark:bg-dark-50/50 fixed top-0 right-0 left-0 z-30 flex items-center justify-between px-4 py-3 backdrop-blur-md lg:hidden">
      <a href="/">
        {/* <img src={Logo} alt="Logo SmoothUI" width={32} height={32} /> */}
      </a>
      <button
        onClick={onOpenSidebar}
        className="hover:bg-light-200 dark:hover:bg-dark-200 rounded-lg p-2"
        aria-label="Toggle menu"
      >
        <ReactSVG size={24} />
      </button>
    </div>
  )
}