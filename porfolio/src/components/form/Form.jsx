import './Form.css'
import { useForm } from '@formspree/react';
import { FormattedMessage } from 'react-intl';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';


const Form = () => {
    const [state, formSubmit] = useForm("mjvqdvrj");

    const { handleChange, handleBlur, values, errors, touched, handleSubmit: formikHandleSubmit } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            telefono: "",
            textarea: ""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar un nombre"),
            email: Yup.string().email("Formato del email inválido").required('Campo obligatorio'),
            telefono: Yup.string().min(6, "El numero debe tener al menos 6 caracteres"),
            textarea: Yup.string()
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const result = await formSubmit(values);

                if (result && result.error) {
                    Swal.fire('Error', 'Hubo un problema al enviar el mensaje', 'error');
                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tu mensaje fue enviado con exito",
                        showConfirmButton: false,
                        color: "purple",
                        timer: 1500
                    });
                }
            } catch (error) {
                Swal.fire('Error', 'Hubo un problema al enviar el mensaje', 'error');
            }

            setSubmitting(false);
        }
    });


    return (
        <div className='form'>
            <form className='form-container' onSubmit={formikHandleSubmit}>
                <div className="form__group field">
                    <input
                        type="text"
                        className="form__field"
                        placeholder="Nombre"
                        name='nombre'
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="nombre" className="form__label"><FormattedMessage id='contact.form.1' defaultMessage="Nombre" /> </label>
                    {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                </div>
                <div className="form__group field">
                    <input
                        type="text"
                        className="form__field"
                        placeholder="Email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="email" className="form__label"><FormattedMessage id='contact.form.2' defaultMessage="Email" /></label>
                    {touched.email && errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form__group field">
                    <input
                        type="text"
                        className="form__field"
                        placeholder="Teléfono"
                        name='telefono'
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="telefono" className="form__label"><FormattedMessage id='contact.form.3' defaultMessage="Tu numero de telefono" /></label>
                    {touched.telefono && errors.telefono && <div className="error">{errors.telefono}</div>}
                </div>
                <div className="form__group field">
                    <textarea
                        className="form__field textarea"
                        placeholder="Textarea"
                        name='textarea'
                        value={values.textarea}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="4" cols="50"
                    />
                    <label htmlFor="textarea" className="form__label"><FormattedMessage id='contact.form.4' defaultMessage="Cómo puedo ayudarte" /></label>
                    {touched.textarea && errors.textarea && <div className="error">{errors.textarea}</div>}
                </div>
                <div className='submit'>
                    <button type='submit'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <p>Enviar Mensaje</p>
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
