import React from "react";
import juanGomez from './img/nosotros/nosotros1.jpg'

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
              <img src={juanGomez} alt="Juan Gomez" />
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
          </div>
        </div>
      </main>
    );
}

export default NosotrosPage;