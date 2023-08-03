import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { VariantProps } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { DayPicker } from "react-day-picker";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as LabelPrimitive from "@radix-ui/react-label";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as TogglePrimitive from "@radix-ui/react-toggle";
export const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
export const ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
export const Toast: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLIElement>>;
export const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const ToastClose: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const ToastTitle: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ToastDescription: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;
export const Sheet: React.FC<SheetPrimitive.DialogProps>;
export const SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "bottom" | "left" | "right" | "rightFull" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
export const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
export const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
export const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
export const SheetTitle: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export const SheetDescription: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const NavbarStyles: (props?: ({
    variant?: "fill" | "outline" | null | undefined;
    blur?: boolean | null | undefined;
    size?: null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface NavbarProps extends React.ButtonHTMLAttributes<HTMLElement>, VariantProps<typeof NavbarStyles> {
}
export const Navbar: React.FC<NavbarProps>;
export const NavbarBrand: React.FC<React.HTMLAttributes<HTMLElement>>;
export const NavbarMenu: React.FC<React.HTMLAttributes<HTMLElement>>;
interface NavbarMenuItemProps extends React.HTMLAttributes<HTMLElement> {
    active?: boolean;
}
export const NavbarMenuItem: React.FC<NavbarMenuItemProps>;
export const NavbarActions: React.FC<React.HTMLAttributes<HTMLElement>>;
export const NavbarHeader: React.FC<React.HTMLAttributes<HTMLElement>>;
interface HamburgerMenuProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    description: string;
}
export const HamburgerMenu: React.FC<HamburgerMenuProps>;
export { Menu };
export const ScrollArea: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ScrollBar: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const Collapsible: import("react").ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & import("react").RefAttributes<HTMLDivElement>>;
export const CollapsibleTrigger: import("react").ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export const CollapsibleContent: import("react").ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare const SideBarStyles: (props?: ({
    variant?: "fill" | "outline" | null | undefined;
    blur?: boolean | null | undefined;
    fixed?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface SideBarProps extends React.ButtonHTMLAttributes<HTMLElement>, VariantProps<typeof SideBarStyles> {
}
export const SideBar: React.FC<SideBarProps>;
export const SideBarSection: React.FC<React.HTMLAttributes<HTMLElement>>;
export const SideBarSectionHeader: React.FC<React.HTMLAttributes<HTMLElement>>;
interface SideBarSectionItemProps extends React.HTMLAttributes<HTMLElement> {
    active?: boolean;
}
export const SideBarSectionItem: React.FC<SideBarSectionItemProps>;
export const SideBarCollapsibleSection: React.FC<React.HTMLAttributes<HTMLElement>>;
export const SideBarCollapsibleItem: React.FC<React.HTMLAttributes<HTMLElement>>;
export const Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
export const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export const Alert: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
export const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
export const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
export const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export const AlertDialog: React.FC<AlertDialogPrimitive.AlertDialogProps>;
export const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const AlertDialogContent: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const AlertDialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
export const AlertDialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
export const AlertDialogTitle: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export const AlertDialogDescription: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export const AlertDialogAction: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const AlertDialogCancel: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
export function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
declare const CardStyles: (props?: ({
    outline?: boolean | null | undefined;
    fill?: boolean | null | undefined;
    padding?: boolean | null | undefined;
    flex?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardStyles> {
}
export const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
export const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
type CalendarProps = React.ComponentProps<typeof DayPicker>;
export function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export const Dialog: React.FC<DialogPrimitive.DialogProps>;
export const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
export const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
export const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export const Command: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & {
    label?: string | undefined;
    shouldFilter?: boolean | undefined;
    filter?: ((value: string, search: string) => number) | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    loop?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
export const CommandDialog: ({ children, ...props }: CommandDialogProps) => React.JSX.Element;
export const CommandInput: React.ForwardRefExoticComponent<Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value"> & {
    value?: string | undefined;
    onValueChange?: ((search: string) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export const CommandList: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const CommandEmpty: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const CommandGroup: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: React.ReactNode;
    value?: string | undefined;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const CommandSeparator: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement> & {
    alwaysRender?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const CommandItem: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect" | "value" | "disabled"> & {
    disabled?: boolean | undefined;
    onSelect?: ((value: string) => void) | undefined;
    value?: string | undefined;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayName: string;
};
export const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
export const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
export const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
export const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayName: string;
};
export const ContextMenu: React.FC<ContextMenuPrimitive.ContextMenuProps>;
export const ContextMenuTrigger: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
export const ContextMenuGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuPortal: React.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
export const ContextMenuSub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>;
export const ContextMenuRadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuLabel: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayName: string;
};
export const HoverCard: React.FC<HoverCardPrimitive.HoverCardProps>;
export const HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
export const HoverCardContent: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import("class-variance-authority/types").ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
export const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React.JSX.Element;
export const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: import("react-hook-form").FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
export const FormItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export const FormLabel: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export const FormControl: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-slot").SlotProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
export const FormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export const FormMessage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export const MenubarMenu: {
    (props: MenubarPrimitive.ScopedProps<MenubarPrimitive.MenubarMenuProps>): JSX.Element;
    displayName: string;
};
export const MenubarGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
export const MenubarPortal: React.FC<MenubarPrimitive.MenubarPortalProps>;
export const MenubarSub: React.FC<MenubarPrimitive.MenubarSubProps>;
export const MenubarRadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export const Menubar: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const MenubarTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const MenubarSubTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const MenubarSubContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const MenubarContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const MenubarItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const MenubarCheckboxItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const MenubarRadioItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const MenubarLabel: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export const MenubarSeparator: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const MenubarShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayname: string;
};
export const NavigationMenu: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
export const NavigationMenuList: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React.RefAttributes<HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
export const NavigationMenuItem: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>;
export const navigationMenuTriggerStyle: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export const NavigationMenuTrigger: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const NavigationMenuContent: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const NavigationMenuLink: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export const NavigationMenuViewport: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const NavigationMenuIndicator: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const Popover: React.FC<PopoverPrimitive.PopoverProps>;
export const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ScrollViewStyles: (props?: ({
    intent?: "secondary" | "primary" | null | undefined;
    size?: null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface ScrollViewProps extends React.ButtonHTMLAttributes<HTMLElement>, VariantProps<typeof ScrollViewStyles> {
}
export const ScrollView: React.FC<ScrollViewProps>;
export const ScrollViewItem: React.FC<React.HTMLAttributes<HTMLElement>>;
export const Select: React.FC<SelectPrimitive.SelectProps>;
export const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
export const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
export const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
export const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
export const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
export const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
export const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
export const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
export const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
export const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export function Toaster(): import("react").JSX.Element;

//# sourceMappingURL=types.d.ts.map
