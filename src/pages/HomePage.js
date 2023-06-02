import React from "react";
import avion from './img/home/img01.jpg'

const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="homeimg">
                <img src={avion} alt="Avion" />
            </div>
                <div className="columnas">
                    <div className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                            ipsam delectus! Iusto perferendis tenetur a doloribus repellendus
                            provident at dicta expedita suscipit. Eligendi, accusamus quis,
                            consequuntur aut necessitatibus voluptates fugit alias quaerat
                            debitis labore doloribus eum. Ad, voluptas debitis corporis fugit
                            numquam voluptatum iusto aspernatur dolorem cum ea similique
                            maiores.
                        </p>
                    </div>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
        </main>
    );
}

export default HomePage;