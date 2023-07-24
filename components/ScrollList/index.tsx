import clsx from "clsx";
import { ScrollListProps } from "../ComponentTypes";
import { Card, Divider, TextBox, Stack, Spacer } from "..";

function ScrollList({ children }: ScrollListProps) {
  return (
    <div>
      <Stack dir='y' gap='component'>
        <TextBox prominent={true}>
          <p>This is a title</p>
          <p>This a useless description.</p>
        </TextBox>
        <Divider dir='x' size='lg' />
        <div className='flex flex-row gap-5 overflow-x-scroll h-[13rem] w-lg'>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
          <Card size='sm' imageVisible={true}>
            <p>Card title</p>
            <p>Card description</p>
          </Card>
        </div>
      </Stack>
    </div>
  );
}

export default ScrollList;
