import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='https://i.ytimg.com/vi/hg0KPDrqlBQ/hqdefault.jpg' />
          <Button>Try it Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              impedit!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              neque, distinctio velit asperiores est consequatur possimus. Sint
              porro, eligendi voluptates et distinctio enim consectetur sunt
              ipsa nesciunt quae blanditiis expedita.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='https://i.ytimg.com/vi/nySSyJGkA6M/hqdefault.jpg'></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
