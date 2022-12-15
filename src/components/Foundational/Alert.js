import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';


export function Alert({ isOpen, onClose }) {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Welcome!
          </AlertDialogHeader>

          <AlertDialogBody>
            This new website is still under construction so most of it may be empty.
            Fret not though, I'm working on it! :)
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>
              Continue
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}