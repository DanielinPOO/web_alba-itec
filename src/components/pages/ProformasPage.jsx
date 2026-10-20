import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Proformas.css'

/* ============================================================
   SEED DATA – fallback when running locally without Netlify
   ============================================================ */
const SEED_DATA = [
  {
    id: 'seed-1',
    title: 'Fundición de Piso de Concreto',
    precioBase: 'Q300.00 por metro cuadrado',
    items: [
      { id: 's1-1', descripcion: 'Cemento (Ej. Cemento Progreso)', unidad: 'Saco (42.5 kg)', precioRef: 85, cantidad: 0, subtotal: 0 },
      { id: 's1-2', descripcion: 'Arena de Río (Fina/Gruesa)', unidad: 'Metro Cúbico (m³)', precioRef: 250, cantidad: 0, subtotal: 0 },
      { id: 's1-3', descripcion: 'Piedrín Triturado', unidad: 'Metro Cúbico (m³)', precioRef: 280, cantidad: 0, subtotal: 0 },
      { id: 's1-4', descripcion: 'Electromalla o Hierro de 1/4"', unidad: 'Unidad / Varilla', precioRef: 25, cantidad: 0, subtotal: 0 },
      { id: 's1-5', descripcion: 'Alambre de amarre', unidad: 'Libra', precioRef: 10, cantidad: 0, subtotal: 0 },
      { id: 's1-6', descripcion: 'Nylon negro (para base contra humedad)', unidad: 'Metro / Yarda', precioRef: 8, cantidad: 0, subtotal: 0 },
      { id: 's1-7', descripcion: 'Madera (Reglas o tablas para formaleta)', unidad: 'Unidad', precioRef: 15, cantidad: 0, subtotal: 0 },
      { id: 's1-8', descripcion: 'Flete de materiales (San José Pinula/Fraijanes)', unidad: 'Viaje', precioRef: 0, cantidad: 0, subtotal: 0 },
      { id: 's1-9', descripcion: 'Mano de Obra (Albañil + Ayudante)', unidad: 'Por m²', precioRef: 110, cantidad: 0, subtotal: 0 },
    ],
  },
  {
    id: 'seed-2',
    title: 'Colocación de Piso Cerámico (Interior/Exterior)',
    precioBase: 'Q300.00 por metro cuadrado',
    items: [
      { id: 's2-1', descripcion: 'Piso Cerámico (A elección del cliente)', unidad: 'Metro Cuadrado', precioRef: 92.5, cantidad: 0, subtotal: 0 },
      { id: 's2-2', descripcion: 'Adhesivo Pegamix Original (Gris)', unidad: 'Saco (20 kg)', precioRef: 29.5, cantidad: 0, subtotal: 0 },
      { id: 's2-3', descripcion: 'Sisa / Boquilla para piso', unidad: 'Bolsa (2 kg)', precioRef: 17.5, cantidad: 0, subtotal: 0 },
      { id: 's2-4', descripcion: 'Separadores / Crucetas plásticas', unidad: 'Paquete (100 un.)', precioRef: 15, cantidad: 0, subtotal: 0 },
      { id: 's2-5', descripcion: 'Flete de materiales (San José Pinula/Fraijanes)', unidad: 'Viaje', precioRef: 0, cantidad: 0, subtotal: 0 },
      { id: 's2-6', descripcion: 'Mano de Obra (Instalación y cortes)', unidad: 'Por m²', precioRef: 90, cantidad: 0, subtotal: 0 },
    ],
  },
  {
    id: 'seed-3',
    title: 'Elaboración de Pérgola',
    precioBase: 'Q450.00 por metro cuadrado',
    items: [
      { id: 's3-1', descripcion: 'Madera Tratada (Columnas / Vigas) o Metal', unidad: 'Pie tabla / Unidad', precioRef: 13.5, cantidad: 0, subtotal: 0 },
      { id: 's3-2', descripcion: 'Lámina de Policarbonato (o similar para techo)', unidad: 'Unidad (Plancha)', precioRef: 550, cantidad: 0, subtotal: 0 },
      { id: 's3-3', descripcion: 'Cemento y Arena (para anclaje de columnas)', unidad: 'Saco / Costal', precioRef: 125, cantidad: 0, subtotal: 0 },
      { id: 's3-4', descripcion: 'Tornillería, pernos y fijaciones', unidad: 'Caja / Ciento', precioRef: 50, cantidad: 0, subtotal: 0 },
      { id: 's3-5', descripcion: 'Barniz marino, tinte o pintura anticorrosiva', unidad: 'Galón', precioRef: 200, cantidad: 0, subtotal: 0 },
      { id: 's3-6', descripcion: 'Flete de materiales (San José Pinula/Fraijanes)', unidad: 'Viaje', precioRef: 0, cantidad: 0, subtotal: 0 },
      { id: 's3-7', descripcion: 'Mano de Obra (Fabricación e instalación)', unidad: 'Por m²', precioRef: 165, cantidad: 0, subtotal: 0 },
    ],
  },
  {
    id: 'seed-4',
    title: 'Construcción de Vivienda Obra Gris',
    precioBase: 'Desde Q850.00 por metro cuadrado',
    items: [
      { id: 's4-1', descripcion: 'Block de Concreto (15x20x40 o 14x19x39)', unidad: 'Unidad', precioRef: 5.25, cantidad: 0, subtotal: 0 },
      { id: 's4-2', descripcion: 'Cemento (Ej. Cemento Progreso)', unidad: 'Saco (42.5 kg)', precioRef: 85, cantidad: 0, subtotal: 0 },
      { id: 's4-3', descripcion: 'Arena de Río', unidad: 'Metro Cúbico (m³)', precioRef: 250, cantidad: 0, subtotal: 0 },
      { id: 's4-4', descripcion: 'Piedrín Triturado', unidad: 'Metro Cúbico (m³)', precioRef: 280, cantidad: 0, subtotal: 0 },
      { id: 's4-5', descripcion: 'Hierro Corrugado 3/8" (Para columnas/soleras)', unidad: 'Varilla', precioRef: 40, cantidad: 0, subtotal: 0 },
      { id: 's4-6', descripcion: 'Hierro Corrugado 1/4" (Para estribos)', unidad: 'Varilla', precioRef: 27.5, cantidad: 0, subtotal: 0 },
      { id: 's4-7', descripcion: 'Alambre de amarre', unidad: 'Libra', precioRef: 10, cantidad: 0, subtotal: 0 },
      { id: 's4-8', descripcion: 'Tubería PVC (Drenajes y agua potable)', unidad: 'Tubo (Tramo)', precioRef: 47.5, cantidad: 0, subtotal: 0 },
      { id: 's4-9', descripcion: 'Ductos y cajas para instalaciones eléctricas', unidad: 'Lote / Unidad', precioRef: 0, cantidad: 0, subtotal: 0 },
      { id: 's4-10', descripcion: 'Madera para formaletas y andamios', unidad: 'Lote', precioRef: 0, cantidad: 0, subtotal: 0 },
      { id: 's4-11', descripcion: 'Flete de materiales (San José Pinula/Fraijanes)', unidad: 'Viaje', precioRef: 0, cantidad: 0, subtotal: 0 },
      { id: 's4-12', descripcion: 'Mano de Obra (Zanjeo, fundición, levantado)', unidad: 'Por m²', precioRef: 325, cantidad: 0, subtotal: 0 },
    ],
  },
]

const API_BASE = '/api/proformas'

/* ---- helpers ---- */
const fmt = (n) => `Q ${n.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
let idCounter = Date.now()
const uid = () => `local-${++idCounter}`

/* ============================================================
   PASSWORD MODAL
   ============================================================ */
function PasswordModal({ onUnlock }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pw === '2001') {
      onUnlock()
    } else {
      setError('Contraseña incorrecta')
      setPw('')
      inputRef.current?.focus()
    }
  }

  return (
    <div className="proformas-overlay" id="proformas-password-overlay">
      <form className="proformas-modal" onSubmit={handleSubmit}>
        <span className="proformas-modal__icon">🔐</span>
        <h2 className="proformas-modal__title">Acceso Restringido</h2>
        <p className="proformas-modal__subtitle">Ingresa la contraseña para ver las proformas</p>
        <div className="proformas-modal__input-wrap">
          <input
            ref={inputRef}
            id="proformas-password-input"
            type="password"
            className={`proformas-modal__input ${error ? 'proformas-modal__input--error' : ''}`}
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError('') }}
            placeholder="••••"
            autoComplete="off"
          />
        </div>
        <p className="proformas-modal__error">{error}</p>
        <button type="submit" className="proformas-modal__btn" id="proformas-password-submit">
          Ingresar
        </button>
      </form>
    </div>
  )
}

/* ============================================================
   TOAST
   ============================================================ */
function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className={`proformas-toast proformas-toast--${type}`}>
      {type === 'success' ? '✅' : '❌'} {message}
    </div>
  )
}

/* ============================================================
   PROFORMA CARD
   ============================================================ */
function ProformaCard({ proforma, index, onUpdate, onDelete }) {
  const [editingTitle, setEditingTitle] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  /* ---- item field change ---- */
  const handleItemChange = (itemId, field, value) => {
    const updatedItems = proforma.items.map(item => {
      if (item.id !== itemId) return item
      const updated = { ...item, [field]: field === 'descripcion' || field === 'unidad' ? value : Number(value) || 0 }
      updated.subtotal = updated.precioRef * updated.cantidad
      return updated
    })
    onUpdate({ ...proforma, items: updatedItems })
  }

  /* ---- add row ---- */
  const addRow = () => {
    const newItem = { id: uid(), descripcion: '', unidad: '', precioRef: 0, cantidad: 0, subtotal: 0 }
    onUpdate({ ...proforma, items: [...proforma.items, newItem] })
  }

  /* ---- delete row ---- */
  const deleteRow = (itemId) => {
    onUpdate({ ...proforma, items: proforma.items.filter(i => i.id !== itemId) })
  }

  /* ---- totals ---- */
  const total = proforma.items.reduce((sum, it) => sum + (it.subtotal || 0), 0)

  return (
    <div className="proforma-card" id={`proforma-card-${proforma.id}`}>
      <div className="proforma-card__inner">
        {/* Header */}
        <div className="proforma-card__header">
          <div className="proforma-card__title-group">
            <div className="proforma-card__number">Proforma #{index + 1}</div>
            {editingTitle ? (
              <input
                className="proforma-card__title-input"
                value={proforma.title}
                onChange={(e) => onUpdate({ ...proforma, title: e.target.value })}
                onBlur={() => setEditingTitle(false)}
                onKeyDown={(e) => e.key === 'Enter' && setEditingTitle(false)}
                autoFocus
              />
            ) : (
              <h3
                className="proforma-card__title"
                onDoubleClick={() => setEditingTitle(true)}
                title="Doble clic para editar"
                style={{ cursor: 'pointer' }}
              >
                📋 {proforma.title}
              </h3>
            )}
          </div>
          <div className="proforma-card__badge">💰 {proforma.precioBase}</div>
          <div className="proforma-card__header-actions">
            {!confirmDelete ? (
              <button
                className="proforma-btn proforma-btn--danger"
                onClick={() => setConfirmDelete(true)}
                title="Eliminar proforma"
              >
                🗑️
              </button>
            ) : (
              <div className="proforma-delete-confirm">
                <span>¿Eliminar?</span>
                <button className="proforma-btn proforma-btn--danger" onClick={() => onDelete(proforma.id)}>
                  Sí
                </button>
                <button className="proforma-btn proforma-btn--ghost" onClick={() => setConfirmDelete(false)}>
                  No
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="proforma-table-wrap">
          <table className="proforma-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>#</th>
                <th>Descripción</th>
                <th>Unidad</th>
                <th style={{ width: '120px' }}>Precio Ref.</th>
                <th style={{ width: '100px' }}>Cantidad</th>
                <th style={{ width: '120px', textAlign: 'right' }}>Subtotal</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {proforma.items.map((item, i) => (
                <tr key={item.id}>
                  <td style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{i + 1}</td>
                  <td>
                    <input
                      className="proforma-input proforma-input--desc"
                      value={item.descripcion}
                      onChange={(e) => handleItemChange(item.id, 'descripcion', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="proforma-input proforma-input--unit"
                      value={item.unidad}
                      onChange={(e) => handleItemChange(item.id, 'unidad', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="proforma-input proforma-input--number"
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.precioRef || ''}
                      onChange={(e) => handleItemChange(item.id, 'precioRef', e.target.value)}
                      placeholder="0.00"
                    />
                  </td>
                  <td>
                    <input
                      className="proforma-input proforma-input--number"
                      type="number"
                      step="1"
                      min="0"
                      value={item.cantidad || ''}
                      onChange={(e) => handleItemChange(item.id, 'cantidad', e.target.value)}
                      placeholder="0"
                    />
                  </td>
                  <td className={`proforma-subtotal ${item.subtotal === 0 ? 'proforma-subtotal--zero' : ''}`}>
                    {fmt(item.subtotal || 0)}
                  </td>
                  <td>
                    <button
                      className="proforma-btn proforma-btn--danger proforma-row-delete"
                      onClick={() => deleteRow(item.id)}
                      title="Eliminar línea"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="proforma-table__total-row">
                <td colSpan={5} className="proforma-table__total-label">TOTAL PRESUPUESTADO</td>
                <td className="proforma-table__total-value" style={{ textAlign: 'right' }}>{fmt(total)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="proforma-card__footer">
          <button className="proforma-btn proforma-btn--ghost" onClick={addRow} id={`add-row-${proforma.id}`}>
            ➕ Agregar línea
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   MAIN PROFORMAS PAGE
   ============================================================ */
export default function ProformasPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [proformas, setProformas] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)
  const [apiAvailable, setApiAvailable] = useState(null) // null = unknown, true/false

  /* ---- Fetch proformas ---- */
  const fetchProformas = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(API_BASE)
      if (!res.ok) {
        const errText = await res.text()
        throw new Error(`HTTP ${res.status}: ${errText}`)
      }
      const data = await res.json()
      setProformas(data)
      setApiAvailable(true)
      console.info('✅ API conectada — datos del servidor cargados')
    } catch (err) {
      // Fallback to local seed data when not on Netlify
      console.warn('⚠️ API no disponible, usando localStorage:', err.message)
      const stored = localStorage.getItem('albaitec_proformas')
      if (stored) {
        setProformas(JSON.parse(stored))
      } else {
        setProformas(SEED_DATA)
        localStorage.setItem('albaitec_proformas', JSON.stringify(SEED_DATA))
      }
      setApiAvailable(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authenticated) fetchProformas()
  }, [authenticated, fetchProformas])

  /* ---- Save all (bulk) ---- */
  const saveAll = async () => {
    setSaving(true)
    try {
      if (!apiAvailable) {
        localStorage.setItem('albaitec_proformas', JSON.stringify(proformas))
        setToast({ message: 'Guardado localmente (API no disponible)', type: 'success' })
        return
      }

      // Use the bulk save-all endpoint
      const res = await fetch(`${API_BASE}/save-all`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proformas),
      })

      if (!res.ok) {
        const errData = await res.text()
        throw new Error(`HTTP ${res.status}: ${errData}`)
      }

      const result = await res.json()
      setToast({ message: `✅ ${result.count} proformas guardadas en servidor`, type: 'success' })
    } catch (err) {
      console.error('Error saving:', err)
      setToast({ message: `Error: ${err.message}`, type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  /* ---- Update proforma locally ---- */
  const updateProforma = (updated) => {
    setProformas(prev => prev.map(p => p.id === updated.id ? updated : p))
  }

  /* ---- Delete proforma ---- */
  const deleteProforma = async (id) => {
    try {
      if (apiAvailable) {
        const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' })
        if (!res.ok) {
          const errData = await res.text()
          throw new Error(`HTTP ${res.status}: ${errData}`)
        }
      }
      const updated = proformas.filter(p => p.id !== id)
      setProformas(updated)
      if (!apiAvailable) {
        localStorage.setItem('albaitec_proformas', JSON.stringify(updated))
      }
      setToast({ message: 'Proforma eliminada', type: 'success' })
    } catch (err) {
      console.error('Error deleting:', err)
      setToast({ message: `Error al eliminar: ${err.message}`, type: 'error' })
    }
  }

  /* ---- Add new proforma ---- */
  const addProforma = async () => {
    const newProforma = {
      id: uid(),
      title: 'Nueva Proforma',
      precioBase: 'Q0.00 por metro cuadrado',
      items: [
        { id: uid(), descripcion: '', unidad: '', precioRef: 0, cantidad: 0, subtotal: 0 },
      ],
    }
    try {
      if (apiAvailable) {
        const res = await fetch(API_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProforma),
        })
        if (!res.ok) {
          const errData = await res.text()
          throw new Error(`HTTP ${res.status}: ${errData}`)
        }
        const created = await res.json()
        setProformas(prev => [...prev, created])
      } else {
        const updated = [...proformas, newProforma]
        setProformas(updated)
        localStorage.setItem('albaitec_proformas', JSON.stringify(updated))
      }
      setToast({ message: 'Proforma creada', type: 'success' })
    } catch (err) {
      console.error('Error creating:', err)
      setToast({ message: `Error al crear: ${err.message}`, type: 'error' })
    }
  }

  /* ---- Render ---- */
  if (!authenticated) {
    return <PasswordModal onUnlock={() => setAuthenticated(true)} />
  }

  if (loading) {
    return (
      <div className="proformas-page">
        <div className="proformas-loading">
          <div className="proformas-spinner" />
          <p style={{ color: 'var(--color-text-muted)' }}>Cargando proformas…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="proformas-page">
      {/* Header */}
      <header className="proformas-page__header">
        <h1 className="proformas-page__title">Proformas Albañitec</h1>
        <p className="proformas-page__desc">
          Gestión de presupuestos y materiales · {proformas.length} proformas
          {apiAvailable === false && (
            <span style={{ color: '#FF9800' }}> · ⚠️ Modo local (los cambios no se sincronizan)</span>
          )}
          {apiAvailable === true && (
            <span style={{ color: '#22C55E' }}> · 🟢 Conectado al servidor</span>
          )}
        </p>
      </header>

      {/* Actions */}
      <div className="proformas-page__actions">
        <Link to="/" className="proformas-page__back-link">
          ← Volver al inicio
        </Link>
        <button className="proforma-btn proforma-btn--primary proforma-btn--add-proforma" onClick={addProforma}>
          ➕ Nueva Proforma
        </button>
        <button
          className="proforma-btn proforma-btn--save"
          onClick={saveAll}
          disabled={saving}
          id="save-all-proformas"
        >
          {saving ? '⏳ Guardando…' : '💾 Guardar Todo'}
        </button>
      </div>

      {/* Proforma Cards */}
      {proformas.map((p, i) => (
        <ProformaCard
          key={p.id}
          proforma={p}
          index={i}
          onUpdate={updateProforma}
          onDelete={deleteProforma}
        />
      ))}

      {proformas.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--color-text-muted)' }}>
          <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</p>
          <p>No hay proformas. Crea la primera.</p>
        </div>
      )}

      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
