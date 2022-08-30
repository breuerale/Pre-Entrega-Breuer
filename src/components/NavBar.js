import logo from "../assets/logo.jpg"

const NavBar = () => {
    return (
        <div >
            
            <ul class="menu1">
                <li><a class="nav-link" href="#"><b>Inicio</b></a></li>
                <li><a class="nav-link" href="#"><b>Novedades</b></a></li>
                <li><a class="nav-link" href="#"><b>Contacto</b></a></li>
                <img src={logo} alt="" class="logo"></img>
            </ul>
            <ul class="menu2">
            <li><a class="nav-link" href="#"><b>Ubicacion</b></a></li>
                <li><a class="nav-link" href="#"><b>Productos</b></a></li>
                <li><a class="nav-link" href="#"><b>Nosotras</b></a></li>
            </ul>

            
            
        </div>
    )
}

export default NavBar