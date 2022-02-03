import { useRouter } from "next/router";
import { IconButton } from "@chakra-ui/react";
import { FaTrashRestoreAlt } from "react-icons/fa";

const TrashButton = () => {
  const router = useRouter();
  return (
    <IconButton
      colorScheme="gray"
      aria-label="Search database"
      icon={<FaTrashRestoreAlt />}
      borderRadius="50%"
      onClick={() => router.replace("/TrashTodo/")}
    />
  );
};

export default TrashButton;
