import clsx from "clsx";
import { ScrollList, ButtonGroup, Stack, Divider, Button, Card } from "../..";

export type HomePageProps = {
  children: React.ReactNode;
  className?: string;
};

function HomePage({ children, className }: HomePageProps) {
  return (
    <div className={className}>
      <div className={clsx("w-full max-sm:w-[40vh] py-component")}>
        <Stack dir='y' gap='component'>
          <Stack dir='x' center={true} gap='full'>
            <ButtonGroup>
              <Button variant='secondary'>
                <p>✌️</p>
                <p>Button</p>
              </Button>
              <Button variant='tertiary'>
                <p>✌️</p>
                <p>Button</p>
              </Button>
              <Button variant='tertiary' className='max-sm:hidden'>
                <p>✌️</p>
                <p>Button</p>
              </Button>
            </ButtonGroup>
            <Button variant='primary' className='max-sm:hidden'>
              <p>👉</p>
              <p className='text-muted'>Click me</p>
            </Button>
          </Stack>
          <Divider dir='x' size='full' />
          <ScrollList
            description='Top picks for you. Updated daily.'
            size='md'
            title='Listen now'
          >
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='md'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
          </ScrollList>
          <ScrollList
            title='Made for you.'
            size='sm'
            description='Your personal playlists. Updated daily.'
          >
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
            <Card size='sm'>
              <p>This is a card component</p>
              <p>Card description</p>
            </Card>
          </ScrollList>
        </Stack>
      </div>
    </div>
  );
}

export default HomePage;
