import React, {useState} from 'react'
import { Link } from 'react-router-dom'

 const  menuItems = [
 {
    title: 'Inicio',
    to: '/',
 },
 {
    title: 'Nosotros',
    to: '/nosotros',
     card: {
      title: 'Quienes somos',
      description: 'Consulta todos los servicios que ofrecemos.',
       links: [
        { label: "Desarrollo Web", href: "/servicios/web" },
        { label: "Consultoría", href: "/servicios/consultoria" },
        { label: "Soporte Técnico", href: "/servicios/soporte" },
      ],
    }
 },
 {
    title: 'Servicios',
    to: '/servicios',
 },
  {
    title: 'Contacto',
    to: '/contacto',
 }  ]

export const NavBar = () => {
    const[activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <nav className="bg-gray-200 h-14  relative">
            <div className='flex  items-center justify-between h-full mx-auto px-4 max-w-7xl'>   
                <img src="https://github.com/Jhoskx/Resource/blob/main/joy.png?raw=truels" alt="Logo" className='h-16 w-16 ' />
                <div className='flex space-x-6'>
                    {menuItems.map((item,index) => (

                        <div key={index}  className='relative'
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        >
                            <Link to={item.to} className='block px-6 py-4 hover:text-yellow-50 relative z-20' > 
                            {item.title}
                            </Link>


                            {item.card && activeIndex== index && (
                                <div className='absolute left-0 top-full  w-72 p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out opacity-100 translate-y-0 z-30'>
                                    <h3 className='font-bold text-gray-800 mb-2'> {item.card.title}</h3>
                                    <p className='text-gray-600 text-sm mb-2'> {item.card.description} </p>
                                    <ul className='text-sm space-y-1 '>
                                        {item.card.links.map((link,i)=>
                                        <li key={i}>
                                            <Link to={link.href} className='text-blue-600 hover:underline'>
                                                {link.label}
                                            </Link>
                                        </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}                </div>
                <Link to="/login" className="bg-black text-white px-4  py-2 hover:opacity-85 rounded">Login</Link>

            </div>

        </nav>
    )
}
