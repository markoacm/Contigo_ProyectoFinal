import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/formulario.css";

export const User_register = () => {
    const  [ data, setData ] = useState({})
    const [ success, setSuccess ] = useState(false);
	const [ nombreONG, setNombreONG] = useState();
	const [ nombreUsuario, setNombreUsuario] = useState();

	const handleChange = (event) => {
		setData({...data, [event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data);

		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 
				'Content-Type': 'application/json'
			}
		}

        fetch("https://julitar-cautious-space-funicular-j6x7xvqggvrcp47x-3001.preview.app.github.dev/api/user_registration", config)
		.then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            return res.json();
        })
        .then(response => {
            console.log('Exito:', response);
            setSuccess(true);
			setNombreONG(response.ONG)
			setNombreUsuario(response.nombre)
        })
		.catch(error => console.error('Error:', error))

        }
	

    return (

        <>

            { success ? (
                <div> 
                    <p>¡Registro realizado con éxito {nombreUsuario}!</p>
					<h2>{nombreONG}</h2>
                </div>
            ) : (
			
			<div className="container-fluid">
        		<h2 className="subtitulo col-8 m-auto py-4"> Registro de usuario </h2>
				
				<div className="card col-8 m-auto">
					<div className="card-body">
						<form className="row" onSubmit={handleSubmit}>
							
								<div className="col-md-6 my-2">
									<label htmlFor="nombre" className="form-label">Nombre</label>
									<input type="text" className="form-control" id="nombre" name="nombre" placeholder="Escribe tu nombre" onChange={handleChange} />
								</div>
								<div className="col-md-6 my-2">
									<label htmlFor="apellido" className="form-label">Apellidos</label>
									<input type="text" className="form-control" id="apellido" name="apellido" placeholder="Escribe tus apellidos" onChange={handleChange} />
								</div>
								<div className="col-md-6 my-2">
									<label htmlFor="password" className="form-label">Contraseña</label>
									<input type="password" className="form-control" id="password" name="password" placeholder="Escribe tu contraseña" onChange={handleChange}/>
								</div>
								<div className="col-md-6 my-2">
									<label htmlFor="email" className="form-label">Email</label>
									<input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@email.com" onChange={handleChange}/>
								</div>
								<div className="col-md-4 my-2">
									<label htmlFor="codigo_ong" className="form-label">Código ONG</label>
									<input type="text" className="form-control" id="codigo_ong" name="codigo_ong" placeholder="Código ONG *" onChange={handleChange}/>
								</div>
								<div className="col-md-8 smallText">
									<p>* Por favor, ingresa aquí el código que se proporcionó al registrar la ONG en la plataforma. Si aún no se ha registrado la ONG en la que trabajas, realiza ese paso antes de continuar.</p>
								</div>
						</form>
					</div>
						<div class="col-md-12 card-footer text-body-secondary gap-2 d-flex justify-content-end">
							<Link to="/"><button type="button" className="btn secundario">Cancelar</button></Link>
							<button type="submit" className="btn primario" onClick={handleSubmit}>Crear Usuario</button>
						</div>

				</div>
			</div>
            )};

			
    		</>
	);
}