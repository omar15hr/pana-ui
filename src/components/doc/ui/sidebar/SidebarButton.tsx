
import { useState } from "react"
import { cn } from "../../../../utils/cn"
import { Box, Calendar } from "../../../Icons"


type SidebarButton = {
  slug: string
  name: string
  isNew?: boolean
  onClick?: () => void
  isUpdated?: boolean
}

export function SidebarButton({
  name,
  slug,
  isNew = false,
  isUpdated = false,
  onClick,
}: SidebarButton) {

  const [isActive, setIsActive] = useState(false)

  return (
    <a
      href={slug}
      onClick={onClick}
      className={cn(
        "group relative mt-1 rounded-lg px-2 py-1.5 text-sm font-normal select-none",
        isActive
          ? "bg-light-200 dark:bg-dark-300 z-0"
          : "text-light-900 hover:bg-light-200 dark:text-dark-900 dark:hover:bg-dark-300"
      )}
    >
      {isNew ? (
        <div className="relative z-1 flex items-center justify-start gap-2">
          <span className="relative z-1 block text-[13px]">{name}</span>
          <span className="absolute right-0 z-2 flex flex-row items-center justify-center gap-1 rounded-md bg-amber-50 py-0.5 pl-1 text-[10px] leading-4 font-semibold text-amber-600 dark:bg-amber-950">
            <Box size={12} />
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:w-auto group-hover:pr-1 group-hover:opacity-100">
              New
            </span>
          </span>
        </div>
      ) : isUpdated ? (
        <div className="relative z-1 flex items-center justify-start gap-2">
          <span className="relative z-1 block text-[13px]">{name}</span>
          <span className="absolute right-0 z-2 flex flex-row items-center justify-center gap-1 rounded-md bg-pink-100 py-0.5 pl-1 text-[10px] leading-4 font-semibold text-pink-600 dark:bg-pink-950 dark:text-pink-400">
            <Calendar />
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:w-auto group-hover:pr-1 group-hover:opacity-100">
              Updated
            </span>
          </span>
        </div>
      ) : (
        <span className="relative z-1 block text-[13px]">{name}</span>
      )}
    </a>
  )
}