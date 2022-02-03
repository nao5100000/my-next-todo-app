import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsFillPenFill } from "react-icons/bs";

const NewButton = () => {
  const router = useRouter();
  return (
    <IconButton
      colorScheme="orange"
      aria-label="Search database"
      icon={<BsFillPenFill />}
      borderRadius="50%"
      onClick={() => router.replace("/NewTodo/")}
    />
  );
};

export default NewButton;
