<?php include __DIR__ . '/partials/header.php'; ?>

<!-- contat us -->
<section class="page-section" id="contact-us"></section>



<div class="pt-5 container px-4 px-lg5 d-flex justify-content-center">
    <!-- description -->
    <div class="col-lg-8 col-xl-6 text-center ">
        <h2 class="mt-0 fw-bold">Haz tu reserva</h2>
        <hr class="divider" />
        <p class="text-muted mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque voluptate in sed culpa facilis aliquid dolorum unde, consequatur quos exercitationem tenetur ut non ipsa rem sapiente harum distinctio est.</p>
    </div>
</div>
<!-- Form -->
<div class="row gx-0 gx-lg-0 justify-content-center mb-2 mx-1 pb-5">
    <div class=" shadow-lg  col-xll-3 col-xl-6 col-lg-8 px-4 py-3 px-sm-5 rounded-3">
        <form id="formulario" action="https://formspree.io/f/xqkwjage" method="POST">

            <!-- Seleccion motivo -->
            <div class="mb-3 mt-4" id="grupo_select">
                <label class="form-label ">Seleccione el servicio</label>
                <select name="select" id="select-id" class="item-formulario form-select">
                    <option selected>Seleccionar</option>
                    <option> Celebración de cumpleaños </option>
                    <option> Aniversarios </option>
                    <option> Fiestas infantiles </option>
                    <option> Declaraciones o propuestas </option>
                    <option> Despedidas </option>
                    <option> Cena con amigos </option>
                    <option> Otro </option>
                </select>
                <p class="msg__input-error">*Seleccione un servicio</p>
            </div>

            <!--  Asunto -->
            <div class="form-floating mb-3 mt-3" id="grupo_asunto">
                <input name="asunto" type="text" class="validated item-formulario form-control form_input" id="floatingInput" placeholder="asunto">
                <label class="form_label">Asunto</label>
                <p class="msg__input-error">*Por favor escriba el asunto</p>
                <p class="msg2__input-error">El asunto debe contener de 4 a 40 caracteres y solo puede contener numeros, letras y guion bajo</p>
            </div>

            <!-- Nombre completo -->
            <div class="form-floating mb-3" id="grupo_nombre">
                <input name="nombre" type="text" class="item-formulario form-control" id="floatingInput" placeholder="nombre completo">
                <label class="form_label">Nombre completo</label>
                <p class="msg__input-error">*Por favor escriba el nombre</p>
                <p class="msg2__input-error">El nombre debe contener de 4 a 50 caracteres y solo puede contener numeros, letras y guion bajo</p>
            </div>


            <!-- Correo electronico -->
            <div class="form-floating mb-3" id="grupo_correo">
                <input type="email" name="correo" class="item-formulario form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com">
                <label for="floatingInput" class="form_label">Correo electrónico</label>
                <p class="msg__input-error">*Ingrese un correo electrónico válido</p>
            </div>

            <!-- Numero celular -->
            <div class="form-floating mb-3" id="grupo_celu">
                <input type="text" name="celu" class="item-formulario form-control" id="exampleInputCell" aria-describedby="emailHelp" placeholder="1234567890">
                <label for="floatingInput" class="form_label">Numero celular</label>
                <p class="msg__input-error">*Ingrese un numero de celular válido</p>
            </div>

            <!-- Personas -->
            <div class="form mb-3" id="grupo_numerop">
                <label for="floatingInput" class="form_label">Numero de personas</label>
                <input type="number" value= 1 min=1 name="numerop" class="item-formulario form-control" id="exampleInputPerson"  >                
                <p class="msg__input-error">*Ingrese un numero de personas valido</p>
            </div>

            <!-- Fecha  -->
            <div class="form mb-3" id="grupo_fecha">
                <label for="floatingInput" class="form_label">Seleccione la fecha</label>
                <input onfocus="this.min=new Date().toISOString().split('T')[0]"  type="date" value="datetime-local"  name="fecha"  class="item-formulario form-control mb-2  " id="exampleInputFecha" >                
                <p class="msg__input-error">*Ingrese una fecha valida</p>

            </div>

            <!-- Hora  -->
            <div class="form mb-3" id="grupo_hora">
                <label for="floatingInput" class="form_label">Seleccione la hora</label>
                <input type="time"  name="hora" min="13:00" max="23:00"  class="item-formulario form-control" id="exampleInputHora" >                
                <p class="msg__input-error">*Ingrese una hora válida</p>
                <p class="msg2__input-error">*Ingrese una hora posterior a las 13:00 y anterior a las 23:00</p>
            </div>

            <!-- Descripcion -->
            <div class="form mb-3" id="grupo_descripcion">
                <label for="floatingInput" class="form_label">Descripción</label>
                <textarea name="descripcion" class="item-formulario form-control" id="descripcion-id" rows="3" placeholder="Expliquenos el motivo de su contacto"></textarea>
                <p class="msg__input-error">*Por favor escriba una breve descripcion</p>
                <p class="msg2__input-error">La descripcion no debe sobrepasar los 500 caracteres</p>
            </div>

            <!-- checkbox -->
            <div class="mb-3 form-check" id="grupo_check">
                <label class="form-check-label" for="exampleCheck1">Acepto términos y condiciones</label>
                <input name="check" type="checkbox" class="item-formulario form-check-input" id="check-id">
                <p class="msg__input-error">*Por favor acepte términos y condiciones</p>
            </div>


            <!-- Boton enviar -->
            <button id="button-id" type="submit" class="botones mb-3" style="border-color:rgb(196,60,60); background-color:rgb(196,60,60);">Enviar</button>
        </form>

        <!-- Iconos de los alerts -->
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </symbol>
        </svg>


        <!-- Alerts -->
        <div class="d-none alert alert-danger d-flex align-items-center" id="alert-notok" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                <use xlink:href="#exclamation-triangle-fill" />
            </svg>
            <div>
                Error: No se ha enviado su mensaje
            </div>
        </div>

        <div class="d-none alert alert-success d-flex align-items-center" id="alert-ok" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                <use xlink:href="#check-circle-fill" />
            </svg>
            <div>
                Enviado con exito!!
            </div>
        </div>


    </div>

</div>
</div>

</section>

</div>



<?php include __DIR__ . '/partials/footer.php'; ?>