import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Anexos.scss'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { Input, Select, Table, Pagination } from '../ui'

const COLUMNS = [
  { key: 'empresa', label: 'Empresa', sortable: true, align: 'left' },
  { key: 'departamento', label: 'Departamento', sortable: true, align: 'left' },
  { key: 'trabajador', label: 'Trabajador', sortable: true, align: 'left' },
  { key: 'nroAnexo', label: 'Anexo', sortable: true, width: 120, align: 'left' },
  { key: 'mail', label: 'Mail', sortable: true, align: 'left' },
]

const PAGE_SIZES = [10, 25, 50]

const capitalizeWords = (text) => {
  if (!text) return ''
  return String(text)
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

const Anexos = () => {
  const [anexos, setAnexos] = useState([])
  const [empresaOptions, setEmpresaOptions] = useState([])
  const [departamentoOptions, setDepartamentoOptions] = useState([])
  const [empresa, setEmpresa] = useState('todas')
  const [departamento, setDepartamento] = useState('todos')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [loading, setLoading] = useState(true)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKey = (event) => {
      if (event.metaKey && event.key === 'b') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const fetchAnexos = async () => {
      try {
        const res = await fetch('https://api.verfrut.cl/ApiAuth/GetAnexos')
        const json = await res.json()
        const data = json.result ?? []
        setAnexos(Array.isArray(data) ? data : [])
      } catch (e) {
        // silenciar; la tabla mostrará empty-text
      } finally {
        setLoading(false)
      }
    }
    fetchAnexos()
  }, [])

  useEffect(() => {
    const empresas = Array.from(new Set(anexos.map((a) => a.empresa))).sort()
    const departamentos = Array.from(new Set(anexos.map((a) => a.departamento))).sort()
    setEmpresaOptions(empresas.map((e) => ({ value: e, label: e })))
    setDepartamentoOptions(departamentos.map((d) => ({ value: d, label: d })))
  }, [anexos])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = anexos
    if (empresa !== 'todas' && empresa !== '') list = list.filter((a) => a.empresa === empresa)
    if (departamento !== 'todos' && departamento !== '') list = list.filter((a) => a.departamento === departamento)
    if (q) {
      list = list.filter((a) => {
        const mail = a.mail ? String(a.mail).toLowerCase() : ''
        return (
          String(a.empresa).toLowerCase().includes(q) ||
          String(a.departamento).toLowerCase().includes(q) ||
          String(a.trabajador).toLowerCase().includes(q) ||
          String(a.nroAnexo).toLowerCase().includes(q) ||
          mail.includes(q)
        )
      })
    }
    return list.map((a) => ({
      empresa: a.empresa ?? '',
      departamento: capitalizeWords(a.departamento ?? ''),
      trabajador: capitalizeWords(a.trabajador ?? ''),
      nroAnexo: a.nroAnexo ?? '',
      mail: a.mail ? String(a.mail).toLowerCase() : 'Sin mail',
    }))
  }, [anexos, empresa, departamento, query])

  // Reset a página 1 cuando cambian filtros
  useEffect(() => {
    setPage(1)
  }, [empresa, departamento, query, pageSize])

  const pageRows = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page, pageSize])

  const handlePageChange = ({ page: nextPage, pageSize: nextSize }) => {
    if (nextSize !== pageSize) setPageSize(nextSize)
    setPage(nextPage)
  }

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Anexos" />
      </div>

      <div className="anexos-container">
        <div className="container">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-md-5 col-sm-12">
              <Select
                id="selectempresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value || 'todas')}
                options={[{ value: 'todas', label: 'Todas las empresas' }, ...empresaOptions]}
              />
            </div>

            <div className="col-md-5 col-sm-12">
              <Select
                id="selectdepartamento"
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value || 'todos')}
                options={[{ value: 'todos', label: 'Seleccione Departamento (Todos)' }, ...departamentoOptions]}
              />
            </div>

            <div className="col-md-2 col-sm-12">
              <Input
                id="floatingInput"
                ref={inputRef}
                placeholder="Buscar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="container mt-4 data-grid-container">
          <Table
            columns={COLUMNS}
            data={pageRows}
            loading={loading}
            striped
            resizable
            emptyText="No hay anexos que coincidan con los filtros"
          />

          {filtered.length > pageSize && (
            <div className="d-flex justify-content-end mt-3">
              <Pagination
                page={page}
                total={filtered.length}
                pageSize={pageSize}
                pageSizes={PAGE_SIZES}
                onChange={handlePageChange}
              />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Anexos
