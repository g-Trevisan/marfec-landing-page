import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Uma função utilitária para mesclar classes CSS.
 * Ela usa `clsx` para aplicar classes condicionalmente e `tailwind-merge` para resolver conflitos de classes do Tailwind CSS.
 *
 * @param {...ClassValue[]} inputs - Uma lista de valores de classe para mesclar. Podem ser strings, arrays ou objetos.
 * @returns {string} A string de classes CSS mesclada.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
