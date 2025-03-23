import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex'>
        {/* Mobile Sidebar (using Sidebar component) */}
        <Sidebar>
          <SidebarTrigger asChild>
            <Button variant='outline' className='md:hidden m-4'>
              <Menu className='h-4 w-4' />
            </Button>
          </SidebarTrigger>
          <SidebarContent className='w-64 p-4'>
            <SidebarHeader>
              <h2 className='text-lg font-semibold'>Task Manager</h2>
            </SidebarHeader>
            <nav className='mt-4 space-y-2'>
              <a href='/boards' className='block text-blue-600 hover:underline'>
                Boards
              </a>
              <a
                href='/settings'
                className='block text-blue-600 hover:underline'
              >
                Settings
              </a>
            </nav>
          </SidebarContent>
        </Sidebar>

        {/* Desktop Sidebar (visible on larger screens) */}
        <aside className='hidden md:block w-64 bg-white shadow-md p-4'>
          <h2 className='text-lg font-semibold'>Task Manager</h2>
          <nav className='mt-4 space-y-2'>
            <a href='/boards' className='block text-blue-600 hover:underline'>
              Boards
            </a>
            <a href='/settings' className='block text-blue-600 hover:underline'>
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  )
}
