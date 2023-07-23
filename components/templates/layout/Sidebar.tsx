import Divider from "@/components/lowLevel/ui/Divider";
import Stack from "@/components/lowLevel/layout/Stack";
import classNames from "classnames";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div
      className={classNames(
        "w-full",
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "text-muted",
        "bg-base-100",
        "bg-opacity-30",
        "backdrop-blur-2xl"
      )}
    >
      <div className='mx-page'>
        <Stack dir='x' gap='page' justify='between'>
          <div className='max-sm:hidden'>
            <Stack dir='x' gap='component'>
              <div className='bg-base-200 rounded-inner w-40 h-12 my-2'></div>
              {children}
            </Stack>
          </div>
          <Stack dir='x' gap='component'>
            <div className='bg-base-200 rounded-inner w-40 h-8'></div>
            <div className='bg-base-200 rounded-inner w-40 h-8'></div>
            <div className='bg-base-200 rounded-full w-8 h-8'></div>
          </Stack>
        </Stack>
      </div>
      <Divider margin='none' dir='x' />
    </div>
  );
};

export default Sidebar;
