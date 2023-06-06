import React from "react";
import'../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return(
        <main className='holder contacto'>
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefo">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>Tambien puede contactarse con nosotros usando
                    los siguientes medios</p>
                    <ul>
                        <li>Teléfono: 43242388</li>
                        <li>email: contacto@transportesx.com.ar</li>
                        <li>Facebook</li>
                        <li>Twiter</li>
                        <li>Skype</li>
                    </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
