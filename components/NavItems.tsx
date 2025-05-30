import { Link, NavLink, useNavigate } from "react-router"
import { logoutUser } from "~/appwrite/auth"
import { sidebarItems } from "~/constants"
import { cn } from "~/lib/utils"

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Violet",
    email: "violet@brown.com",
    imageUrl: "/images/david.webp",
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };

    return (
        <section className="nav-items">
            <Link to='/' className='link-logo'>
                <img src="/icons/logo.svg" alt="logo" 
                className="size-[30px]"/>
                    <h1>Haven Travel</h1>
            </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map(({ id, href, icon, label}) => (
                        <NavLink to={href} key={id}>
                            {({ isActive }: {isActive: boolean}) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive
                                })} onClick={handleClick}>
                                    <img
                                    src={icon}
                                    alt=""
                                    className={`group-hover:brightness-0 size-0
                                        group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.imageUrl || '/images/david.webp'} alt="" />
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button onClick={handleLogout} className="cursor-pointer">
                        <img src="/icons/logout.svg" alt="" className="size-6"/>
                    </button>
                </footer>
            </div>
        </section>
    )
}
export default NavItems
