import React, { useState } from 'react'

const todayISODate = () => {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const ProgramarCitas = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    especialidad: 'General',
    comentarios: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const especialidades = [
    'General',
    'Pediatría',
    'Cardiología',
    'Dermatología',
    'Ginecología',
    'Neurología'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.nombre.trim()) errs.nombre = 'El nombre es obligatorio'
    if (!form.email.trim()) errs.email = 'El email es obligatorio'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email inválido'
    if (!form.fecha) errs.fecha = 'Seleccione una fecha'
    else if (form.fecha < todayISODate()) errs.fecha = 'La fecha no puede ser anterior a hoy'
    if (!form.hora) errs.hora = 'Seleccione una hora'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      // Aquí puedes enviar los datos al servidor o a Firebase
      console.log('Cita creada', form)
      setSubmitted(true)
      // opcional: limpiar formulario
      setForm({ nombre: '', email: '', telefono: '', fecha: '', hora: '', especialidad: 'General', comentarios: '' })
    }
  }

  return (
    <div className="programar-citas">
      <h1>Programar cita</h1>
      <p>Completa el siguiente formulario para agendar tu cita médica.</p>

      {submitted && (
        <div className="alert-success" role="status">Cita agendada correctamente. Revisar tu correo para más detalles.</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Nombre completo*</label>
          <input name="nombre" value={form.nombre} onChange={handleChange} />
          {errors.nombre && <small className="error">{errors.nombre}</small>}
        </div>

        <div>
          <label>Email*</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div>
          <label>Teléfono</label>
          <input name="telefono" value={form.telefono} onChange={handleChange} />
        </div>

        <div>
          <label>Fecha*</label>
          <input name="fecha" type="date" min={todayISODate()} value={form.fecha} onChange={handleChange} />
          {errors.fecha && <small className="error">{errors.fecha}</small>}
        </div>

        <div>
          <label>Hora*</label>
          <input name="hora" type="time" value={form.hora} onChange={handleChange} />
          {errors.hora && <small className="error">{errors.hora}</small>}
        </div>

        <div>
          <label>Especialidad</label>
          <select name="especialidad" value={form.especialidad} onChange={handleChange}>
            {especialidades.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Comentarios</label>
          <textarea name="comentarios" value={form.comentarios} onChange={handleChange} />
        </div>

        <div>
          <button type="submit" className="btn-agendar">Agendar cita</button>
        </div>
      </form>
    </div>
  )
}

export default ProgramarCitas
