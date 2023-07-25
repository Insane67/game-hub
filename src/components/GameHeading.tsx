import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { platform, genre } }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
