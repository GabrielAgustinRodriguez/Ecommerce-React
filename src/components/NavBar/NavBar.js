import bulma from "bulma/css/bulma.css"
import LogoNav from "./imagenes/libros.png";
import Cartwidget from "../Cartwidget/cartwidget"



function NavBar (){


    return(

      <div>
        <nav class="navbar is-light" role="navigation" aria-label="main navigation"> 
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
            <img src="{LogoNav}" width="112" height="28" alt = "logo"/>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Categorias
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Fantasia
                  </a>
                  <a class="navbar-item">
                    Clásicos
                  </a>
                  <a class="navbar-item">
                    Literatura nacional
                  </a>
                  <a class="navbar-item">
                    Politica
                  </a>
                  <a class="navbar-item">
                    Historia
                  </a>
                  <a class="navbar-item">
                    Musica
                  </a>
                  <hr class="navbar-divider"/>
                  <a class="navbar-item">
                    Sorpréndeme
                  </a>
                </div>
              </div>
              <a class="navbar-item">
                Quienes somos
              </a>  
              <a class="navbar-item">
                Contacto
              </a>  
            </div>
            
            <div class="navbar-end">
              <div class="navbar-item">
                <Cartwidget/>   
              </div>
            </div>
          </div>
        </nav>
      </div>

    )
}

export default NavBar 