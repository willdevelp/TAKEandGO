import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "../ui/dropdown-menu"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="mx-auto">
               <div className="flex items-center border-b border-gray-300 pb-4">
                    <Image
                        src="/take.jpg"
                        alt="Le Café Parisien Logo"
                        width={40}
                        height={40}
                        className=''
                    />
                    <span className="ml-2 text-lg font-bold">TAKE <span className="text-sm">AND</span> GO</span>
               </div>
            </SidebarHeader>
            <SidebarContent>
                <div>
                    <p>Accueil</p>
                    <p>Listes de produits</p>
                    <p>Listes des commandes</p>
                </div>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}