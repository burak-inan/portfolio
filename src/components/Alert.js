import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"
  const customMessage= "This is not a real contact form. Reach me out here";
  const email= "burakinan.dev@gmail.com"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? `All good!` : `Oops!`}
          </AlertDialogHeader>
          <AlertDialogBody fontWeight="bold">
            <Text marginBottom="2rem">{message}</Text>
            <Text color="darkBlue">{customMessage}</Text>
            <Text color="darkRed">{email}</Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
