import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from "../components/ui/button"

export default function Component() {
  return (
    <div className="bg-[#f4f1ec] min-h-screen font-sans text-[#2a2a2a]">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">ZN</div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-[#d64545] transition-colors">WORK</a>
          <a href="#" className="hover:text-[#d64545] transition-colors">ABOUT</a>
          <a href="#" className="hover:text-[#d64545] transition-colors">CONTACT</a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 lg:col-span-5 space-y-4 z-10">
            <h1 className="text-6xl md:text-8xl font-bold leading-none">ZEPHYR NEXUS</h1>
            <p className="text-xl text-[#6b6b6b]">Digital Artisan | Visual Innovator</p>
            <Button className="bg-[#2a2a2a] hover:bg-[#d64545] text-white mt-4">
              Explore Portfolio
            </Button>
          </div>
          
          <div className="col-span-12 md:col-span-5 lg:col-span-7 grid grid-cols-6 gap-4 mt-8 md:mt-0">
            <div className="col-span-4 row-span-2 bg-[#e0dcd3] rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="Featured Work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 bg-[#d64545] rounded-lg"></div>
            <div className="col-span-2 bg-[#2a2a2a] rounded-lg"></div>
            <div className="col-span-3 bg-[#e0dcd3] rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Work Sample"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-3 bg-[#6b6b6b] rounded-lg"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 bg-[#e0dcd3] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">01 / CONCEPT</h2>
            <p className="text-[#6b6b6b]">Bridging the gap between digital and physical realms through innovative design concepts.</p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#2a2a2a] text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">02 / CREATION</h2>
            <p className="text-[#e0dcd3]">Transforming ideas into captivating visual experiences using cutting-edge digital tools.</p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-[#d64545] text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">03 / DELIVERY</h2>
            <p className="text-[#f4f1ec]">Ensuring seamless implementation and presentation of designs across various platforms.</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-bold">LATEST WORKS</h2>
            <p className="text-[#6b6b6b]">Explore my recent projects and collaborations.</p>
            <Button variant="outline" className="border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white">
              View All Projects
            </Button>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[#e0dcd3] rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Project 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square bg-[#e0dcd3] rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Project 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-[#e0dcd3] py-6 text-center text-[#6b6b6b]">
        <p>&copy; 2023 Zephyr Nexus. All rights reserved.</p>
      </footer>
    </div>
  )
}