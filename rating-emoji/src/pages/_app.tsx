import "@/styles/globals.css";
//import {RatingEmoji} from "@/Componentes/Rating"
import { RatingEmoji } from "./Componentes/Rating";


export default function App() {
  return (
    <section className="flex flex-col gap-4 w-svw h-svh bg-amber-100 ">
        <RatingEmoji />
    </section>
  );
}
