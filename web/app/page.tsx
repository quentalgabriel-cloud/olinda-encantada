import { Gancho } from "@/app/sections/01-gancho";
import { Universo } from "@/app/sections/02-universo";
import { Turminha } from "@/app/sections/03-turminha";
import { Guardioes } from "@/app/sections/04-guardioes";
import { Conflito } from "@/app/sections/05-conflito";
import { Temporada1 } from "@/app/sections/06-temporada1";
import { Diferencial } from "@/app/sections/07-diferencial";
import { ModeloNegocio } from "@/app/sections/08-modelo-negocio";
import { Diretrizes } from "@/app/sections/09-diretrizes";
import { Cta } from "@/app/sections/10-cta";

export default function Home() {
  return (
    <>
      <Gancho />
      <Universo />
      <Turminha />
      <Guardioes />
      <Conflito />
      <Temporada1 />
      <Diferencial />
      <ModeloNegocio />
      <Diretrizes />
      <Cta />
    </>
  );
}
