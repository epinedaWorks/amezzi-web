"use client";

import { useSyncExternalStore } from "react";

const sinSuscripcion = () => () => {};

// El año se lee solo en el navegador: la página se prerenderiza en el build
// y así no queda congelado en el año en que se compiló.
export default function AnioActual() {
  const anio = useSyncExternalStore(
    sinSuscripcion,
    () => new Date().getFullYear(),
    () => null
  );
  return <>{anio}</>;
}
