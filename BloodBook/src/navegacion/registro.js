//import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UsuarioServicio from "../servicios/UsuarioServicios";
import { ROLES } from "../utils/Constantes";
import { encryptStorage } from "../utils/Storage";
import Layout from "./Layout";
import Styles from "./css/registro.css";
import { FormLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import swal from "sweetalert";

const Registro = () => {
  let navigate = useNavigate();
  const [mail, setCorreo] = useState();
  const [password, setPassword] = useState();
  var hoy = new Date();

  let register = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9596/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          correo: mail,
          contrasenia: password,
          estatus: true,
          fechaRegistro: hoy,
          fechaVigencia: "2022-10-15",
          rol_id: 2,
        }),
      });
      // alert("El usuario: " + mail + " fue registrado con éxito");
      swal({
        title: "Usuario registrado con éxito!",
        text: "Hola " + mail + ", ya puedes iniciar sesión!",
        icon: "success",
        button: "Aceptar",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout />

      <div className="bod">
        <div className="container2">
          <div className="title4">Registrarse</div>
          <div className="content2">
            <form method="POST" onSubmit={register}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Nombre</span>
                  <input type="text"  required />
                </div>
                <div className="input-box">
                  <span className="details">Apellido</span>
                  <input
                    type="text"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="email" placeholder="@ejemplo.com" required />
                </div>
                <div className="input-box">
                  <span className="details">Teléfono</span>
                  <input type="text"  required />
                </div>
                <div className="input-box">
                  <span className="details">Contraseña</span>
                  <input
                    type="password"
                    required
                  />
                </div>
                
                <div className="input-box">
                <span className="details">Tipo Sanguíneo</span>

                <select name="sangre" id="sangre" >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                </div>
              </div>

              
              <div className="input-box">
                <span className="details">Género</span>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="femenino"
                    control={<Radio />}
                    label="Femenino"
                  />
                  <FormControlLabel
                    value="masculino"
                    control={<Radio />}
                    label="Masculino"
                  />
                  <FormControlLabel
                    value="otro"
                    control={<Radio />}
                    label="Otro"
                  />
                </RadioGroup>
                </div>
                <FormControlLabel control={<Checkbox />} label="Acepto los términos y condiciones." required/>

              <div className="button2">
                <input className="buttons2" type="submit" value="Crear" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;

// {/* <div className="contenedor2">
//         <h1 className="title-1">Registrarse</h1>
//         <div className="content1">
//           <form method="POST" onSubmit={register} className="form2">
//             {/* <TextField
//                   id="standard-basic"
//                   label="Correo Electronico"
//                   variant="standard"
//                   InputLabelProps={{
//                     style: { color: "#fff" },
//                   }}
//                   sx={{
//                     input: {
//                       color: "#fff",
//                       borderColor: "text.primary",
//                     },
//                   }}
//                 /> */}
//             <input
//               type="text"
//               name="nombre"
//               placeholder="Nombre"
//               className="controls2"
//             />

//             <input
//               type="text"
//               name="apellido"
//               placeholder="Apellido"
//               className="controls2"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Correo Electrónico"
//               className="controls2"
//               onChange={(e) => setCorreo(e.target.value)}
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Contraseña"
//               className="controls2"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <FormLabel id="demo-row-radio-buttons-group-label">
//               Género
//             </FormLabel>
//             <RadioGroup
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="row-radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="femenino"
//                 control={<Radio />}
//                 label="Femenino"
//               />
//               <FormControlLabel
//                 value="masculino"
//                 control={<Radio />}
//                 label="Masculino"
//               />
//               <FormControlLabel value="otro" control={<Radio />} label="Otro" />
//             </RadioGroup>

//             <FormLabel id="demo-row-radio-buttons-group-label">
//               Tipo de Sangre
//             </FormLabel>

//             <select name="sangre" id="sangre">
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </select>
//             <div className="boto">
//               <input className="buttons2" type="submit" value="Crear" />
//               <Link to="/login">
//                 <button className="buttons3">Cancelar</button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div> */}
