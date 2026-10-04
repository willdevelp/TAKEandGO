import AppSidebar from "@/components/sidebar/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppSidebar />
      <main className="w-4/5 float-right">
        {children}
      </main>
    </div>
  )
}