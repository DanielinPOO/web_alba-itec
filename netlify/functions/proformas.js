// netlify/functions/proformas.js
// Netlify serverless function – CRUD for proformas
// Uses Netlify Blobs for persistent storage

import { getStore } from "@netlify/blobs";

const STORE_NAME = "proformas";
const BLOB_KEY   = "all_proformas";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
};

const json = (statusCode, body) => ({
  statusCode,
  headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

/* ---------- helpers ---------- */
async function loadProformas(store) {
  const raw = await store.get(BLOB_KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

async function saveProformas(store, data) {
  await store.set(BLOB_KEY, JSON.stringify(data));
}

/* ---------- seed data (from proformas_alba_itec.md) ---------- */
function getSeedData() {
  return [
    {
      id: crypto.randomUUID(),
      title: "Fundición de Piso de Concreto",
      precioBase: "Q300.00 por metro cuadrado",
      items: [
        { id: crypto.randomUUID(), descripcion: "Cemento (Ej. Cemento Progreso)", unidad: "Saco (42.5 kg)", precioRef: 85, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Arena de Río (Fina/Gruesa)", unidad: "Metro Cúbico (m³)", precioRef: 250, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Piedrín Triturado", unidad: "Metro Cúbico (m³)", precioRef: 280, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Electromalla o Hierro de 1/4\"", unidad: "Unidad / Varilla", precioRef: 25, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Alambre de amarre", unidad: "Libra", precioRef: 10, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Nylon negro (para base contra humedad)", unidad: "Metro / Yarda", precioRef: 8, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Madera (Reglas o tablas para formaleta)", unidad: "Unidad", precioRef: 15, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Flete de materiales (San José Pinula/Fraijanes)", unidad: "Viaje", precioRef: 0, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Mano de Obra (Albañil + Ayudante)", unidad: "Por m²", precioRef: 110, cantidad: 0, subtotal: 0 },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Colocación de Piso Cerámico (Interior/Exterior)",
      precioBase: "Q300.00 por metro cuadrado",
      items: [
        { id: crypto.randomUUID(), descripcion: "Piso Cerámico (A elección del cliente)", unidad: "Metro Cuadrado", precioRef: 92.5, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Adhesivo Pegamix Original (Gris)", unidad: "Saco (20 kg)", precioRef: 29.5, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Sisa / Boquilla para piso", unidad: "Bolsa (2 kg)", precioRef: 17.5, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Separadores / Crucetas plásticas", unidad: "Paquete (100 un.)", precioRef: 15, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Flete de materiales (San José Pinula/Fraijanes)", unidad: "Viaje", precioRef: 0, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Mano de Obra (Instalación y cortes)", unidad: "Por m²", precioRef: 90, cantidad: 0, subtotal: 0 },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Elaboración de Pérgola",
      precioBase: "Q450.00 por metro cuadrado",
      items: [
        { id: crypto.randomUUID(), descripcion: "Madera Tratada (Columnas / Vigas) o Metal", unidad: "Pie tabla / Unidad", precioRef: 13.5, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Lámina de Policarbonato (o similar para techo)", unidad: "Unidad (Plancha)", precioRef: 550, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Cemento y Arena (para anclaje de columnas)", unidad: "Saco / Costal", precioRef: 125, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Tornillería, pernos y fijaciones", unidad: "Caja / Ciento", precioRef: 50, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Barniz marino, tinte o pintura anticorrosiva", unidad: "Galón", precioRef: 200, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Flete de materiales (San José Pinula/Fraijanes)", unidad: "Viaje", precioRef: 0, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Mano de Obra (Fabricación e instalación)", unidad: "Por m²", precioRef: 165, cantidad: 0, subtotal: 0 },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Construcción de Vivienda Obra Gris",
      precioBase: "Desde Q850.00 por metro cuadrado",
      items: [
        { id: crypto.randomUUID(), descripcion: "Block de Concreto (15x20x40 o 14x19x39)", unidad: "Unidad", precioRef: 5.25, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Cemento (Ej. Cemento Progreso)", unidad: "Saco (42.5 kg)", precioRef: 85, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Arena de Río", unidad: "Metro Cúbico (m³)", precioRef: 250, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Piedrín Triturado", unidad: "Metro Cúbico (m³)", precioRef: 280, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Hierro Corrugado 3/8\" (Para columnas/soleras)", unidad: "Varilla", precioRef: 40, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Hierro Corrugado 1/4\" (Para estribos)", unidad: "Varilla", precioRef: 27.5, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Alambre de amarre", unidad: "Libra", precioRef: 10, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Tubería PVC (Drenajes y agua potable)", unidad: "Tubo (Tramo)", precioRef: 47.5, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Ductos y cajas para instalaciones eléctricas", unidad: "Lote / Unidad", precioRef: 0, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Madera para formaletas y andamios", unidad: "Lote", precioRef: 0, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Flete de materiales (San José Pinula/Fraijanes)", unidad: "Viaje", precioRef: 0, cantidad: 0, subtotal: 0 },
        { id: crypto.randomUUID(), descripcion: "Mano de Obra (Zanjeo, fundición, levantado)", unidad: "Por m²", precioRef: 325, cantidad: 0, subtotal: 0 },
      ],
    },
  ];
}

/* ---------- handler ---------- */
export default async (req, context) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const store = getStore(STORE_NAME);
  const url = new URL(req.url);
  const segments = url.pathname.replace(/^\/api\/proformas\/?/, "").split("/").filter(Boolean);

  try {
    /* ---- GET /api/proformas ---- */
    if (req.method === "GET" && segments.length === 0) {
      let proformas = await loadProformas(store);
      if (proformas.length === 0) {
        proformas = getSeedData();
        await saveProformas(store, proformas);
      }
      return new Response(JSON.stringify(proformas), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    /* ---- POST /api/proformas ---- create new proforma */
    if (req.method === "POST" && segments.length === 0) {
      const body = await req.json();
      const proformas = await loadProformas(store);
      const newProforma = {
        id: crypto.randomUUID(),
        title: body.title || "Nueva Proforma",
        precioBase: body.precioBase || "",
        items: (body.items || []).map(it => ({
          id: crypto.randomUUID(),
          descripcion: it.descripcion || "",
          unidad: it.unidad || "",
          precioRef: Number(it.precioRef) || 0,
          cantidad: Number(it.cantidad) || 0,
          subtotal: (Number(it.precioRef) || 0) * (Number(it.cantidad) || 0),
        })),
      };
      proformas.push(newProforma);
      await saveProformas(store, proformas);
      return new Response(JSON.stringify(newProforma), {
        status: 201,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    /* ---- PUT /api/proformas/:id ---- update proforma */
    if (req.method === "PUT" && segments.length === 1) {
      const proformaId = segments[0];
      const body = await req.json();
      const proformas = await loadProformas(store);
      const idx = proformas.findIndex(p => p.id === proformaId);
      if (idx === -1) {
        return new Response(JSON.stringify({ error: "Proforma no encontrada" }), {
          status: 404,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        });
      }
      proformas[idx] = {
        ...proformas[idx],
        title: body.title ?? proformas[idx].title,
        precioBase: body.precioBase ?? proformas[idx].precioBase,
        items: (body.items || proformas[idx].items).map(it => ({
          id: it.id || crypto.randomUUID(),
          descripcion: it.descripcion || "",
          unidad: it.unidad || "",
          precioRef: Number(it.precioRef) || 0,
          cantidad: Number(it.cantidad) || 0,
          subtotal: (Number(it.precioRef) || 0) * (Number(it.cantidad) || 0),
        })),
      };
      await saveProformas(store, proformas);
      return new Response(JSON.stringify(proformas[idx]), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    /* ---- DELETE /api/proformas/:id ---- delete proforma */
    if (req.method === "DELETE" && segments.length === 1) {
      const proformaId = segments[0];
      let proformas = await loadProformas(store);
      const idx = proformas.findIndex(p => p.id === proformaId);
      if (idx === -1) {
        return new Response(JSON.stringify({ error: "Proforma no encontrada" }), {
          status: 404,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        });
      }
      proformas.splice(idx, 1);
      await saveProformas(store, proformas);
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    /* ---- POST /api/proformas/seed ---- force re-seed */
    if (req.method === "POST" && segments[0] === "seed") {
      const proformas = getSeedData();
      await saveProformas(store, proformas);
      return new Response(JSON.stringify(proformas), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Ruta no encontrada" }), {
      status: 404,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/proformas/*",
};
