"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * O componente raiz da folha. Ele contém todos os outros componentes da folha.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog
 */
const Sheet = SheetPrimitive.Root;

/**
 * Um botão ou link que aciona a abertura de uma folha.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#trigger
 */
const SheetTrigger = SheetPrimitive.Trigger;

/**
 * Um botão ou link que aciona o fechamento de uma folha.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#close
 */
const SheetClose = SheetPrimitive.Close;

/**
 * Um portal que renderiza o conteúdo da folha em um novo nó DOM.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#portal
 */
const SheetPortal = SheetPrimitive.Portal;

/**
 * Um componente que renderiza uma sobreposição de folha.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Overlay>} props - As props para o componente SheetOverlay.
 * @returns {React.ReactElement} O componente SheetOverlay renderizado.
 */
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

/**
 * Define as diferentes variantes para o componente de folha.
 * Isso inclui estilos para diferentes lados da tela.
 */
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

/**
 * Props para o componente SheetContent.
 * @property {('top'|'bottom'|'left'|'right')} [side] - O lado da tela onde a folha deve aparecer.
 */
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

/**
 * Um componente que renderiza o conteúdo da folha.
 *
 * @param {SheetContentProps} props - As props para o componente SheetContent.
 * @returns {React.ReactElement} O componente SheetContent renderizado.
 */
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="size-4" />
        <span className="sr-only">Fechar</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

/**
 * Um componente que renderiza o cabeçalho da folha.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - As props para o componente SheetHeader.
 * @returns {React.ReactElement} O componente SheetHeader renderizado.
 */
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

/**
 * Um componente que renderiza o rodapé da folha.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - As props para o componente SheetFooter.
 * @returns {React.ReactElement} O componente SheetFooter renderizado.
 */
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

/**
 * Um componente que renderiza o título da folha.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Title>} props - As props para o componente SheetTitle.
 * @returns {React.ReactElement} O componente SheetTitle renderizado.
 */
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * Um componente que renderiza a descrição da folha.
 *
 * @param {React.ComponentProps<typeof SheetPrimitive.Description>} props - As props para o componente SheetDescription.
 * @returns {React.ReactElement} O componente SheetDescription renderizado.
 */
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetPortal,
  SheetOverlay,
};
