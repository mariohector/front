import React from "react";
import gerenteGeneral from './img/nosotros/nosotros1.jpg'
import directorGeneral from './img/nosotros/nosotros2.jpg'
import gerenteVentas from './img/nosotros/nosotros3.jpg'
import gerenteProduccion from './img/nosotros/nosotros4.jpg'
import directorFinanciero from './img/nosotros/nosotros5.jpg'
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
      <main className="holder">
        <div className="historia">
          <h2>Historia</h2>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            ipsam delectus! Iusto perferendis tenetur a doloribus repellendus
            provident at dicta expedita suscipit. Eligendi, accusamus quis,
            consequuntur aut necessitatibus voluptates fugit alias quaerat
            debitis labore doloribus eum. Ad, voluptas debitis corporis fugit
            numquam voluptatum iusto aspernatur dolorem cum ea similique
            maiores.
          </p>
        </div>
        <div className="staff">
          <h2>Staff</h2>
          <div className="personas">
            <div className="persona">
              <img src={gerenteGeneral} alt="Juan Gomez" />
              <h5>Juan Gomez</h5>
              <h6>Gerente General</h6>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                ipsam delectus! Iusto perferendis tenetur a doloribus
                repellendus provident at dicta expedita suscipit. Eligendi,
                accusamus quis, consequuntur aut necessitatibus voluptates fugit
                alias quaerat debitis labore doloribus eum. Ad, voluptas debitis
                corporis fugit numquam voluptatum iusto aspernatur dolorem cum
                ea similique maiores.
              </p>
            </div>
            <div className="persona">
              <img src={directorGeneral} alt="Sofia Garcia" />
              <h5>Sofia Garcia</h5>
              <h6>Directora General</h6>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                ipsam delectus! Iusto perferendis tenetur a doloribus
                repellendus provident at dicta expedita suscipit. Eligendi,
                accusamus quis, consequuntur aut necessitatibus voluptates fugit
                alias quaerat debitis labore doloribus eum. Ad, voluptas debitis
                corporis fugit numquam voluptatum iusto aspernatur dolorem cum
                ea similique maiores.
              </p>
            </div>
            <div className="persona">
              <img src={gerenteVentas} alt="Juan Perez" />
              <h5>Juan Perez</h5>
              <h6>Gerente Ventas</h6>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                ipsam delectus! Iusto perferendis tenetur a doloribus
                repellendus provident at dicta expedita suscipit. Eligendi,
                accusamus quis, consequuntur aut necessitatibus voluptates fugit
                alias quaerat debitis labore doloribus eum. Ad, voluptas debitis
                corporis fugit numquam voluptatum iusto aspernatur dolorem cum
                ea similique maiores.
              </p>
            </div> 
            <div className="persona">
              <img src={gerenteProduccion} alt="Alberto Krause" />
              <h5>Alberto Krause</h5>
              <h6>Gerente Producción</h6>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                ipsam delectus! Iusto perferendis tenetur a doloribus
                repellendus provident at dicta expedita suscipit. Eligendi,
                accusamus quis, consequuntur aut necessitatibus voluptates fugit
                alias quaerat debitis labore doloribus eum. Ad, voluptas debitis
                corporis fugit numquam voluptatum iusto aspernatur dolorem cum
                ea similique maiores.
              </p>
            </div>
            <div className="persona">
              <img src={directorFinanciero} alt="Elias Jossef" />
              <h5>Elías Jossef</h5>
              <h6>Director Financiero</h6>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                ipsam delectus! Iusto perferendis tenetur a doloribus
                repellendus provident at dicta expedita suscipit. Eligendi,
                accusamus quis, consequuntur aut necessitatibus voluptates fugit
                alias quaerat debitis labore doloribus eum. Ad, voluptas debitis
                corporis fugit numquam voluptatum iusto aspernatur dolorem cum
                ea similique maiores.
              </p>
            </div>                                   
          </div>
        </div>
      </main>
    );
}

export default NosotrosPage;