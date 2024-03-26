import * as React from 'react';
import {
  VStack,
  ToastTitle,
  ToastDescription,
  Toast,
} from '@gluestack-ui/themed';

const DEFAULT_TITLE = 'Error!';
const DEFAULT_DESCRIPTION =
  'There was an error processing your request. Please try again later.';
const DEFAULT_ACTION = 'info';

interface Props {
  id: number;
  title?: string;
  description?: string;
  action?: 'info' | 'error' | 'warning' | 'success' | 'attention' | undefined;
}
function ShowToast({
  id,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  action = DEFAULT_ACTION,
}: Props) {
  return (
    <Toast nativeID={`toast-${id}`} action={action} variant="solid">
      <VStack space="xs">
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </VStack>
    </Toast>
  );
}
export default ShowToast;
