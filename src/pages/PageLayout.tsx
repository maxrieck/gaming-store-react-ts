import React from 'react'
import NavBar from '../components/NavBar';


type PageLayoutProps = {
    children?:React.ReactNode;
}


const PageLayout:React.FC<PageLayoutProps> = ({ children }) => {


  return (

    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="col-span-full bg-gray-800 text-white p-4">
        <NavBar />
      </header>

      <aside className="hidden md:block bg-gray-900 p-4">
        Sidebar
      </aside>

      <main className="bg-gray-900 p-4">
        {children}
      </main>

      <footer className="col-span-full bg-gray-200 text-center p-4">
        Footer
      </footer>
    </div>

  )
}

export default PageLayout