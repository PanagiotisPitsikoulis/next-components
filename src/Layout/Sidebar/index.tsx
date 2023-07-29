import clsx from "clsx";
import { List, Divider, TextBox, Button, Stack, Label, Spacer } from "../..";

function Sidebar({ children, className }: SidebarProps) {
  return (
    <div className={className}>
      <div
        className={clsx({
          "w-page h-[90vh] border-r-2 border-base-200/50 backdrop-blur-xl px-2":
            true,
        })}
      >
        <Spacer dir='y' margin='item'></Spacer>
        <Stack dir='y' gap='component'>
          <TextBox prominent={true}>
            <p>Good morning,</p>
            <p>This is the sidebar.</p>
          </TextBox>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Divider size='full' dir='x' className='-mx-2'></Divider>
          <TextBox prominent={true}>
            <p>More options,</p>
            <p>Less important.</p>
          </TextBox>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Divider size='full' dir='x' className='-mx-2'></Divider>
          <TextBox prominent={true}>
            <p>More options,</p>
            <p>Less important.</p>
          </TextBox>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
          <Button variant='primary'>
            <p>👋</p>
            <p>Item</p>
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Sidebar;
