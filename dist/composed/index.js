import g from"react";function Z({title:e,description:t,icon:o,children:a}){return g.createElement("div",{className:"flex flex-row items-end justify-start gap-5 px-6 py-4 border rounded-md select-none max-sm:min-w-[37vh] w-fit border-border bg-background text-muted-foreground"},g.createElement("div",{className:"my-auto"},o),g.createElement("div",{className:"max-w-[20vh]"},g.createElement("h4",{className:"line-clamp-1 text-foreground"},e),g.createElement("p",{className:"line-clamp-1"},t)),g.createElement("div",{className:"ml-auto"},a))}import*as P from"react";import ee from"next/link";import*as v from"react";import*as p from"@radix-ui/react-scroll-area";import{clsx as _}from"clsx";import{twMerge as $}from"tailwind-merge";function r(...e){return $(_(e))}var M=v.forwardRef(({className:e,children:t,...o},a)=>v.createElement(p.Root,{ref:a,className:r("relative overflow-hidden",e),...o},v.createElement(p.Viewport,{className:"h-full w-full rounded-[inherit]"},t),v.createElement(V,null),v.createElement(p.Corner,null)));M.displayName=p.Root.displayName;var V=v.forwardRef(({className:e,orientation:t="vertical",...o},a)=>v.createElement(p.ScrollAreaScrollbar,{ref:a,orientation:t,className:r("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 border-t border-t-transparent p-[1px]",e),...o},v.createElement(p.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})));V.displayName=p.ScrollAreaScrollbar.displayName;function C({props:e,className:t}){return P.createElement(M,{className:r("pr-8 rounded-md",t)},e.map((o,a)=>P.createElement("div",{key:a,className:"p-4"},P.createElement("h4",{className:"mb-4 text-sm font-medium leading-none"},o.title),o.content.map(d=>P.createElement("div",{key:d.href,className:r("text-sm my-2 hover:underline",o.active!==d.href&&"text-muted-foreground",o.active===d.href&&"text-foreground")},P.createElement(ee,{href:d.href},d.label))))))}import te from"next/link";import D from"react";import{usePathname as oe}from"next/navigation";var y=({pageLinks:e})=>{let t=oe();return D.createElement(D.Fragment,null,e.map((o,a)=>D.createElement(te,{href:o.link,key:a,className:r("hover:text-foreground font-semibold",o.link===t?"text-foreground":"")},o.label)))};import l from"react";import Te from"next/link";import*as m from"react";import*as s from"@radix-ui/react-dialog";import{Cross2Icon as ie}from"@radix-ui/react-icons";import{cva as re}from"class-variance-authority";var W=s.Root,z=s.Trigger;var H=({className:e,...t})=>m.createElement(s.Portal,{className:r(e),...t});H.displayName=s.Portal.displayName;var B=m.forwardRef(({className:e,...t},o)=>m.createElement(s.Overlay,{className:r("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:o}));B.displayName=s.Overlay.displayName;var ae=re("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),L=m.forwardRef(({side:e="right",className:t,children:o,...a},d)=>m.createElement(H,null,m.createElement(B,null),m.createElement(s.Content,{ref:d,className:r(ae({side:e}),t),...a},o,m.createElement(s.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"},m.createElement(ie,{className:"h-4 w-4"}),m.createElement("span",{className:"sr-only"},"Close")))));L.displayName=s.Content.displayName;var ne=({className:e,...t})=>m.createElement("div",{className:r("flex flex-col space-y-2 text-center sm:text-left",e),...t});ne.displayName="SheetHeader";var se=({className:e,...t})=>m.createElement("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});se.displayName="SheetFooter";var me=m.forwardRef(({className:e,...t},o)=>m.createElement(s.Title,{ref:o,className:r("text-lg font-semibold text-foreground",e),...t}));me.displayName=s.Title.displayName;var le=m.forwardRef(({className:e,...t},o)=>m.createElement(s.Description,{ref:o,className:r("text-sm text-muted-foreground",e),...t}));le.displayName=s.Description.displayName;import*as u from"react";import{useTheme as Ne}from"next-themes";import{Sun as Se}from"lucide-react";import{Moon as Re}from"lucide-react";import*as N from"react";import{Slot as de}from"@radix-ui/react-slot";import{cva as pe}from"class-variance-authority";var ce=pe("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),k=N.forwardRef(({className:e,variant:t,size:o,asChild:a=!1,...d},Y)=>N.createElement(a?de:"button",{className:r(ce({variant:t,size:o,className:e})),ref:Y,...d}));k.displayName="Button";import*as n from"react";import*as i from"@radix-ui/react-dropdown-menu";import{CheckIcon as ue,ChevronRightIcon as fe,DotFilledIcon as ve}from"@radix-ui/react-icons";var j=i.Root,O=i.Trigger;var be=n.forwardRef(({className:e,inset:t,children:o,...a},d)=>n.createElement(i.SubTrigger,{ref:d,className:r("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...a},o,n.createElement(fe,{className:"ml-auto h-4 w-4"})));be.displayName=i.SubTrigger.displayName;var he=n.forwardRef(({className:e,...t},o)=>n.createElement(i.SubContent,{ref:o,className:r("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));he.displayName=i.SubContent.displayName;var I=n.forwardRef(({className:e,sideOffset:t=4,...o},a)=>n.createElement(i.Portal,null,n.createElement(i.Content,{ref:a,sideOffset:t,className:r("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o})));I.displayName=i.Content.displayName;var w=n.forwardRef(({className:e,inset:t,...o},a)=>n.createElement(i.Item,{ref:a,className:r("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...o}));w.displayName=i.Item.displayName;var ge=n.forwardRef(({className:e,children:t,checked:o,...a},d)=>n.createElement(i.CheckboxItem,{ref:d,className:r("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:o,...a},n.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},n.createElement(i.ItemIndicator,null,n.createElement(ue,{className:"h-4 w-4"}))),t));ge.displayName=i.CheckboxItem.displayName;var Pe=n.forwardRef(({className:e,children:t,...o},a)=>n.createElement(i.RadioItem,{ref:a,className:r("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...o},n.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},n.createElement(i.ItemIndicator,null,n.createElement(ve,{className:"h-4 w-4 fill-current"}))),t));Pe.displayName=i.RadioItem.displayName;var we=n.forwardRef(({className:e,inset:t,...o},a)=>n.createElement(i.Label,{ref:a,className:r("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...o}));we.displayName=i.Label.displayName;var xe=n.forwardRef(({className:e,...t},o)=>n.createElement(i.Separator,{ref:o,className:r("-mx-1 my-1 h-px bg-muted",e),...t}));xe.displayName=i.Separator.displayName;var ye=({className:e,...t})=>n.createElement("span",{className:r("ml-auto text-xs tracking-widest opacity-60",e),...t});ye.displayName="DropdownMenuShortcut";function F(){let{setTheme:e}=Ne();return u.createElement(j,null,u.createElement(O,{asChild:!0},u.createElement(k,{variant:"ghost",size:"icon"},u.createElement(Se,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),u.createElement(Re,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),u.createElement("span",{className:"sr-only"},"Toggle theme"))),u.createElement(I,{align:"end"},u.createElement(w,{onClick:()=>e("light")},"Light"),u.createElement(w,{onClick:()=>e("dark")},"Dark"),u.createElement(w,{onClick:()=>e("system")},"System")))}import{AlignJustify as Me}from"lucide-react";var A=[{label:"Upload",link:"/upload"},{label:"Home",link:"/"},{label:"About",link:"/about"},{label:"Contact",link:"/contact"}];function Ce(){return l.createElement("nav",{className:"sticky top-0 left-0 right-0 z-50 flex flex-row items-center justify-between w-full py-3 border-b select-none bg-background/60 backdrop-blur-xl border-border px-x-global px-global-x"},l.createElement("div",{className:"flex flex-row items-center gap-8"},l.createElement(Te,{href:"/"},l.createElement("h1",{className:"text-xl font-bold"},"2PAE")),l.createElement("div",{className:"flex flex-row gap-5 max-sm:hidden text-muted-foreground"},l.createElement(y,{pageLinks:A}))),l.createElement("div",{className:"flex flex-row items-center gap-5"},l.createElement(F,null),l.createElement(G,null)))}function G(){return l.createElement(W,null,l.createElement(z,{asChild:!0},l.createElement("button",{className:"md:hidden"},l.createElement(Me,null))),l.createElement(L,null,l.createElement("div",{className:"flex flex-col gap-5 text-muted-foreground"},l.createElement(y,{pageLinks:A}))))}import U from"react";function De({props:e}){return U.createElement("div",null,U.createElement(C,{props:e,className:"h-[70vh] w-48"}))}import c from"react";import*as b from"react";import*as f from"@radix-ui/react-tabs";var J=f.Root,q=b.forwardRef(({className:e,children:t,...o},a)=>b.createElement(f.List,{ref:a,className:r("inline-flex h-9 items-start justify-start text-muted-foreground border-b-2 border-border",e),...o},b.createElement("div",{className:"flex flex-row"},t)));q.displayName=f.List.displayName;var S=b.forwardRef(({className:e,...t},o)=>b.createElement(f.Trigger,{ref:o,className:r("border-border inline-flex items-start justify-start whitespace-nowrap px-3 pb-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground min-w-[10vh] translate-y-[2px]",e),...t}));S.displayName=f.Trigger.displayName;var R=b.forwardRef(({className:e,...t},o)=>b.createElement(f.Content,{ref:o,className:r("mt-6 md:mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-4",e),...t}));R.displayName=f.Content.displayName;function Le(){return c.createElement(J,{defaultValue:"account",className:"w-full"},c.createElement(q,{className:"grid w-full grid-cols-2"},c.createElement(S,{value:"account"},"Account"),c.createElement(S,{value:"password"},"Password")),c.createElement(R,{value:"account"},c.createElement("div",{className:"prose dark:prose-invert"},c.createElement("h2",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, blanditiis."),c.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe cupiditate harum rerum odio exercitationem minima deleniti et, tempora doloremque assumenda voluptate, commodi qui quisquam id corrupti laudantium, vero accusamus dolorem iure sapiente! Velit voluptatem corporis reprehenderit. Laborum libero excepturi quas iusto accusantium quibusdam vitae tenetur expedita repudiandae, impedit rerum facere? Voluptate ex esse quaerat aliquam iusto. Rerum consequuntur ipsam at labore, alias facere totam aliquid modi enim temporibus exercitationem laboriosam veritatis architecto vitae ex eum reiciendis minus libero rem necessitatibus quibusdam quisquam quaerat laborum repellendus? Possimus consequuntur quo vitae architecto asperiores officia laboriosam mollitia consectetur nihil saepe, iste est."))),c.createElement(R,{value:"password"},c.createElement("div",{className:"prose dark:prose-invert"},c.createElement("h2",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, blanditiis."),c.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe cupiditate harum rerum odio exercitationem minima deleniti et, tempora doloremque assumenda voluptate, commodi qui quisquam id corrupti laudantium, vero accusamus dolorem iure sapiente! Velit voluptatem corporis reprehenderit. Laborum libero excepturi quas iusto accusantium quibusdam vitae tenetur expedita repudiandae, impedit rerum facere? Voluptate ex esse quaerat aliquam iusto. Rerum consequuntur ipsam at labore, alias facere totam aliquid modi enim temporibus exercitationem laboriosam veritatis architecto vitae ex eum reiciendis minus libero rem necessitatibus quibusdam quisquam quaerat laborum repellendus? Possimus consequuntur quo vitae architecto asperiores officia laboriosam mollitia consectetur nihil saepe, iste est."))))}import x from"react";import*as T from"react";import*as h from"@radix-ui/react-tooltip";var K=h.Provider,Q=h.Root,X=h.Trigger,E=T.forwardRef(({className:e,sideOffset:t=4,...o},a)=>T.createElement(h.Content,{ref:a,sideOffset:t,className:r("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));E.displayName=h.Content.displayName;function ke({children:e,content:t}){return x.createElement(K,null,x.createElement(Q,null,x.createElement(X,{asChild:!0,className:"w-fit"},e),x.createElement(E,null,x.createElement("p",null,t))))}export{Z as LinkCard,C as LinkScrollList,Ce as Navbar,y as NavbarLinks,G as SheetDemo,De as SideMenu,Le as TabsDemo,ke as TooltipMinimal};
