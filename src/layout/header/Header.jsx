import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../../../public/vite.svg"
import { User, Search, Heart, ShoppingCart, Menu } from 'lucide-react'
import { Drawer, Button, Empty } from 'antd'
import { useProduct } from '@/api/hooks/useProduct'
import useDebounce from '@/hooks/useDebouns'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const navigate = useNavigate()
  const searchRef = useRef()
  const { getSearchProduct } = useProduct()
  const [value, setValue] = useState("")
  const text = useDebounce(value)
  const { data } = getSearchProduct({ q: text.trim() })

  const handleChange = (e) => {
    setValue(e.target.value)
    setSearchOpen(true)
  }

  const handleOutsideClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <header className="bg-white opacity-90 py-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative">
        <div className="flex items-center gap-2 text-[34px] font-bold">
          <img src={logo} alt="" />
          <NavLink to="/">
            <h2>Furniro</h2>
          </NavLink>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-600 text-lg font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-4 text-gray-700 relative">
          <NavLink to={"*"}>
            <User className="w-5 h-5 cursor-pointer hidden sm:block" />
          </NavLink>
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="w-5 h-5 cursor-pointer hidden sm:block" />
          </button>
          <NavLink to={"/wishlist"}>
            <Heart className="w-5 h-5 cursor-pointer hidden sm:block" />
          </NavLink>
          <NavLink to={"/cart"}>
            <ShoppingCart className="w-5 h-5 cursor-pointer hidden sm:block" />
          </NavLink>
          <div className="sm:hidden">
            <Button
              type="text"
              icon={<Menu className="w-6 h-6" />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col gap-4 text-gray-800 text-lg font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
        <div className="flex gap-4 mt-6 text-gray-700">
          <NavLink to={"*"}><User className="w-5 h-5 cursor-pointer" /></NavLink>
          <button onClick={() => setSearchOpen(true)}><Search className="w-5 h-5 cursor-pointer" /></button>
          <NavLink to={"/wishlist"}><Heart className="w-5 h-5 cursor-pointer" /></NavLink>
          <NavLink to={"/cart"}><ShoppingCart className="w-5 h-5 cursor-pointer" /></NavLink>
        </div>
      </Drawer>

      {searchOpen && (
        <div ref={searchRef} className="absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-md bg-white shadow-xl rounded-md px-4 py-4 z-[100]">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search..."
            autoFocus
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <div className="mt-4 max-h-64 overflow-y-auto">
            {value.trim() && data?.data?.products?.length ? (
              data.data.products.map((item) => (
                <div
                onClick={() => navigate(`/productDetail/${item.id}`)}
                  key={item.id}
                  className="flex items-center gap-3 py-2 px-2 hover:bg-gray-100 rounded transition"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <p className="text-sm text-gray-800">{item.title}</p>
                </div>
              ))
            ) : value.trim() ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={<span className="text-sm">No data found</span>}
                className="mt-4"
              />
            ) : null}
          </div>
        </div>
      )}
    </header>
  )
}

export default React.memo(Header)
