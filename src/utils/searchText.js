// ========= Normalización y Sinónimos =========
// Utilidades compartidas por Videos, Guías, Glosario y el Buscador global.
export function normalize(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export const SYN = {
  erp: ["sistema", "empresarial", "gestion", "gestión"],
  dte: ["factura", "boleta", "xml", "sii", "documento tributario"],
  vacaciones: ["feriado", "permiso"],
  rendiciones: ["gastos", "viaticos", "viáticos", "reembolso", "rendir"],
  firmas: ["firma", "firma digital", "firma electronica", "signature", "sign"],
  svg: ["vector", "gráfico", "grafico"],
  orden: ["oc", "orden de compra", "purchase order"],
  trazabilidad: ["flujo", "relaciones", "vínculos", "tracking"],
  recepcion: ["recepción", "ingreso", "entrada"],
  vpn: ["forticlient", "red", "remoto"],
  clave: ["contraseña", "password"],
  ticket: ["incidencia", "glpi", "soporte"],
};

export function expandQuery(q) {
  const tokens = normalize(q).split(/\s+/).filter(Boolean);
  const out = new Set(tokens);
  for (const t of tokens) {
    if (SYN[t]) for (const s of SYN[t]) out.add(normalize(s));
  }
  return Array.from(out).join(" ");
}
