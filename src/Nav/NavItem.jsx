import { useLocation } from 'react-router-dom';

export default function NavItem({ href, children }) {
  const location = useLocation();

  const isActive = location.pathname.toLowerCase() === href.toLowerCase();

  return (
    <li>
      <a
        href={href}
        className={`block min-w-40 py-2.5 rounded-md font-black text-center ${
          isActive ? 'bg-sky-500 text-white' : 'bg-slate-100'
        }`}
      >
        {children}
      </a>
    </li>
  );
}
