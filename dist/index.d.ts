import * as React from 'react';
import React__default from 'react';

interface ListCardProps {
    title: string;
    description: string;
    icon: React__default.ReactNode;
    children?: React__default.ReactNode;
}
declare function LinkCard({ title, description, icon, children, }: ListCardProps): React__default.JSX.Element;

interface LinkScrollListProps extends React.HTMLAttributes<HTMLElement> {
    props: {
        title: string;
        active?: string;
        content: {
            label: string;
            href: string;
        }[];
    }[];
}
declare function LinkScrollList({ props, className }: LinkScrollListProps): React.JSX.Element;

interface PageLink {
    label: string;
    link: string;
}
interface NavbarLinksProps {
    pageLinks: PageLink[];
}
declare const NavbarLinks: React__default.FC<NavbarLinksProps>;

declare function Navbar(): React__default.JSX.Element;
declare function SheetDemo(): React__default.JSX.Element;

declare function SideMenu({ props }: LinkScrollListProps): React__default.JSX.Element;

declare function TabsDemo(): React__default.JSX.Element;

interface TooltipMinimalProps {
    children: React__default.ReactNode;
    content: string;
}
declare function TooltipMinimal({ children, content }: TooltipMinimalProps): React__default.JSX.Element;

export { LinkCard, LinkScrollList, Navbar, NavbarLinks, SheetDemo, SideMenu, TabsDemo, TooltipMinimal };
